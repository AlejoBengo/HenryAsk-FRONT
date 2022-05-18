/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import {
  getUserById,
  ownerTemplate,
  userTemplate,
} from "../app/Utils/userUtilities";
import {
  postTemplate,
  deletePost,
  getPostById,
  editPost,
} from "../app/Utils/postUtilities";
import { useAuth0 } from "@auth0/auth0-react";
import { reportPost } from "../app/Utils/postReport";
/*-----------IMPORT COMPONENTS-----------*/
import { UserShort } from "../Components/UserShort/UserShort";
import { Breadcrumbs, useTheme } from "@mui/material";
import { StackMigajas } from "../Components/Style/StyledComponents";
import CreateAnswer from "../Components/Creators/CreateAnswer/CreateAnswer";
import { Comments } from "../Components/Comments/Comments";
import { AnswerDetails } from "../Components/Answer/AnswerDetails/AnswerDetails";
import RedirectToLogin from "../Components/RedirectToLogin/RedirectToLogin";
/*-----------IMPORT MUI & CSS-----------*/
import {
  Container,
  Divider,
  Typography,
  MenuItem,
  Box,
  Button,
  TextField,
  Modal,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTypography } from "../Components/Theoric/StyledComponents";
import {
  StyledPaper,
  StyledBoxModal,
  StyledDivButtons,
  StyledBoxChoosed,
  StyledSelect,
  StyledDiv,
  StyledBoxModal2,
} from "../Components/Style/StyledComponents";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DialogSuccess from "../Components/Dialog/DialogSuccess";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReportIcon from "@mui/icons-material/Report";
import { TituloForo } from "../Components/Style/StyledComponents";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  LinearProgress,
  DialogTitle,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import { StyledTextField } from "../Components/Style/StyledComponents";
import { useDispatch } from "react-redux";
/*--------------------------------------------------------*/

const tags: Array<string> = [
  "JavaScript",
  "PostgreSQL",
  "Sequelize",
  "Nodejs",
  "Express",
  "React",
  "Redux",
  "CSS",
  "HTML",
  "SQL",
  "Modulo",
  "Otros",
  "M1",
  "M2",
  "M3",
  "M4",
  "PI",
  "PG",
];

