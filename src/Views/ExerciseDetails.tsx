/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ownerTemplate } from "../app/Utils/userUtilities";
import { ExerciseInterface } from "../app/Interfaces/interfaceExercise";
import { exerciseTemplate } from "../app/Utils/ExerciseUtilities";
import MiEditor from "../Components/CodeEditor/MiEditor";
/*-----------IMPORT MUI & CSS-----------*/
import {
  Button,
  Modal,
  TextField,
  Box,
  useTheme,
  Breadcrumbs,
} from "@mui/material";
import { StackMigajas } from "../Components/Style/StyledComponents";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  ButtonsContainer,
  StyledTypography3,
  StyledGrid,
  StyledBoxModal,
  StyledBoxModal2,
  StyledDivModal2,
} from "../Components/Theoric/StyledComponents";
import {
  BoxExcerciceContainer,
  StyledTypography,
  CreatorNameText,
  StyledPaper,
  CreatedAt,
} from "../Components/Excercise/StyledComponents";
import {
  deleteExercise,
  editExercise,
  getExerciseById,
} from "../app/Reducers/exercisesSlice";

const ExerciseDetails = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    user: { data },
    exercises: { exercise },
  } = useAppSelector((state) => state);
  const [role, setRole] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [editable, setEditable] = useState<ExerciseInterface>(exerciseTemplate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && typeof id === "string") {
      dispatch(getExerciseById(id));
      setEditable((editable) => (editable = exercise));
      setRole((role) => (role = data.role));
    }
    if (typeof id === "string") {
      setEditable({ ...editable, _id: id });
    }
  }, [data, id]);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    let aux: boolean = !open;
    setOpen(!open);
    if (aux === false) {
      setEditable({ ...exercise, _id: "" });
    }
    if (open === false && typeof id === "string") {
      setEditable({
        owner: ownerTemplate,
        title: exercise.title,
        description: exercise.description,
        code: exercise.code,
        test: exercise.test,
        createdAt: exercise.createdAt,
        updatedAt: exercise.updatedAt,
        tags: exercise.tags,
        _id: id,
      });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setEditable({ ...editable, [event.target.name]: event.target.value });
  };

  const handleSaver = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof id === "string") {
      setEditable({ ...editable, _id: id });
    }
    editExercise(editable);
    setOpen(!open);
    window.location.reload();
  };

  const handleOpenDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDelete(!openDelete);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof id === "string") {
      deleteExercise(id);
      navigate("/Content");
    }
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
      to={`/Exercise/${id}`}
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        textTransform: "uppercase",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      {exercise.title}
    </Link>,
  ];
  return (
    <StyledGrid>
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>

      {role > 3 && (
        <ButtonsContainer>
          <Button variant="contained" onClick={handleOpen}>
            Editar
          </Button>
          <Button color="error" variant="contained" onClick={handleOpenDelete}>
            Borrar
          </Button>
        </ButtonsContainer>
      )}

      <Modal open={openDelete}>
        <StyledBoxModal2>
          <Button
            variant="contained"
            style={{ marginLeft: "43.2vw", marginTop: "-4vh" }}
            onClick={handleOpenDelete}
          >
            Cerrar
          </Button>
          <StyledTypography>¿Estás segur@?</StyledTypography>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Borrar
          </Button>
        </StyledBoxModal2>
      </Modal>
      <Modal open={open}>
        <StyledBoxModal>
          <Button
            style={{ marginLeft: "74vw", marginTop: "-0.2vh" }}
            variant="contained"
            onClick={handleOpen}
          >
            Close
          </Button>
          <TextField
            style={{ width: "45vw", marginLeft: "1vh" }}
            name="title"
            onChange={handleInputChange}
            value={editable.title}
            multiline
          />
          <StyledDivModal2>
            <TextField
              style={{ width: "77vw" }}
              name="description"
              onChange={handleInputChange}
              value={editable.description}
              multiline
            />
          </StyledDivModal2>
          <TextField
            style={{ marginLeft: "1vh", width: "25vw" }} // tags, test
            name="code"
            onChange={handleInputChange}
            value={editable.code}
            multiline
          />
          <Button
            style={{ marginLeft: "74.85vw", marginBottom: "-0.2vh" }}
            variant="contained"
            onClick={handleSaver}
          >
            Save
          </Button>
        </StyledBoxModal>
      </Modal>

      <Box
        style={{
          display: "flex",
          marginTop: "1vh",
          height: "87.3vh",
        }}
      >
        <BoxExcerciceContainer>
          <StyledTypography>{exercise.title}</StyledTypography>

          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {exercise.tags.length > 0 &&
              exercise.tags.map((tag: string) => {
                return <StyledTypography3> {tag} </StyledTypography3>;
              })}
            <LocalOfferIcon
              style={{
                color: `${theme.palette.getContrastText(
                  theme.palette.background.default
                )}`,
              }}
            />
          </Box>

          <CreatorNameText>By: {exercise.owner.user_name}</CreatorNameText>

          <CreatedAt>
            {exercise.createdAt.length > 0 && exercise.createdAt}
          </CreatedAt>

          <StyledPaper elevation={8} style={{ marginTop: "0.5vh" }}>
            Descripción: {exercise.description}
          </StyledPaper>
        </BoxExcerciceContainer>

        <MiEditor coding={exercise.code} testing={exercise.test} />
      </Box>
    </StyledGrid>
  );
};

export default ExerciseDetails;
