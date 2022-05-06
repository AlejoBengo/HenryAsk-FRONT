import React, { useEffect, useState } from "react";
import { commentTemplate } from "../../../app/Utils/commentUtilities";
import {
  CircularProgress,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Button, Box } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import { createComment } from "../../../app/Utils/commentUtilities";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

interface Props {
  answerId: string;
}
export const CreateComment = ({ answerId }: Props) => {
  const user = useAppSelector((state) => state.user.data);
  const [comment, setComment] = React.useState(commentTemplate);
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState("Enviando...");
  const navigate = useNavigate();
  const handleCommentSend = () => {
    setOpen(true);
    setModalState("Enviando...");
    createComment(comment)
      .then((res) => {
        setModalState("Tu comentario fue enviado correctamente");
        setComment(commentTemplate);
      })
      .catch((err) => {
        setModalState("Error al enviar el comentario");
      });
  };
  const handleClose = () => {
    if (modalState !== "Enviando...") {
      setOpen(false);
      navigate(0);
    }
  };
  useEffect(() => {
    setComment({
      ...comment,
      owner: {
        _id: user._id,
        user_name: user.user_name,
        profile_picture: user.profile_picture,
        avatar:user.avatar,
        role: user.role,
      },
      answer: answerId,
    });
    return () => {
      setComment(commentTemplate);
      setOpen(false);
      setModalState("Enviando...");
    };
  }, [user, answerId]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="Comentario"
        variant="outlined"
        name="content"
        sx={{ width: "85%", margin: "1em" }}
        value={comment.content}
        onChange={(e) => {
          setComment({ ...comment, content: e.target.value });
        }}
      />
      <Button
        color="primary"
        variant="contained"
        disabled={comment.content === ""}
        onClick={() => handleCommentSend()}
      >
        Enviar
      </Button>
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
            {modalState === "Tu comentario fue enviado correctamente" && (
              <CheckIcon fontSize="large" color="info" />
            )}
            {modalState === "Error al enviar el comentario" && (
              <ErrorIcon fontSize="large" color="error" />
            )}
            {modalState !== "Enviando..." && (
              <Button onClick={() => handleClose()}>Aceptar</Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
