import { Grid, TextField, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { TextEditor } from "../TextEditor/TextEditor";

interface Question {
  question: string;
  description: string;
  tags: Array<string>;
}
export const QuestionCreate = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const [question, setQuestion] = React.useState<Question>({
    question: "",
    description: "",
    tags: [],
  });
  if (!isAuthenticated) {
    return (
      <div>
        {" "}
        <Typography variant="h3">
          {" "}
          Para hacer preguntas, primero debes iniciar sesion
        </Typography>{" "}
      </div>
    );
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          variant="standard"
          label="¿Cuál es tu pregunta?"
          helperText="Describe de forma simple tu problema."
        />
        <TextEditor value="" />
        <TextField
          select
          variant="standard"
          label="Etiquetas"
          helperText="Añade una o más etiquetas a tu pregunta para que sea más visible."
        />
      </Grid>
    </Grid>
  );
};
