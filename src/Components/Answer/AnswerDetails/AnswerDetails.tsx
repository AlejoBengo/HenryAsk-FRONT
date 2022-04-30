import React from "react";
import { Box, Typography } from "@mui/material";
import { UserShort } from "../..//UserShort/UserShort";
interface Props {
  id: string;
}
export const AnswerDetails = ({ id }: Props) => {
  const answer = {
    id: id,
    content:
      "Irure dolore in occaecat ex deserunt consectetur. Veniam laborum irure proident veniam exercitation quis ut veniam. Irure sunt culpa incididunt velit excepteur nulla nostrud cillum enim qui velit irure officia adipisicing.",
    owner: "6269e33fbd446d00111d1dac",
    createdAt: "04-04-2020",
    updatedAt: "",
    comments: [],
    likes: [],
  };
  return (
    <Box>
      <Typography variant="body1" align="left" gutterBottom>
        {answer.content}
      </Typography>
      <Typography variant="caption" align="left" gutterBottom>
        Respondido el {answer.createdAt} by <UserShort id={answer.owner} />
      </Typography>
    </Box>
  );
};
