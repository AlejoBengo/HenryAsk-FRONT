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
  const { isAuthenticated } = useAuth0();

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
    setOpenEdit(!openEdit);
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
    return <RedirectToLogin open={true} />;
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
          <StyledBoxModal2>
            <Button
              style={{ marginLeft: "43.2vw", marginTop: "-2.4vh" }}
              variant="contained"
              onClick={handleOpenDelete}
            >
              Cerrar
            </Button>
            <StyledTypography>Are you sure?</StyledTypography>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeletePost}
            >
              Borrar
            </Button>
          </StyledBoxModal2>
        </Modal>
        <Modal open={openEdit}>
          <StyledBoxModal>
            <Button
              style={{ marginLeft: "68.1vw" }}
              variant="contained"
              onClick={handleOpenEdit}
            >
              Cerrar
            </Button>
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
            <StyledSelect onChange={(event) => handleEditTags(event)}>
              {tags.map((tag) => {
                return (
                  <MenuItem value={tag} key={tag} >
                    {tag}
                  </MenuItem>
                );
              })}
            </StyledSelect>
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
                        style={{color:`${theme.palette.getContrastText(theme.palette.background.default)}`}}
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
            <Button
              style={{ marginLeft: "67.3vw" }}
              variant="contained"
              onClick={handleSaver}
            >
              Guardar
            </Button>
          </StyledBoxModal>
        </Modal>

        <StyledPaper elevation={2}>
          <Typography
            variant="h3"
            sx={{
              textDecoration: "underline 2px solid ",
              textDecorationColor: "primary.main",
            }}
            align="left"
            gutterBottom
          >
            {post.question}
          </Typography>
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
              sx={{ marginRight: "5px" }}
              display="flex"
              alignItems={"center"}
            >
              Preguntado el {post.createdAt} por <UserShort user={postOwner} />
            </Typography>
            <Typography variant="caption" sx={{ marginRight: "5px" }}>
              <LocalOfferIcon /> {post.tags.join(", ")}
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {post.description}
          </Typography>
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
