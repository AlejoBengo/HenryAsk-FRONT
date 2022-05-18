import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { CreateComment } from "../Creators/CreateComment/CreateComment";
import {
  answerTemplate,
  fetchAnswerById,
} from "../../app/Utils/answerUtilities";
import { reportPost } from "../../app/Utils/postReport";
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
  Modal,
  Avatar,
  Skeleton,
  Menu,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  FormControl,
  InputLabel,
  Select,
  DialogActions,
} from "@mui/material";
import { TituloForo, StyledTextField } from "../Style/StyledComponents";
import DeleteIcon from "@mui/icons-material/Delete";
import { BoxButtons, BoxModalDelete, AreYouSure } from "./StyledComponents";
import { LinkDom } from "../Style/StyledComponents";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from "@mui/icons-material/Check";

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
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<any>("");

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

  const handleOpenDeleteComment = () => {
    setOpenDelete(!openDelete);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    deleteComment(commentId);
    window.location.reload();
  };

  const [anchorElComment, setanchorElComment] =
    React.useState<null | HTMLElement>(null);
  const [openModalReport, setOpenModalReport] = React.useState(false);
  let [infoReport, setInfoReport] = React.useState<any>({
    reason: "",
    description: "",
    owner: usuario,
    status: "PENDING",
    post: {},
    answer: {},
    comment: {},
  });
  const user = useAppSelector((state) => state.user.data);
  const handleCloseMenu = () => {
    setanchorElComment(null);
  };
  const handleOpenModalReportC = () => {
    setOpenModalReport(true);
    setanchorElComment(null);
    setInfoReport(
      (infoReport = { ...infoReport, owner: usuario, comment: commentId })
    );
  };

  const handleMenuComment = (event: React.MouseEvent<HTMLElement>, id: any) => {
    setanchorElComment(event.currentTarget);
    setCommentId(id);
  };
  const handleCloseModalReport = () => {
    setanchorElComment(null);
    setOpenModalReport(false);
    setInfoReport(
      (infoReport = {
        reason: "",
        description: "",
        owner: usuario,
        status: "PENDING",
        post: {},
        answer: {},
        comment: {},
      })
    );
  };
  const handleChangeOption = (event: any) => {
    setInfoReport((infoReport = { ...infoReport, reason: event.target.value }));
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInfoReport(
      (infoReport = {
        ...infoReport,
        description: event.target.value,
      })
    );
  };
  const handleSubmitModalReport = () => {
    setanchorElComment(null);
    setOpenModalReport(false);
    if (infoReport.reason === "" || infoReport.description === "") {
      alert(
        "debes colocar una razon de report o enviar descripcion del reporte"
      );
    } else {
      console.log(infoReport);
      reportPost(infoReport).then(
        (response) =>
          setInfoReport(
            (infoReport = {
              reason: "",
              description: "",
              owner: usuario,
              status: "PENDING",
              post: {},
              answer: {},
              comment: {},
            })
          ),
        null
      );
    }
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
          <LinkDom
            to={`/Profile/${answer.owner._id}`}
            sx={{ marginRight: "1em" }}
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
          </LinkDom>
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
                    justifyContent: "space-between",
                    margin: "0.5em",
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
                    <LinkDom
                      to={`/Profile/${comment.owner._id}`}
                      sx={{ marginRight: "1em" }}
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
                    </LinkDom>
                    <Typography variant="body1">{comment.content}</Typography>
                  </Box>

                  <Box>
                    <IconButton
                      onClick={(e) => handleMenuComment(e, comment._id)}
                      aria-label="delete"
                      size="large"
                    >
                      <MoreVertIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
                <Menu
                  id={comment._id}
                  key={comment._id}
                  anchorEl={anchorElComment}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElComment)}
                  onClose={handleCloseMenu}
                >
                  {(user._id === comment.owner._id || user.role > 3) && (
                    <MenuItem
                      key={Math.random()}
                      onClick={handleOpenDeleteComment}
                    >
                      Eliminar comentario
                    </MenuItem>
                  )}
                  <MenuItem
                    key={Math.random()}
                    onClick={handleOpenModalReportC}
                  >
                    Reportar comentario
                  </MenuItem>
                </Menu>
                {/*  {(usuario._id === comment.owner._id || usuario.role > 3) && (
                  <BoxButtons>
                    <Button
                      onClick={()=>handleOpenDeleteComment(comment._id)}
                      variant="contained"
                      size="small"
                      color="error"
                    >
                      <DeleteIcon />
                    </Button>
                  </BoxButtons>
                )} */}
                <Modal open={openDelete}>
                  <BoxModalDelete>
                    <Button
                      style={{ marginLeft: "53.2vw", marginTop: "-4.7vh" }}
                      variant="contained"
                      onClick={handleOpenDeleteComment}
                    >
                      Cerrar
                    </Button>
                    <AreYouSure>¿Estás segur@?</AreYouSure>
                    <Button
                      onClick={handleDelete}
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
        <div>
          <Dialog
            open={openModalReport}
            /* onClose={handleCloseModalReport} */
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
          >
            <DialogTitle
              id="alert-dialog-title"
              textAlign="center"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ width: "2.5vw" }}>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"
                />
              </div>
              <Box>
                <TituloForo sx={{ borderBottom: "6px solid yellow" }}>
                  Reportar Posteo
                </TituloForo>
              </Box>
              <Button
                onClick={handleCloseModalReport}
                sx={{ color: "error.main", fontSize: "15px" }}
                color="error"
                variant="outlined"
              >
                X
              </Button>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                sx={{ minHeight: "20vh" }}
              >
                <Grid container spacing={2} sx={{ width: "40vw" }}>
                  <Grid item xs={12}>
                    <TituloForo
                      sx={{
                        borderBottom: "6px solid yellow",
                        fontWeight: "bold",
                      }}
                    >
                      Razon:
                    </TituloForo>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    padding="0px"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "80px",
                    }}
                  >
                    <FormControl
                      sx={{ minWidth: 120, width: "100%" }}
                      size="small"
                      error={infoReport.reason ? false : true}
                    >
                      <InputLabel id="demo-select-small">
                        Elija una razon
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={infoReport.reason}
                        label="Elija una razon"
                        onChange={handleChangeOption}
                        sx={{ width: "100%" }}
                      >
                        <MenuItem value="Información erronea.">
                          Información erronea
                        </MenuItem>
                        <MenuItem value="Es spam.">Es spam</MenuItem>
                        <MenuItem value="Lenguaje o símbolos que incitan al odio.">
                          Lenguaje o símbolos que incitan al odio
                        </MenuItem>
                        <MenuItem value="Bullying o acoso.">
                          Bullying o acoso
                        </MenuItem>
                        <MenuItem value="Este usuario se hace pasar por mí.">
                          Este usuario se hace pasar por mí
                        </MenuItem>
                        <MenuItem value="Contiene información personal.">
                          Contiene información personal
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box display="flex" alignItems="center">
                      {infoReport.reason}
                      {infoReport.reason ? <CheckIcon /> : null}
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      variant="filled"
                      multiline
                      label="Descripcion del reporte"
                      name="description"
                      value={infoReport.description}
                      onChange={(event) => handleDescriptionChange(event)}
                      minRows={3}
                      maxRows={5}
                    ></StyledTextField>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ padding: 2 }}>
              <Button onClick={handleSubmitModalReport} autoFocus color="error">
                Reportar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
      <CreateComment answerId={answer._id} />
    </Drawer>
  );
};
