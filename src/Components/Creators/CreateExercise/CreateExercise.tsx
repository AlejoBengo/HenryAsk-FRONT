import { Box, Breadcrumbs, Button, Container, Grid, MenuItem, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { getAllExercises } from "../../../app/Reducers/exercisesSlice";
import { StyledPaper } from "../../Excercise/StyledComponents";
import { StackMigajas, StyledTextField } from "../../Style/StyledComponents";
import { StyledAlert } from "../CreatePost/StyledComponents";

const CreateExercise = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [exercise,setExercise] = useState();

  const tags: Array<string> = [
    "JavaScript",
    "PostgreSQL",
    "Sequelize",
    "Nodejs",
    "Express",
    "React",
    "Redux",
    "CSS",
    "HTML",
    "SQL",
    "Otros",
    "M1",
    "M2",
    "M3",
    "M4",
    "PI",
    "PG",
  ];

  useEffect(() => {
    dispatch(getAllExercises());
  });

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
      to={`/Exercise/Create`}
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      CREAR EJERCICIO
    </Link>,
  ];

  const handleInputChange = () => {

  }

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void  => {

  }

  const handleSubmit = () => {

  }
  
  const handleCancel = () => {

  }

  return (
    <>
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
        <Container sx={{p: 1, mt: 2}}>
          <StyledPaper elevation={2} sx={{height:"fit-content"}}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography 
                  variant="h3" 
                  align="center"
                  marginBottom={1}
                >
                  ¡Crea un Ejercicio!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <StyledTextField 
                  required
                  multiline
                  label="Título"
                  name="title"
                  /* value={exercise.title} */
                  onChange={handleInputChange}
                >
                </StyledTextField>
              </Grid>
              <Grid item xs={12}>
                <StyledTextField 
                  required
                  multiline
                  minRows={3}
                  maxRows={5}
                  variant="outlined"
                  label="Descripción"
                  name="desciption"
                  /* value={exercise.title} */
                  onChange={handleInputChange}
                >
                </StyledTextField>
              </Grid>
              <Grid item xs={6}>
                <StyledTextField 
                  required
                  label="Código"
                  name="code"
                  /* value={exercise.title} */
                  onChange={handleInputChange}
                >
                </StyledTextField>
              </Grid>
              <Grid item xs={6}>
                <StyledTextField 
                  required
                  label="Test"
                  name="test"
                  /* value={exercise.title} */
                  onChange={handleInputChange}
                >
                </StyledTextField>
              </Grid>
              <Grid item xs={12} md={6}>
              <StyledTextField
                select
                label="Etiquetas"
                onChange={(event) => handleSelect(event)}
              >
                {tags.map((tag) => {
                  return (
                    <MenuItem key={tag} value={tag}>
                      {tag}
                    </MenuItem>
                  );
                })}
              </StyledTextField>
              {/* {error.errorTag.length > 0 && (
                <StyledAlert severity="info">{error.errorTag}</StyledAlert>
              )} */}
            </Grid>
            {/*<Grid item xs={12} md={6}>
              {post.tags.length > 0 && (
                <List>
                  {post.tags.map((tag) => {
                    return (
                      <ListItem key={tag}>
                        <ListItemIcon> */}{/* <TagIcon /> */}{/* </ListItemIcon>
                        <ListItemText>{tag}</ListItemText>
                        <Button
                          onClick={() => handleDelete(tag)}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </Button>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Grid> */}
              <Box
              style={{
                width: "20vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "8vh",
              }}
            >
              <Button size="small" onClick={handleSubmit} variant="contained">
                Crear
              </Button>
              <Button size="small" onClick={handleCancel} variant="contained">
                Cancelar
              </Button>
            </Box>
            {/* {error.errorSubmit.length > 0 && (
              <StyledAlert severity="error">{error.errorSubmit}</StyledAlert>
            )} */}
          </Grid>
          </StyledPaper>
        </Container>
    </>
  );
};

export default CreateExercise;
