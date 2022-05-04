/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useParams } from "react-router-dom";
import {
  postNewAnswer,
  answerTemplate,
} from "../../../app/Utils/answerUtilities";
import { Answer } from "../../../app/interface";
import { ownerTemplate } from "../../../app/Utils/userUtilities";
/*-----------IMPORT MUI & CSS-----------*/
import { Alert } from "@mui/material";
import {
  StyledPaper,
  StyledTypography,
  StyledTextField,
  StyledButton,
  StyledBox,
} from "./StyledComponents";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  Fade,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
/*--------------------------------------------------------*/

interface Error {
  errorSubmit: string;
}

export default function CreateAnswer(id: any) {
  const usuario = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [answer, setAnswer] = useState<Answer>(answerTemplate);
  const [error, setError] = useState<Error>({ errorSubmit: "" });
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState("Enviando...");

  useEffect(() => {
    setAnswer({
      ...answer,
      post: id.id,
      owner: { ...ownerTemplate, _id: usuario._id },
    });
  }, [usuario, id]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setAnswer({ ...answer, content: event.target.value });
  };

  const handleSubmit = () => {
    if (error.errorSubmit.length > 0) {
      setError({ errorSubmit: "" });
    }
    if (answer.content.length > 0) {
      setOpen(true);
      dispatch(postNewAnswer(answer))
        .then((res) => {
          setModalState("Tu respuesta fue enviada correctamente");
        })
        .catch((err) => {
          setModalState("Error al enviar la respuesta");
        });
      setAnswer({ ...answer, content: "" });
    } else {
      setError({ errorSubmit: "No has puesto nada como respuesta!" });
      setTimeout(() => setError({ errorSubmit: "" }), 4000);
    }
  };
  const handleClose = () => {
    if (modalState !== "Enviando...") {
      setOpen(false);
      navigate(0);
    }
  };

  return (
    <StyledPaper>
      <StyledTypography>Responder</StyledTypography>
      <StyledBox>
        <StyledTextField
          required
          multiline
          id="outlined-basic"
          label="Tu respuesta"
          variant="outlined"
          minRows={3}
          maxRows={6}
          value={answer.content}
          onChange={(event) => handleInputChange(event)}
        />
        <StyledButton
          variant="contained"
          onClick={handleSubmit}
          disabled={answer.content === ""}
        >
          Enviar
        </StyledButton>
      </StyledBox>
      {error.errorSubmit && <Alert severity="error">{error.errorSubmit}</Alert>}
      <Modal open={open} onClose={() => handleClose}>
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" align="center">
              {modalState}
            </Typography>
            {modalState === "Enviando" && <CircularProgress />}
            {modalState === "Tu respuesta fue enviada correctamente" && (
              <CheckIcon fontSize="large" color="info" />
            )}
            {modalState === "Error al enviar la respuesta" && (
              <ErrorIcon fontSize="large" color="error" />
            )}
            {modalState !== "Enviando..." && (
              <Button onClick={() => handleClose()}>Aceptar</Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </StyledPaper>
  );
}
