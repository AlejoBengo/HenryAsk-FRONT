/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useParams } from "react-router-dom";
import {
  postNewAnswer,
  answerTemplate,
} from "../../../app/Utils/answerUtilities";
import { Answer } from "../../../app/interface";
/*-----------IMPORT MUI & CSS-----------*/
import { Grid, TextField, Button, Alert } from "@mui/material";
/*--------------------------------------------------------*/

interface Error {
  errorSubmit: string;
}

export default function CreateAnswer() {
  const { id }: any = useParams();
  const usuario = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  const [answer, setAnswer] = React.useState<Answer>(answerTemplate);
  const [error, setError] = React.useState<Error>({ errorSubmit: "" });

  useEffect(() => {
    setAnswer({ ...answer, posts: id, owner: usuario._id });
  }, [usuario, id]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setAnswer({ ...answer, content: event.target.value });
  };

  const handleSubmit = () => {
    if (error.errorSubmit.length > 0) {
      setError({ errorSubmit: "" });
    }
    if (answer.content.length > 0) {
      dispatch(postNewAnswer(answer));
    } else {
      setError({ errorSubmit: "No has puesto nada como respuesta!" });
    }
  };

  return (
    <Grid>
      <TextField
        required
        multiline
        id="outlined-basic"
        label="question"
        variant="outlined"
        value={answer.content}
        onChange={(event) => handleInputChange(event)}
      />

      <Button onClick={handleSubmit}>Submit</Button>
      {error.errorSubmit && <Alert severity="error">{error.errorSubmit}</Alert>}
    </Grid>
  );
}
