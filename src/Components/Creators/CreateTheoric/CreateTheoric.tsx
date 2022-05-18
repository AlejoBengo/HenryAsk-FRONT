import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Dialog,
  Breadcrumbs,
  useTheme,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import {
  theoricTemplate,
  postTheoric,
} from "../../../app/Utils/theoricUtilites";
import {
  StyledPaper,
  StyledTextField,
  StackMigajas,
} from "../../Style/StyledComponents";
import { useNavigate, Link } from "react-router-dom";

export const CreateTheoric = () => {
  const theme = useTheme();
  const user = useAppSelector((state) => state.user.data);
  const [theoric, setTheoric] = useState(theoricTemplate);
  const [newImage, setNewImage] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [dialogText, setDialogText] = useState("Enviando...");
  const [newTheoricId, setNewTheoricId] = useState("");
  const navigate = useNavigate();
  // if (user.role < 4) {
  //   return <div>No estás autorizado para crear contenido teórico</div>;
  // }
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTheoric({
      ...theoric,
      [event.target.name]: event.target.value,
    });
  };
  const handleAdd = (name: string, value: string) => {
    if (name === "images") {
      let array = theoric.images;
      array.push(value);
      setTheoric({ ...theoric, images: array });
      setNewImage("");
    }
    if (name === "comments") {
      let array = theoric.comments;
      array.push(value);
      setTheoric({ ...theoric, comments: array });
      setNewComment("");
    }
  };
  const handleDelete = (name: string, value: string) => {
    if (name === "images") {
      let array = theoric.images.filter((image: string) => image != value);
      setTheoric({ ...theoric, images: array });
      setNewImage("");
    }
    if (name === "comments") {
      let array = theoric.comments.filter(
        (comment: string) => comment != value
      );
      setTheoric({ ...theoric, comments: array });
      setNewComment("");
    }
  };
  const handleSave = async () => {
    try {
      setOpen(true);
      postTheoric(theoric).then((res) => {
        if (res._id) {
          setNewTheoricId(res._id);
          setTheoric(theoricTemplate);
          setNewImage("");
          setNewComment("");
          setDialogText("Contenido teorico creado exitosamente");
        } else {
          setNewComment("");
        }
      });
    } catch (error) {
      setDialogText("Algo salio mal. Por favor intentalo de nuevo");
    }
  };
  useEffect(() => {
    setTheoric({
      ...theoric,
      owner: {
        _id: user._id,
        profile_picture: user.profile_picture,
        role: user.role,
        user_name: user.user_name,
        avatar: user.avatar,
      },
    });
  }, [user]);

  const migajas = [
    <Link
      to="/"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      HOME
    </Link>,
    <Link
      to="/Content"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      MATERIAL
    </Link>,
    <Link
      to={`/Theoric/Create`}
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      CREAR TEÓRICO
    </Link>,
  ];

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/`);
  };

  return (
    <>
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
      <Container
        sx={{
          p: 1,
          mt: 2,
        }}
      >
        <StyledPaper elevation={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography 
                variant="h3" 
                marginBottom={1} 
                align="center"
              >
                ¡Crea un contenido Teórico!
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <StyledTextField
                required
                label="Titulo"
                name="title"
                value={theoric.title}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledTextField
                required
                label="Autor"
                name="author"
                value={theoric.author}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <StyledTextField
                multiline
                minRows={5}
                maxRows={10}
                label="Contenido"
                name="content"
                value={theoric.content}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <StyledTextField
                  label="Añadir imagen"
                  sx={{
                    width: { xs: "70%", sm: "90%" },
                  }}
                  name="image"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleAdd("images", newImage);
                  }}
                >
                  Añadir
                </Button>
              </Box>
            </Grid>
            {theoric.images.map((image: string, index: number) => {
              return (
                <Grid item xs={12} key={index + image}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src={image}
                      alt={image}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                    <Button
                      color="error"
                      onClick={() => handleDelete("images", image)}
                    >
                      X
                    </Button>
                  </Box>
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <StyledTextField
                  label="Añadir comentario"
                  sx={{
                    width: { xs: "70%", sm: "90%" },
                  }}
                  name="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleAdd("comments", newComment);
                  }}
                >
                  Añadir
                </Button>
              </Box>
            </Grid>
            {theoric.comments.map((comment: string, index: number) => {
              return (
                <Grid item xs={12} key={index + comment}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="body2">{comment}</Typography>
                    <Button
                      color="error"
                      onClick={() => handleDelete("comments", comment)}
                    >
                      X
                    </Button>
                  </Box>
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleSave();
                  }}
                >
                  Publicar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCancel}
                  style={{ marginLeft: "2vw" }}
                >
                  Cancelar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </StyledPaper>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>{dialogText}</DialogTitle>
          <DialogContent>
            {dialogText !== "Enviando..." ? (
              <Button
                onClick={() => {
                  setOpen(false);
                  dialogText === "Contenido teorico creado exitosamente" &&
                    navigate(`/Theoric/${newTheoricId}`);
                }}
              >
                Aceptar
              </Button>
            ) : null}
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
};
