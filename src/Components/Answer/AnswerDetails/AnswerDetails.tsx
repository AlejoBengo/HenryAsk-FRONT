/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { UserShort } from "../../UserShort/UserShort";
import {
  answerTemplate,
  fetchAnswerById,
  editAnswer,
  deleteAnswer,
} from "../../../app/Utils/answerUtilities";
import { Answer, Owner } from "../../../app/interface";
import { useAppSelector } from "../../../app/hooks";
import { closePost } from "../../../app/Utils/postUtilities";
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
  Modal,
} from "@mui/material";
import {
  StyledDiv,
  BotonBorrar,
  BotonEditar,
  BotonCerrar,
  ModalTextField,
  BoxModal2,
  AreYouSure,
  BotonBorrar2,
  BotonGuardar,
  ModalTextFieldContainer,
  BoxModal,
} from "./StyledComponents";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.data);
  const [answerData, setAnswerData] = useState<Answer>(answerTemplate);
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [editable, setEditable] = useState({ id: "", content: "" });

  useEffect(() => {
    if (id && id !== "") {
      fetchAnswerById(id).then((res) => {
        setAnswerData(res);
        setEditable({ id: id, content: res.content });
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

  const handleOpenEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenEdit(!openEdit);
    setEditable({ ...editable, content: answerData.content });
  };

  const handleOpenDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDelete(!openDelete);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditable({ ...editable, content: event.target.value });
  };

  const handleSaver = async (event: React.MouseEvent<HTMLButtonElement>) => {
    editAnswer(editable);
    window.location.reload();
  };

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof id === "string") {
      deleteAnswer(id);
    }
    window.location.reload();
  };

  return (
    <Box>
      <Typography variant="body1" align="left" gutterBottom>
        {answerData.content}
      </Typography>
      <StyledDiv>
        <Typography
          variant="caption"
          align="left"
          display={"flex"}
          alignItems="center"
        >
          Respondido by
          <UserShort user={answerData.owner} />
        </Typography>

        {user._id === answerData.owner._id && (
          <BotonEditar onClick={handleOpenEdit}>Editar</BotonEditar>
        )}
        {(user._id === answerData.owner._id || user.role > 3) && (
          <BotonBorrar
            onClick={handleOpenDelete}
            color="error"
            variant="contained"
          >
            <DeleteIcon fontSize="small" />
          </BotonBorrar>
        )}
        <Modal open={openEdit}>
          <BoxModal>
            <BotonCerrar
              color="error"
              variant="contained"
              onClick={handleOpenEdit}
            >
              Cerrar
            </BotonCerrar>
            <ModalTextFieldContainer>
              <ModalTextField
                multiline
                value={editable.content}
                onChange={handleInputChange}
              />
            </ModalTextFieldContainer>
            <BotonGuardar onClick={handleSaver}>Guardar</BotonGuardar>
          </BoxModal>
        </Modal>
        <Modal open={openDelete}>
          <BoxModal2>
            <BotonCerrar
              style={{ marginTop: "-6vh" }}
              variant="contained"
              onClick={handleOpenDelete}
            >
              Cerrar
            </BotonCerrar>
            <AreYouSure>ARE YOU SURE?</AreYouSure>
            <BotonBorrar2
              onClick={handleDelete}
              color="error"
              variant="contained"
            >
              <DeleteIcon fontSize="small" />
            </BotonBorrar2>
          </BoxModal2>
        </Modal>
      </StyledDiv>
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
          {answerData.comments.length} comentarios
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
