/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { UserShort } from "../../UserShort/UserShort";
import {
  answerTemplate,
  fetchAnswerById,
} from "../../../app/Utils/answerUtilities";
import { Answer, Owner } from "../../../app/interface";
import { useAppSelector } from "../../../app/hooks";
import {
  postTemplate,
  getPostById,
  closePost,
} from "../../../app/Utils/postUtilities";
import { useNavigate } from "react-router-dom";
/*-----------IMPORT MUI & CSS-----------*/
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Navigate } from "react-router-dom";

/*--------------------------------------------------------*/
interface Props {
  answer?: Answer;
  id?: string;
  setSelectedAnswer: Function;
  postOwner: Owner;
  postOpen: Boolean;
}
export const AnswerDetails = ({
  answer,
  id,
  setSelectedAnswer,
  postOwner,
  postOpen,
}: Props) => {
  const user = useAppSelector((state) => state.user.data);
  const [answerData, setAnswerData] = useState<Answer>(answerTemplate);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (id && id !== "") {
      fetchAnswerById(id).then((res) => {
        setAnswerData(res);
      });
    }
  }, [id]);

  useEffect(() => {
    if (answer) {
      setAnswerData(answer);
    }
  }, [answer]);

  const handleMarkSolution = () => {
    setOpen(true);
  };

  const handleClose = (shouldClosePost: Boolean) => {
    setOpen(false);
    if (shouldClosePost) {
      closePost(answerData.post).then(() => {
        navigate(0);
      });
    }
  };

  return (
    <Box>
      <Typography variant="body1" align="left" gutterBottom>
        {answerData.content}
      </Typography>
      <Typography
        variant="caption"
        align="left"
        display={"flex"}
        alignItems="center"
      >
        Respondido el {answerData.createdAt} by
        <UserShort user={answerData.owner} />
      </Typography>
      <Box
        sx={{ width: "100%", py: 1 }}
        display="flex"
        justifyContent="flex-start"
      >
        <Button
          variant="text"
          color="primary"
          onClick={(event) => {
            setSelectedAnswer(answerData._id);
          }}
          sx={{ mr: 1 }}
        >
          {answerData.comments.length} comentarios{" "}
        </Button>
        {user?._id === postOwner._id && postOpen && (
          <Button
            startIcon={<CheckIcon />}
            onClick={() => handleMarkSolution()}
            variant="contained"
          >
            Marcar como solución
          </Button>
        )}
      </Box>
      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogTitle>
          ¿Quieres marcar esta respuesta como la solución?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Al marcar esta respuesta como la solución, tu publicación se cerrará
            y no será posible añadir más respuestas.
          </DialogContentText>
          <Button onClick={() => handleClose(true)}>
            Marcar como solución
          </Button>
          <Button onClick={() => handleClose(false)} autoFocus={true}>
            Cancelar
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
