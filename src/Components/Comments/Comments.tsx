import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { CreateComment } from "../Creators/CreateComment/CreateComment";
import {
  answerTemplate,
  fetchAnswerById,
} from "../../app/Utils/answerUtilities";
import { Answer, Comment } from "../../app/interface";
import {
  getCommentsByAnswerID,
  deleteComment,
} from "../../app/Utils/commentUtilities";
import {
  Drawer,
  Typography,
  Divider,
  Button,
  Box,
  Link,
  Modal,
  Avatar,
  Skeleton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BoxButtons, BoxModalDelete, AreYouSure } from "./StyledComponents";

interface Props {
  id: string;
  toggleOpen: Function;
  open: boolean;
}

export const Comments = ({ id, toggleOpen, open }: Props) => {
  const usuario = useAppSelector((state: any) => state.user.data);
  const [answer, setAnswer] = React.useState<Answer>(answerTemplate);
  const [comments, setComments] = React.useState<Array<Comment>>([]);
  const [loading, setLoading] = React.useState({
    answer: true,
    comments: true,
  });
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

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

  const handleOpenDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDelete(!openDelete);
  };

  const handleOpenEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenEdit(!openEdit);
  };

  const handleDelete = (event: string) => {
    deleteComment(event);
    window.location.reload();
  };

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
                    <Avatar
                      src={
                        comment.owner.profile_picture.length > 0
                          ? comment.owner.profile_picture
                          : comment.owner.avatar.length > 0
                          ? comment.owner.avatar
                          : comment.owner.profile_picture
                      }
                    />
                  </Link>

                  <Typography variant="body1">{comment.content}</Typography>
                </Box>
                {(usuario._id === comment.owner._id || usuario.role > 3) && (
                  <BoxButtons>
                    <Button
                      onClick={handleOpenDelete}
                      variant="contained"
                      size="small"
                      color="error"
                    >
                      <DeleteIcon />
                    </Button>
                  </BoxButtons>
                )}

                <Modal open={openDelete}>
                  <BoxModalDelete>
                    <Button
                      style={{ marginLeft: "53.2vw", marginTop: "-4.7vh" }}
                      variant="contained"
                      onClick={handleOpenDelete}
                    >
                      Cerrar
                    </Button>
                    <AreYouSure>¿Estás segur@?</AreYouSure>
                    <Button
                      onClick={() => handleDelete(comment._id)}
                      variant="contained"
                      color="error"
                    >
                      Borrar
                    </Button>
                  </BoxModalDelete>
                </Modal>
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
