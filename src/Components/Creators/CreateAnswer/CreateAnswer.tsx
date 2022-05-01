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
import { Alert } from "@mui/material";
import {
  StyledPaper,
  StyledTypography,
  StyledTextField,
  StyledButton,
  StyledBox,
} from "./StyledComponents";
/*--------------------------------------------------------*/

interface Error {
  errorSubmit: string;
}

export default function CreateAnswer(id: any) {
  const usuario = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  const [answer, setAnswer] = useState<Answer>(answerTemplate);
  const [error, setError] = useState<Error>({ errorSubmit: "" });

  useEffect(() => {
    setAnswer({ ...answer, posts: id.id, owner: usuario._id });
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
      setAnswer({ ...answer, content: "" });
    } else {
      setError({ errorSubmit: "No has puesto nada como respuesta!" });
      setTimeout(() => setError({ errorSubmit: "" }), 4000);
    }
  };

  return (
    <StyledPaper>
      <StyledTypography>Responder</StyledTypography>
      <StyledBox>
        <StyledTextField
          required
          multiline
          id="outlined-basic"
          label="answer"
          variant="outlined"
          value={answer.content}
          onChange={(event) => handleInputChange(event)}
        />
        <StyledButton onClick={handleSubmit}>Enviar</StyledButton>
      </StyledBox>
      {error.errorSubmit && <Alert severity="error">{error.errorSubmit}</Alert>}
    </StyledPaper>
  );
}
