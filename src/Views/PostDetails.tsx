import { Container, Divider, Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import RoundedAccountIcon from "@mui/icons-material/AccountCircleRounded";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnswerDetails } from "../Components/AnswerDetails/AnswerDetails";
import { UserShort } from "../Components/UserShort/UserShort";
import { getUserById, userTemplate } from "../app/Utils/userUtilities";
import { postTemplate, getPostById } from "../app/Utils/postUtilities";
export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(postTemplate);
  const [user, setUser] = useState(userTemplate);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    getPostById(id)
      .then((res) => {
        console.log(res);
        setPost(res);
      })
      .catch((err) => setError(true));
  }, []);
  useEffect(() => {
    if (!user._id) {
      getUserById(post.owner)
        .then((user) => setUser(user))
        .catch(() => setError(true));
    }
  }, []);

  const postOwner = post.owner;
  const postAnswers = post.answers;
  if (error) return <div>Error</div>;
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
            ¿{post.question}?
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
            {post.answers?.length} Respuestas
          </Typography>
          {postAnswers?.map((answer: any, index: number) => (
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
