/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getUserById, userTemplate } from "../app/Utils/userUtilities";
import { postTemplate, getPostById } from "../app/Utils/postUtilities";
/*-----------IMPORT COMPONENTS-----------*/
import { AnswerDetails } from "../Components/Answer/AnswerDetails/AnswerDetails";
import { UserShort } from "../Components/UserShort/UserShort";
import CreateAnswer from "../Components/Creators/CreateAnswer/CreateAnswer";
/*-----------IMPORT MUI & CSS-----------*/
import { Container, Divider, Paper, Typography, Box } from "@mui/material";
import RoundedAccountIcon from "@mui/icons-material/AccountCircleRounded";
import { StyledPaper } from "../Components/Style/StyledComponents";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
/*--------------------------------------------------------*/

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
      getUserById(post.owner._id) //Modificado por Agus al resolverse el tema de las Refs de los modelos
        .then((user) => setUser(user))
        .catch(() => setError(true));
    }
  }, []);

  const postOwner = post.owner._id; //Modificado por Agus al resolverse el tema de las Refs de los modelos
  const postAnswers = post.answers;
  if (error) return <div>Error</div>;
  return (
    <div>
      <Container sx={{ padding: "1em" }}>
        <StyledPaper elevation={2}>
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
              marginBottom: "1em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="caption" sx={{ marginRight: "5px" }}>
              Preguntado el {post.createdAt} por <UserShort id={postOwner} />
            </Typography>
            <Typography variant="caption" sx={{ marginRight: "5px" }}>
              <LocalOfferIcon /> {post.tags.join(", ")}
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
        </StyledPaper>
        <CreateAnswer id={id} />
      </Container>
    </div>
  );
};
export default PostDetails;
