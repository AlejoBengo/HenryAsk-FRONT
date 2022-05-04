/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { UserShort } from "../../UserShort/UserShort";
import {
  answerTemplate,
  fetchAnswerById,
} from "../../../app/Utils/answerUtilities";
import { Answer } from "../../../app/interface";
/*-----------IMPORT MUI & CSS-----------*/
import { Box, Typography, Button } from "@mui/material";
/*--------------------------------------------------------*/
interface Props {
  answer?: Answer;
  id?: string;
  setSelectedAnswer: Function;
}
export const AnswerDetails = ({ answer, id, setSelectedAnswer }: Props) => {
  const [answerData, setAnswerData] = useState<Answer>(answerTemplate);

  useEffect(() => {
    if (id && id !== "") {
      fetchAnswerById(id).then((res) => {
        setAnswerData(res);
      });
    }
  }, [id]);

  useEffect(() => {
    if (answer) {
      setAnswerData(answer);
    }
  });

  return (
    <Box>
      <Typography variant="body1" align="left" gutterBottom>
        {answerData.content}
      </Typography>
      <Typography
        variant="caption"
        align="left"
        display={"flex"}
        alignItems="center"
      >
        Respondido el {answerData.createdAt} by
        <UserShort user={answerData.owner} />
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Button
          variant="text"
          color="primary"
          onClick={(event) => {
            setSelectedAnswer(answerData._id);
          }}
        >
          {answerData.comments.length} comentarios{" "}
        </Button>
      </Box>
    </Box>
  );
};
