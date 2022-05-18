/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect } from "react";
import { postNewPost, postTemplate } from "../../../app/Utils/postUtilities";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { Posts, Error } from "../../../app/interface";
import { Link, useNavigate } from "react-router-dom";
/*-----------IMPORT MUI & CSS-----------*/
import {
  MenuItem,
  Box,
  Container,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Breadcrumbs,
  useTheme,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import TagIcon from "@mui/icons-material/Tag";
import {
  StyledGrid,
  StyledSelect,
  StyledAlert,
  StyledBox,
  StyledBox2,
  StyledButton,
} from "./StyledComponents";
import { StyledTextField, StackMigajas } from "../../Style/StyledComponents";
/*--------------------------------------------------------*/

const validator = (tags: Array<string>) => {
  let errors: Error = {
    errorTag: "",
    errorSubmit: "",
  };
  if (tags.length > 3) {
    errors.errorTag =
      "Se pueden elgir hasta 3 etiquetas.";
  }
  return errors;
};

const PostForm = () => {
  const theme = useTheme();
  const usuario = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [post, setPost] = React.useState<Posts>(postTemplate);

  const [error, setError] = React.useState<Error>({
    errorTag: "",
    errorSubmit: "",
  });

  useEffect(() => {
    let tipo: number;
    if (usuario.role === 0) {
      tipo = 0;
    } else if (usuario.role === 1) {
      tipo = 1;
    } else {
      tipo = 2;
    }
    setPost({
      ...post,
      owner: {
        _id: usuario._id,
        user_name: usuario.user_name,
        role: usuario.role,
        avatar: usuario.avatar,
        profile_picture: usuario.profile_picture,
      },

      type: tipo,
    });
  }, [usuario]);

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
    "Otros",
    "M1",
    "M2",
    "M3",
    "M4",
    "PI",
    "PG",
  ];

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSelect = (event: any) => {
    setPost({
      ...post,
      tags:
        post.tags.includes(event.target.value) || post.tags.length > 2
          ? post.tags
          : [...post.tags, event.target.value],
    });

    setError(validator([...post.tags, event.target.value]));
  };

  const handleDelete = (event: string) => {
    setPost({
      ...post,
      tags: post.tags.filter((tag) => tag !== event),
    });
    if (post.tags.length < 4) {
      setError({ ...error, errorTag: "" });
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (error.errorSubmit.length > 0) {
      setError({ ...error, errorSubmit: "" });
    }
    if (
      error.errorTag.length === 0 &&
      post.description.length > 0 &&
      post.question.length > 0 &&
      post.tags.length > 0
    ) {
      dispatch(postNewPost(post))
        .then((response) => navigate(`/post/${response.payload._id}`))
        .catch((err) => console.log(err));
      setPost(postTemplate);
    } else {
      setError({ ...error, errorSubmit: "El formulario está incompleto" });
    }
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/Forum`);
  };

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
      to={`/Ask`}
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      CREAR POST
    </Link>,
  ];

  return (
    <>
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
      <Container
        sx={{
          p: "1rem",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" marginBottom={3}>
            ¡Crea una Discusión!
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <StyledTextField
                required
                multiline
                id="outlined-basic"
                label="Tu pregunta"
                variant="outlined"
                name="question"
                value={post.question}
                onChange={(event) => handleInputChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                multiline
                minRows={3}
                maxRows={5}
                id="filled-basic"
                label="Descripción"
                variant="outlined"
                name="description"
                value={post.description}
                onChange={(event) => handleInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                select
                label="Etiquetas"
                onChange={(event) => handleSelect(event)}
              >
                {tags.map((tag) => {
                  return (
                    <MenuItem key={tag} value={tag}>
                      {tag}
                    </MenuItem>
                  );
                })}
              </StyledTextField>
              {error.errorTag.length > 0 && (
                <StyledAlert severity="info">{error.errorTag}</StyledAlert>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {post.tags.length > 0 && (
                <List>
                  {post.tags.map((tag) => {
                    return (
                      <ListItem key={tag}>
                        <ListItemIcon>{/* <TagIcon /> */}</ListItemIcon>
                        <ListItemText>{tag}</ListItemText>
                        <Button
                          onClick={() => handleDelete(tag)}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </Button>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Grid>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "7vh",
                marginTop: "1vh",
                marginInline: "auto",
                columnGap: "3rem"
              }}
            >
              <Button 
              size="small" 
              onClick={handleSubmit} 
              variant="contained"
              sx={{width:"7rem"}}
              >
                Crear
              </Button>
              <Button 
              size="small" 
              onClick={handleCancel} 
              variant="contained"
              sx={{width:"7rem"}}
              >
                Cancelar
              </Button>
            </Box>
            {error.errorSubmit.length > 0 && (
              <StyledAlert severity="error">{error.errorSubmit}</StyledAlert>
            )}
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default PostForm;
