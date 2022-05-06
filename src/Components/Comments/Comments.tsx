import React, { useEffect } from "react";
import {
  Drawer,
  Typography,
  Divider,
  Button,
  Link,
  Box,
  Avatar,
  Skeleton,
} from "@mui/material";
import {
  answerTemplate,
  fetchAnswerById,
} from "../../app/Utils/answerUtilities";
import { Owner, Answer, Comment } from "../../app/interface";
import { ownerTemplate } from "../../app/Utils/userUtilities";
import { getCommentsByAnswerID } from "../../app/Utils/commentUtilities";
import { AnswerDetails } from "../Answer/AnswerDetails/AnswerDetails";
import { CreateComment } from "../Creators/CreateComment/CreateComment";

interface Props {
  id: string;
  toggleOpen: Function;
  open: boolean;
}

export const Comments = ({ id, toggleOpen, open }: Props) => {
  const [answer, setAnswer] = React.useState<Answer>(answerTemplate);
  const [comments, setComments] = React.useState<Array<Comment>>([]);
  const [loading, setLoading] = React.useState({
    answer: true,
    comments: true,
  });
  console.log("ANSWE", comments);

  useEffect(() => {
    fetchAnswerById(id)
      .then((res) => {
        setAnswer(res);
        setLoading({ ...loading, answer: false });
      })
      .catch((err) => {
        console.log(err);
      });
    getCommentsByAnswerID(id)
      .then((res) => {
        setComments(res);
        setLoading({ ...loading, comments: false });
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setLoading({ answer: true, comments: true });
      setAnswer(answerTemplate);
      setComments([]);
    };
  }, [id]);
  console.log(
    "loading answer:",
    loading.answer,
    "loading comments:",
    loading.comments
  );

  return (
    <Drawer
      open={open}
      anchor="bottom"
      sx={{
        width: "30vw",
        height: "60vh",
        ["& .MuiDrawer-paper"]: {
          width: "80vw",
          marginLeft: "10vw",
          height: "60vh",
          borderRadius: "30px 30px 0px 0px",
          padding: "1em",
        },
      }}
      onClose={() => {
        toggleOpen();
      }}
    >
      <Box
        sx={{
          padding: "1em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Link
            href={`/Profile/${answer.owner._id}`}
            style={{ marginRight: "1em" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 100,
              }}
            >
              {!loading.answer ? (
                <Avatar
                  src={
                    answer.owner.profile_picture.length > 0
                      ? answer.owner.profile_picture
                      : answer.owner.avatar.length > 0
                      ? answer.owner.avatar
                      : answer.owner.profile_picture
                  }
                />
              ) : (
                <Skeleton
                  variant="circular"
                  sx={{
                    bgcolor: "info.light",
                    width: "40px",
                    height: "40px",
                  }}
                  animation="pulse"
                />
              )}
              {!loading.answer && (
                <Typography variant="caption">
                  {answer.owner.user_name}
                </Typography>
              )}
            </Box>
          </Link>
          {!loading.answer ? (
            <Typography variant="body1">{answer.content}</Typography>
          ) : (
            <Skeleton
              variant="text"
              animation="pulse"
              sx={{ width: "80%", bgcolor: "info.light" }}
            />
          )}
        </Box>
      </Box>
      <Divider />
      <Typography variant="h6" gutterBottom sx={{ marginTop: "1em" }}>
        Comentarios
      </Typography>
      <Box sx={{ overflowY: "scroll" }}>
        {!loading.comments ? (
          comments.map((comment, index) => {
            return (
              <Box
                key={comment._id}
                sx={{
                  padding: "1em",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    margin: "0.5em",
                  }}
                >
                  <Link
                    href={`/Profile/${comment.owner._id}`}
                    style={{ marginRight: "1em" }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        width: 100,
                      }}
                    >
                      <Avatar
                        src={
                          comment.owner.profile_picture.length > 0
                            ? comment.owner.profile_picture
                            : comment.owner.avatar.length > 0
                            ? comment.owner.avatar
                            : comment.owner.profile_picture
                        }
                      />
                      <Typography variant="caption">
                        {comment.owner.user_name}
                      </Typography>
                    </Box>
                  </Link>

                  <Typography variant="body1">{comment.content}</Typography>
                </Box>{" "}
                {index < comments.length - 1 && <Divider />}
              </Box>
            );
          })
        ) : (
          <Box sx={{ display: "flex" }}>
            <Skeleton
              variant="circular"
              width="40px"
              height="40px"
              sx={{ bgcolor: "info.light" }}
            />
          </Box>
        )}
      </Box>
      <CreateComment answerId={answer._id} />
    </Drawer>
  );
};
