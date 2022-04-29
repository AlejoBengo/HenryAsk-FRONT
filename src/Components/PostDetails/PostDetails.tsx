import {
  Container,
  Divider,
  Paper,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import RoundedAccountIcon from "@mui/icons-material/AccountCircleRounded";
import React from "react";
import { useParams } from "react-router-dom";
import { AnswerDetails } from "../AnswerDetails/AnswerDetails";
import { UserShort } from "../UserShort/UserShort";
export const PostDetails = () => {
  const { id } = useParams();
  const post = {
    id: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Irure est ea occaecat veniam nulla officia adipisicing eiusmod culpa fugiat ipsum dolor aliqua adipisicing. Ad ex ut voluptate magna proident excepteur voluptate dolor est esse aute dolor. Do ea quis labore cupidatat cillum ullamco elit officia velit consectetur deserunt pariatur ut. ",
    owner: "6269e33fbd446d00111d1dac",
    createdAt: "04-04-2020",
    updatedAt: "",
    answers: [
      {
        id: "1",
      },
      {
        id: "2",
      },
      {
        id: "3",
      },
    ],
    type: "",
    tags: [],
  };
  const postOwner = post.owner;
  const postAnswers = post.answers;
  return (
    <div>
      <Container sx={{ padding: "1em" }}>
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "1em 1em 0.25em 1em",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textDecoration: "underline 2px solid ",
            }}
            align="left"
            gutterBottom
          >
            ¿{post.title}?
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "5px",
            }}
          >
            <Typography variant="caption" sx={{ marginRight: "5px" }}>
              Preguntado el {post.createdAt} por <UserShort id={postOwner} />
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {post.description}
          </Typography>{" "}
          <Divider sx={{ marginBottom: 1 }} />
          <Typography variant="h4" align="left" gutterBottom>
            {post.answers.length} Respuestas
          </Typography>
          {postAnswers.map((answer: any, index: number) => (
            <div key={answer.id}>
              <AnswerDetails id={answer.id} />
              {index !== postAnswers.length - 1 && (
                <Divider sx={{ marginBottom: 1 }} />
              )}
            </div>
          ))}
        </Paper>
      </Container>
    </div>
  );
};
export default PostDetails;