export const PostDetails = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const usuario = useAppSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [post, setPost] = useState(postTemplate);
  const [user, setUser] = useState(userTemplate);
  const [error, setError] = useState<boolean>(false);
  const [postOwner, setPostOwner] = useState(ownerTemplate);
  const [postAnswers, setPostAnswers] = useState<Array<string>>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [editable, setEditable] = useState({
    id: "",
    question: "",
    description: "",
    tags: "",
  });
  const [newTags, setNewTags] = useState<any>([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [charged, setCharged] = useState(false);
  const { isAuthenticated } = useAuth0();
  const [openModalReport, setOpenModalReport] = React.useState(false);
  const [goEdit, setGoEdit] = useState<boolean>(false);
  let [infoReport, setInfoReport] = React.useState({
    reason: "",
    description: "",
    owner: usuario,
    status: "PENDING",
    post: {},
    answer: {},
    comment: {},
  });
  //handleChange report option
  const handleChangeOption = (event: SelectChangeEvent) => {
    setInfoReport((infoReport = { ...infoReport, reason: event.target.value }));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInfoReport(
      (infoReport = {
        ...infoReport,
        description: event.target.value,
      })
    );
  };

  // ---------------//
  //Modal report handlers
  const handleOpenModalReport = (string: string) => {
    setOpenModalReport(true);
    if (string === "post") {
      setInfoReport((infoReport = { ...infoReport, post: post }));
    }
  };
  const handleCloseModalReport = () => {
    setOpenModalReport(false);
    setInfoReport(
      (infoReport = {
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

  const handleSubmitModalReport = () => {
    setOpenModalReport(false);
    setInfoReport((infoReport = { ...infoReport, owner: usuario }));
    reportPost(infoReport).then(
      (response) =>
        setInfoReport(
          (infoReport = {
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
  };
  //-------------//
  const toggleOpen = () => {
    if (!open) setSelectedAnswer("");
    setOpen(!open);
  };
  const handleOpenEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenEdit(!openEdit);
    setEditable({
      ...editable,
      question: post.question,
      description: post.description,
    });
    if (typeof id === "string") {
      setEditable({ ...editable, id: id });
    }
  };
  const handleEditInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditable({ ...editable, [event.target.name]: event.target.value });
  };
  const handleEditTags = (event: any) => {
    if (!newTags.includes(event.target.value) && newTags.length < 3) {
      setNewTags([...newTags, event.target.value]);
    }
  };
  const handleDelete = (event: any) => {
    const nuevo: Array<string> = newTags.filter((tag: string) => tag !== event);
    setNewTags(nuevo);
  };
  const handleSaver = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setEditable({ ...editable, tags: newTags });

    await editPost(editable);
    window.location.reload();
  };
  const handleOpenDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDelete(!openDelete);
  };
  const handleDeletePost = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof id === "string") {
      deletePost(id);
      handleClickOpen();
      setOpenDelete(!openDelete);
    }
  };
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/Forum");
  };
  const willEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenEdit(!openEdit);
    setGoEdit(!goEdit);
  };

  useEffect(() => {
    getPostById(id)
      .then((res) => {
        setPost(res);
        setEditable(res);
      })
      .catch((err) => setError(true));
    if (typeof id === "string") {
      setEditable({ ...editable, id: id });
    }
  }, []);

  useEffect(() => {
    if (!user._id) {
      getUserById(post.owner._id)
        .then((user) => setUser(user))
        .catch(() => setError(true));
    }
  }, []);

  useEffect(() => {
    setPostAnswers(post.answers);
    setPostOwner(post.owner);
  }, [post]);

  useEffect(() => {
    if (selectedAnswer !== "") {
      if (!open) {
        toggleOpen();
      }
    }
  }, [selectedAnswer]);

  // ------------------//
  const migajas = [
    <Link
      to="/"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      HOME
    </Link>,
    <Link
      to="/Forum"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      FORO
    </Link>,
    <Link
      to={`/Post/${id}`}
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      {post.question}
    </Link>,
  ];

  if (error) return <div>Error</div>;

  if (!isAuthenticated) {
    setTimeout(() => {
      setCharged(true);
    }, 4000);
    if (!charged) {
      return (
        <Modal open={true}>
          <LinearProgress
            color="secondary"
            style={{
              width: "90vw",
              marginLeft: "5vw",
              marginTop: "49vh",
              height: "1vh",
            }}
          />
        </Modal>
      );
    } else {
      return <RedirectToLogin open={true} />;
    }
  }

  return (
    <Box>
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
      <Container sx={{ padding: "1em" }}>
        <DialogSuccess
          openDialog={openDialog}
          handleClose={handleClose}
          title1="Discusion eliminada con exito!"
          subtitle1="Su posteo fue eliminado con exito"
          buttonText="Volver al foro"
        />

        <StyledDivButtons>
          {usuario._id === post.owner._id && (
            <Button variant="contained" onClick={handleOpenEdit}>
              Editar
            </Button>
          )}
          {(usuario.role > 3 || usuario._id === post.owner._id) && (
            <Button
              variant="contained"
              color="error"
              onClick={handleOpenDelete}
            >
              Borrar
            </Button>
          )}          
        </StyledDivButtons>

        <Modal open={openDelete}>
          <StyledBoxModal2 sx={{border: "1px solid", borderColor: "primary.main", borderRadius:"20px", padding:"1em", backgroundColor:"backModal.main"}}>
            
            <StyledTypography sx={{ color:"comen.main" }}>Estas Seguro?</StyledTypography>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "8vh",
              }}
            >
            <Button
              variant="contained"
              color="error"
              onClick={handleDeletePost}
            >
              Borrar
            </Button>
            <Button
              style={{}}
              variant="contained"
              onClick={handleOpenDelete}
            >
              Cerrar
            </Button>
            </Box>
          </StyledBoxModal2>
        </Modal>

        <Modal open={openEdit}>
          <StyledBoxModal sx={{border: "1px solid", borderColor: "primary.main", borderRadius:"20px", padding:"1em", backgroundColor:"backModal.main"}}>            
            <TextField
              multiline
              style={{ marginLeft: "1vh", width: "50vw" }}
              onChange={handleEditInputChange}
              name="question"
              value={editable.question}
            />
            <StyledDiv>
              <TextField
                multiline
                style={{ width: "72vw" }}
                onChange={handleEditInputChange}
                name="description"
                value={editable.description}
              />
            </StyledDiv>
            <StyledTextField
                sx={{ width:"150px" }}
                select
                label="Etiquetas"
                onChange={(event) => handleEditTags(event)}
              >
                {tags.map((tag) => {
                  return (
                    <MenuItem key={tag} value={tag}>
                      {tag}
                    </MenuItem>
                  );
                })}
              </StyledTextField>
            <StyledBoxChoosed>
              {newTags.length > 0 &&
                newTags.map((tag: string) => {
                  return (
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "10vw",
                        fontFamily: "Helvetica",
                      }}
                      key={tag}
                    >
                      <h4
                        style={{
                          color: `${theme.palette.getContrastText(
                            theme.palette.background.default
                          )}`,
                        }}
                      >
                        {tag}
                      </h4>
                      <IconButton
                        onClick={() => handleDelete(tag)}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  );
                })}
            </StyledBoxChoosed>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "8vh",
              }}
            >
            <Button              
              variant="contained"
              onClick={handleOpenEdit}
            >
              Cerrar
            </Button>
            <Button              
              variant="contained"
              onClick={willEdit}
            >
              Guardar
            </Button>
            </Box>
          </StyledBoxModal>
        </Modal>

        <Modal open={goEdit}>
          <StyledBoxModal2>
            <StyledTypography>Su posteo ha sido editado!</StyledTypography>
            <Button variant="contained" color="success" onClick={handleSaver}>
              Continuar
            </Button>
          </StyledBoxModal2>
        </Modal>

        <StyledPaper elevation={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h3"
              sx={{
                textDecoration: "underline 2px solid ",
                textDecorationColor: "primary.main",
                width: "90%",
              }}
              align="left"
              gutterBottom
            >
              {post.question}
            </Typography>
            <Box>
              <IconButton
                onClick={(ev) => handleOpenModalReport("post")}
                aria-label="delete"
                size="large"
                color="error"
              >
                <ReportIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
          {/* MODAL DIALOG REPORT AQUI */}
          <div>
            <Dialog
              open={openModalReport}
              /* onClose={handleCloseModalReport} */
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
                        error={infoReport.reason ? false : true}
                      >
                        <InputLabel id="demo-select-small">
                          Elija una razon
                        </InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={infoReport.reason}
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
                        {infoReport.reason}
                        {infoReport.reason ? <CheckIcon /> : null}
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        variant="filled"
                        multiline
                        label="Descripcion del reporte"
                        name="description"
                        value={infoReport.description}
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
          {/* MODAL DIALOG REPORT END */}
          <Box
            sx={{
              marginBottom: "1em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="caption"
              sx={{ marginRight: "5px", padding: 1 }}
              display="flex"
              alignItems={"center"}
            >
              <UserShort user={postOwner} />
              <EventAvailableIcon
                fontSize="medium"
                sx={{ marginX: "8px", marginBottom: "3px" }}
              />
              Preguntado el {post.createdAt} {/* arreglar el horario */}
            </Typography>
            <Typography
              variant="caption"
              sx={{ marginRight: "5px", display: "flex", alignItems: "center" }}
            >
              <LocalOfferIcon sx={{ margin: "0px 15px 0px 0px" }} />{" "}
              {post.tags.join(", ")}
            </Typography>
          </Box>
          <Box sx={{ padding: 2.5, width: "100%", minHeight: "23vh" }}>
            <Typography variant="body1" paragraph>
              {post.description}
            </Typography>
          </Box>
          <Divider sx={{ marginBottom: 1 }} />
          <Typography variant="h4" align="left" gutterBottom>
            {post.answers?.length} Respuestas
          </Typography>
          {postAnswers?.map((answer: any, index: number) => (
            <div key={answer.id}>
              <AnswerDetails
                id={answer._id}
                setSelectedAnswer={setSelectedAnswer}
                postOwner={postOwner}
                postOpen={post.open}
                post={post}
              />
              {index !== postAnswers.length - 1 && (
                <Divider sx={{ marginBottom: 1 }} />
              )}
            </div>
          ))}
        </StyledPaper>

        {post.open ? <CreateAnswer id={id} /> : null}
      </Container>
      <Comments id={selectedAnswer} toggleOpen={toggleOpen} open={open} />
    </Box>
  );
};
export default PostDetails;
