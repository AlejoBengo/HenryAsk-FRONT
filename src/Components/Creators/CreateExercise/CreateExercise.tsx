import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getAllExercises,
  postExercise,
} from "../../../app/Reducers/exercisesSlice";
import { StyledPaper } from "../../Excercise/StyledComponents";
import { StackMigajas, StyledTextField } from "../../Style/StyledComponents";
import { StyledAlert } from "../CreatePost/StyledComponents";
import { exerciseTemplate } from "../../../app/Utils/ExerciseUtilities";
import { Error } from "../../../app/interface";
//------------CodeEditor---------------------//
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const CreateExercise = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [exercise, setExercise] = useState(exerciseTemplate);
  const usuario = useAppSelector((state) => state.user.data);
  const navigate = useNavigate();
  const [error, setError] = useState<Error>({
    errorTag: "",
    errorSubmit: "",
  });

  useEffect(() => {
    setExercise({
      ...exercise,
      owner: {
        _id: usuario._id,
        user_name: usuario.user_name,
        role: usuario.role,
        avatar: usuario.avatar,
        profile_picture: usuario.profile_picture,
      },
    });
  }, [usuario]);

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

  const validator = (tags: Array<string>) => {
    let errors: Error = {
      errorTag: "",
      errorSubmit: "",
    };
    if (tags.length > 3) {
      errors.errorTag = "Se pueden elgir hasta 3 etiquetas.";
    }
    return errors;
  };

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

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setExercise({ ...exercise, [event.target.name]: event.target.value });
  };

  const handleSelect = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setExercise({
      ...exercise,
      tags:
        exercise.tags.includes(event.target.value) || exercise.tags.length > 2
          ? exercise.tags
          : [...exercise.tags, event.target.value],
    });
    setError(validator([...exercise.tags, event.target.value]));
  };

  const handleSubmit = () => {
    if (error.errorSubmit.length > 0) {
      setError({ ...error, errorSubmit: "" });
    }
    if (
      error.errorTag.length === 0 &&
      exercise.description.length > 0 &&
      exercise.title.length > 0 &&
      exercise.test.length > 0 &&
      exercise.tags.length > 0
    ) {
      postExercise(exercise)
        .then((response) => (console.log ("response", response), navigate(`/exercise/${response._id}`)))
        .catch((err) => console.log(err));
      setExercise(exerciseTemplate);
    } else {
      setError({ ...error, errorSubmit: "El formulario está incompleto" });
    }
  };

  const handleCancel = () => {};

  const handleDelete = (event: string) => {
    setExercise({
      ...exercise,
      tags: exercise.tags.filter((tag) => tag !== event),
    });
    if (exercise.tags.length < 4) {
      setError({ ...error, errorTag: "" });
    }
  };

  const handleInputChangeCode = (value: string): void => {
    setExercise({ ...exercise, code: value });
  };

  const handleInputChangeTest = (value: string): void => {
    setExercise({ ...exercise, test: value });
  };

  return (
    <>
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
      <Container sx={{ p: 1, mt: 2 }}>
        <StyledPaper elevation={2} sx={{ height: "fit-content" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" marginBottom={1}>
                ¡Crea un Ejercicio!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                multiline
                label="Título"
                name="title"
                value={exercise.title}
                onChange={handleInputChange}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                multiline
                minRows={3}
                maxRows={5}
                variant="outlined"
                label="Descripción"
                name="description"
                value={exercise.description}
                onChange={handleInputChange}
              ></StyledTextField>
            </Grid>
            <Grid item xs={6} fontSize="16px">
              <CodeMirror
                value={exercise.code}
                theme={oneDark}
                height="38vh"
                placeholder="Tu código..."
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                  handleInputChangeCode(value);
                }}
              />
            </Grid>
            <Grid item xs={6} fontSize="16px">
              <CodeMirror
                value={exercise.test}
                theme={oneDark}
                height="38vh"
                placeholder="Tu test..."
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                  handleInputChangeTest(value);
                }}
              />
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
              {error.errorTag.length > 0 && (
                <StyledAlert severity="info">{error.errorTag}</StyledAlert>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {exercise.tags.length > 0 && (
                <List>
                  {exercise.tags.map((tag) => {
                    return (
                      <ListItem key={tag}>
                        <ListItemIcon>{/* <TagIcon /> */}</ListItemIcon>
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
            </Grid>
            <Box sx={{marginInline:"auto"}}>
              <Box>
                {error.errorSubmit.length > 0 && (
                  <StyledAlert severity="error">
                    {error.errorSubmit}
                  </StyledAlert>
                )}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "7vh",
                  marginTop: "1vh",
                  marginInline: "auto",
                  columnGap: "3rem",
                }}
              >
                <Button
                  size="small"
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ width: "7rem" }}
                >
                  Crear
                </Button>
                <Button
                  size="small"
                  onClick={handleCancel}
                  variant="contained"
                  sx={{ width: "7rem" }}
                >
                  Cancelar
                </Button>
              </Box>
            </Box>
          </Grid>
        </StyledPaper>
      </Container>
    </>
  );
};

export default CreateExercise;
