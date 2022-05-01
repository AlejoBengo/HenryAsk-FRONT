/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect } from "react";
import { postNewPost, postTemplate } from "../../../app/Utils/postUtilities";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { Posts, Error } from "../../../app/interface";
/*-----------IMPORT MUI & CSS-----------*/
import { MenuItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  StyledGrid,
  StyledTextField,
  StyledSelect,
  StyledAlert,
  StyledBox,
  StyledBox2,
  StyledButton,
} from "./SyledComponents";
/*--------------------------------------------------------*/

const validator = (tags: Array<string>) => {
  let errors: Error = {
    errorTag: "",
    errorSubmit: "",
  };
  if (tags.length > 3) {
    errors.errorTag =
      "No se pueden elgir más de 3 etiquetas. Por favor, elimine una.";
  }
  return errors;
};

const PostForm = () => {
  const usuario = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

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
      owner: usuario._id,
      ownerData: [usuario.user_name, usuario.role.toString()],
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
    "Modulo",
    "Otros",
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
    console.log(post);
    if (
      error.errorTag.length === 0 &&
      post.description.length > 0 &&
      post.question.length > 0 &&
      post.tags.length > 0
    ) {
      dispatch(postNewPost(post))
        .then(() => console.log("completado"))
        .catch((err) => console.log(err));
      setPost(postTemplate);
    } else {
      setError({ ...error, errorSubmit: "El formulario está incompleto" });
    }
  };

  return (
    <StyledGrid>
      <StyledTextField
        required
        multiline
        id="outlined-basic"
        label="question"
        variant="outlined"
        name="question"
        value={post.question}
        onChange={(event) => handleInputChange(event)}
      />

      <StyledTextField
        required
        multiline
        id="filled-basic"
        label="Descripción"
        variant="filled"
        name="description"
        value={post.description}
        onChange={(event) => handleInputChange(event)}
      />

      <StyledSelect onChange={(event) => handleSelect(event)}>
        {tags.map((tag) => {
          return (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          );
        })}
      </StyledSelect>
      {error.errorTag.length > 0 && (
        <StyledAlert severity="info">{error.errorTag}</StyledAlert>
      )}
      <StyledBox sx={{ backgroundColor: "info.main" }}>
        {post.tags.length > 0 &&
          post.tags.map((tag) => {
            return (
              <StyledBox2 key={tag}>
                <h4>{tag}</h4>
                <IconButton
                  onClick={() => handleDelete(tag)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </StyledBox2>
            );
          })}
      </StyledBox>

      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      {error.errorSubmit.length > 0 && (
        <StyledAlert severity="error">{error.errorSubmit}</StyledAlert>
      )}
    </StyledGrid>
  );
};

export default PostForm;
