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
import { reportPost } from "../../../app/Utils/postReport";
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
  Grid,
  Menu,
  FormControl,
  Divider,
  InputLabel,
  Select,
  DialogActions,
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
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
import { StyledTextField } from "../../Style/StyledComponents";
import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { MenuItem } from "@mui/material";
import { TituloForo } from "../../Style/StyledComponents";
import MoreVertIcon from "@mui/icons-material/MoreVert";

/*--------------------------------------------------------*/
interface Props {
  answer?: any;
  id?: string;
  setSelectedAnswer: Function;
  postOwner: Owner;
  postOpen: Boolean;
  post: any;
}
export const AnswerDetails = ({
  answer,
  id,
  setSelectedAnswer,
  postOwner,
  postOpen,
  post,
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

  const handleOpenEdit = (event: any) => {
    setAnchorEl(null);
    setOpenEdit(!openEdit);
    setEditable({ ...editable, content: answerData.content });
  };

  const handleOpenDelete = (event: any) => {
    setAnchorEl(null);
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModalReportRes, setOpenModalReportRes] = React.useState(false);
  const usuario = useAppSelector((state) => state.user.data);
  let [infoReportRes, setInfoReportRes] = React.useState({
    reason: "",
    description: "",
    owner: usuario,
    status: "PENDING",
    post: {},
    answer: {},
    comment: {},
  });
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseModalReport = () => {
    setAnchorEl(null);
    setOpenModalReportRes(false);
    setInfoReportRes(
      (infoReportRes = {
        reason: "",
        description: "",
        owner: usuario,
        status: "PENDING",
        post: {},
        answer: {},
        comment: {},
      })
    );
  };
  const handleChangeOption = (event: any) => {
    setInfoReportRes(
      (infoReportRes = { ...infoReportRes, reason: event.target.value })
    );
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInfoReportRes(
      (infoReportRes = {
        ...infoReportRes,
        description: event.target.value,
      })
    );
  };
  const handleSubmitModalReport = () => {
    setAnchorEl(null);
    setOpenModalReportRes(false);
    if (infoReportRes.reason === "" || infoReportRes.description === "") {
      alert(
        "debes colocar una razon de report o enviar descripcion del reporte"
      );
    } else {
      setInfoReportRes((infoReportRes = { ...infoReportRes, owner: usuario }));
      reportPost(infoReportRes).then(
        (response) =>
          setInfoReportRes(
            (infoReportRes = {
              reason: "",
              description: "",
              owner: usuario,
              status: "PENDING",
              post: {},
              answer: {},
              comment: {},
            })
          ),
        null
      );
    }
  };
  const handleOpenModalReport = () => {
    setOpenModalReportRes(true);
    setInfoReportRes(
      (infoReportRes = { ...infoReportRes, answer: answerData })
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={9}
          sx={{
            margin: "1rem 0em 0em 1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <UserShort user={answerData.owner} />
        </Grid>
        <Grid
          item
          xs={2.7}
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <Box>
            <IconButton onClick={handleMenu} aria-label="delete" size="large">
              <MoreVertIcon fontSize="inherit" />
            </IconButton>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {user._id === answerData.owner._id && (
              <MenuItem onClick={handleOpenEdit}>Editar</MenuItem>
            )}
            {(user._id === answerData.owner._id || user.role > 3) && (
              <MenuItem onClick={handleOpenDelete}>
                Eliminar respuesta
              </MenuItem>
            )}
            {user._id !== answerData.owner._id && (
              <MenuItem onClick={handleOpenModalReport}>
                Reportar respuesta
              </MenuItem>
            )}
          </Menu>
          {/* MODAL REPORT RESPUESTA */}
          <div>
            <Dialog
              open={openModalReportRes}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              maxWidth="md"
            >
              <DialogTitle
                id="alert-dialog-title"
                textAlign="center"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "2.5vw" }}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"
                  />
                </div>
                <Box>
                  <TituloForo sx={{ borderBottom: "6px solid yellow" }}>
                    Reportar Posteo
                  </TituloForo>
                </Box>
                <Button
                  onClick={handleCloseModalReport}
                  sx={{ color: "error.main", fontSize: "15px" }}
                  color="error"
                  variant="outlined"
                >
                  X
                </Button>
              </DialogTitle>
              <Divider />
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  sx={{ minHeight: "20vh" }}
                >
                  <Grid container spacing={2} sx={{ width: "40vw" }}>
                    <Grid item xs={12}>
                      <TituloForo
                        sx={{
                          borderBottom: "6px solid yellow",
                          fontWeight: "bold",
                        }}
                      >
                        Razon:
                      </TituloForo>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      padding="0px"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "80px",
                      }}
                    >
                      <FormControl
                        sx={{ minWidth: 120, width: "100%" }}
                        size="small"
                        error={infoReportRes.reason ? false : true}
                      >
                        <InputLabel id="demo-select-small">
                          Elija una razon
                        </InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={infoReportRes.reason}
                          label="Elija una razon"
                          onChange={handleChangeOption}
                          sx={{ width: "100%" }}
                        >
                          <MenuItem value="Información erronea.">
                            Información erronea
                          </MenuItem>
                          <MenuItem value="Es spam.">Es spam</MenuItem>
                          <MenuItem value="Lenguaje o símbolos que incitan al odio.">
                            Lenguaje o símbolos que incitan al odio
                          </MenuItem>
                          <MenuItem value="Bullying o acoso.">
                            Bullying o acoso
                          </MenuItem>
                          <MenuItem value="Este usuario se hace pasar por mí.">
                            Este usuario se hace pasar por mí
                          </MenuItem>
                          <MenuItem value="Contiene información personal.">
                            Contiene información personal
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Box display="flex" alignItems="center">
                        {infoReportRes.reason}
                        {infoReportRes.reason ? <CheckIcon /> : null}
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="filled"
                        multiline
                        label="Descripcion del reporte"
                        name="description"
                        value={infoReportRes.description}
                        onChange={(event) => handleDescriptionChange(event)}
                        minRows={3}
                        maxRows={5}
                      ></StyledTextField>
                    </Grid>
                  </Grid>
                </DialogContentText>
              </DialogContent>
              <Divider />
              <DialogActions sx={{ padding: 2 }}>
                <Button
                  onClick={handleSubmitModalReport}
                  autoFocus
                  color="error"
                >
                  Reportar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          {/* MODAL REPORT RESPUESTA end */}
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "start" }}>
          <Typography
            variant="body1"
            align="left"
            gutterBottom
            sx={{ padding: "10px 10px 10px 25px" }}
          >
            {answerData.content}
          </Typography>
        </Grid>
      </Grid>

      <StyledDiv>
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
            <BotonGuardar variant="contained" onClick={handleSaver}>
              Guardar
            </BotonGuardar>
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
          <Button variant="contained" onClick={() => handleClose(true)}>
            Marcar como solución
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClose(false)}
            autoFocus={true}
          >
            Cancelar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
