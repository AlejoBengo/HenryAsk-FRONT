/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
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
/*-----------IMPORT COMPONENTS-----------*/
import { UserShort } from "../Components/UserShort/UserShort";
import CreateAnswer from "../Components/Creators/CreateAnswer/CreateAnswer";
import { Comments } from "../Components/Comments/Comments";
import { AnswerDetails } from "../Components/Answer/AnswerDetails/AnswerDetails";
/*-----------IMPORT MUI & CSS-----------*/
import {
  Container,
  Divider,
  Typography,
  MenuItem,
  Box,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import RoundedAccountIcon from "@mui/icons-material/AccountCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTypography4 } from "../Components/Theoric/StyledComponents";
import {
  StyledPaper,
  StyledButton,
  StyledButton2,
  StyledBoxModal,
  StyledTextField2,
  StyledDivButtons,
  StyledBoxChoosed,
  StyledSelect,
  StyledBoxModal2,
  StyledButtonModal,
  StyledButtonModal4,
  StyledButtonModal5,
  StyledButtonModal6,
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
];

export const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const usuario = useAppSelector((state) => state.user.data);
  const [post, setPost] = useState(postTemplate);
  const [user, setUser] = useState(userTemplate);
  const [error, setError] = useState<boolean>(false);
  const [postOwner, setPostOwner] = useState(ownerTemplate); //Modificado por Agus al resolverse el tema de las Refs de los modelos
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

  const handleSaver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEditable({ ...editable, tags: newTags });
    editPost(editable);
    setOpenEdit(!openEdit);
    window.location.reload();
  };

  const handleOpenDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDelete(!openDelete);
  };

  const handleDeletePost = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof id === "string") {
      deletePost(id);
      handleClickOpen()
      setOpenDelete(!openDelete);
    }
  };

  useEffect(() => {
    getPostById(id)
      .then((res) => {
        setPost(res);
        setEditable(res);
      })
      .catch((err) => setError(true));
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


  //dialog delete complete 
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
    console.log("ENTRO PAPA")
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/Forum");
  }; 

  
  // ------------------//



  if (error) return <div>Error</div>;
  return (
    <div>
      <Container sx={{ padding: "1em" }}>
      <DialogSuccess openDialog={openDialog} handleClose={handleClose} title1="Discusion eliminada con exito!" subtitle1="Su posteo fue eliminado con exito" buttonText="Volver al foro"/>
        <StyledDivButtons>
          <StyledButton onClick={handleOpenEdit}>Edit</StyledButton>
          <Button variant="contained" onClick={handleOpenDelete}>
            Delete
          </Button>
        </StyledDivButtons>

        <Modal open={openDelete}>
          <StyledBoxModal2>
            <StyledButtonModal5 onClick={handleOpenDelete}>
              Close
            </StyledButtonModal5>

            <StyledTypography4>Are you sure?</StyledTypography4>

            <StyledButtonModal6 onClick={handleDeletePost}>
              Delete
            </StyledButtonModal6>
          </StyledBoxModal2>
        </Modal>

        <Modal open={openEdit}>
          <StyledBoxModal>
            <StyledButtonModal onClick={handleOpenEdit}>
              Close
            </StyledButtonModal>
            <StyledTextField2
              multiline
              onChange={handleEditInputChange}
              name="question"
              value={editable.question}
            />
            <StyledTextField2
              multiline
              onChange={handleEditInputChange}
              name="description"
              value={editable.description}
            />
            <StyledSelect onChange={(event) => handleEditTags(event)}>
              {tags.map((tag) => {
                return (
                  <MenuItem value={tag} key={tag}>
                    {tag}
                  </MenuItem>
                );
              })}
            </StyledSelect>
            <StyledBoxChoosed sx={{ backgroundColor: "info.main" }}>
              {newTags.length > 0 &&
                newTags.map((tag: string) => {
                  return (
                    <Box style={{ display: "flex" }} key={tag}>
                      <h4>{tag}</h4>
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
            <StyledButtonModal4 onClick={handleSaver}>Save</StyledButtonModal4>
          </StyledBoxModal>
        </Modal>
        <StyledPaper elevation={2}>
          <Typography
            variant="h3"
            sx={{
              textDecoration: "underline 2px solid ",
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
    </div>
  );
};
export default PostDetails;
