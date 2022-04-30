import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { StyledPaper, StyledTextField } from "../../Style/StyledComponents";
import { useAppSelector } from "../../../app/hooks";
export const AnswerCreate = () => {
  const [answer, setAnswer] = useState("");
  const user = useAppSelector((state) => state.user.data);
  return (
    <StyledPaper
      sx={{
        marginTop: "1em",
      }}
      elevation={2}
    >
      <Typography variant="h4" align="left" gutterBottom>
        Responder
      </Typography>
      <StyledTextField multiline minRows={3} maxRows={6} />
      <Button variant="contained" color="primary">
        Enviar respuesta
      </Button>
    </StyledPaper>
  );
};
