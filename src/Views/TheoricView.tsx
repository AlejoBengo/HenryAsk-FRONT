/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import {
  fetchOneTheoric,
  theoricTemplate,
  deleteTheoric,
} from "../app/Reducers/theoricSlice";
import { Theoric } from "../app/interface";
import { editTheoric } from "../app/Reducers/theoricSlice";
import { useParams, useNavigate } from "react-router-dom";
import { ownerTemplate } from "../app/Utils/userUtilities";
import TheoricDraft from "../Components/Draft/TheoricDraft";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectToLogin from "../Components/RedirectToLogin/RedirectToLogin";
/*-----------IMPORT MUI & CSS-----------*/
import { Button, Modal, TextField, Box } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  StyledDiv,
  StyledBox3,
  StyledTypography,
  StyledTypography2,
  StyledTypography3,
  StyledPaper,
  StyledGrid,
  StyledBoxModal,
  StyledBoxModal2,
  StyledDivModal2,
} from "../Components/Theoric/StyledComponents";

/*--------------------------------------------------------*/

export default function TheoricView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const usuario = useAppSelector((state) => state.user.data);
  const [theoric, setTheoric] = useState<Theoric>(theoricTemplate);
  const [role, setRole] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [editable, setEditable] = useState({
    owner: ownerTemplate,
    title: "",
    content: "",
    author: "",
    images: [],
    comments: [],
    id: "",
  });
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (id && typeof id === "string") {
      fetchOneTheoric(id).then((res) => {
        setTheoric(res);
        setEditable(res);
      });
      setRole(usuario.role);
    }
    if (typeof id === "string") {
      setEditable({ ...editable, id: id });
    }
  }, [usuario, id]);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    let aux: boolean = !open;
    setOpen(!open);
    if (aux === false) {
      setEditable({ ...theoric, id: "" });
    }
    if (open === false && typeof id === "string") {
      setEditable({
        owner: ownerTemplate,
        title: theoric.title,
        content: theoric.content,
        author: theoric.author,
        images: theoric.images,
        comments: theoric.comments,
        id: id,
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
      setEditable({ ...editable, id: id });
    }
    editTheoric(editable);
    setOpen(!open);
    setSave(!save);
    window.location.reload();
  };

  const handleOpenDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDelete(!openDelete);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof id === "string") {
      deleteTheoric(id);
      navigate("/");
    }
  };

  if (!isAuthenticated) {
    return <RedirectToLogin open={true} />;
  }

  return (
    <StyledGrid>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledTypography>{theoric.title}</StyledTypography>
        {role > 3 && (
          <StyledBox3>
            <Button variant="contained" onClick={handleOpen}>
              Editar
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={handleOpenDelete}
            >
              Borrar
            </Button>
          </StyledBox3>
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
            {/* <TheoricDraft id={id} /> */}
            <StyledDivModal2>
              <TextField
                style={{ width: "77vw" }}
                name="content"
                onChange={handleInputChange}
                value={editable.content}
                multiline
              />
            </StyledDivModal2>
            <TextField
              style={{ marginLeft: "1vh", width: "25vw" }}
              name="author"
              onChange={handleInputChange}
              value={editable.author}
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
      </Box>
      <StyledTypography2>Por: {theoric.author}</StyledTypography2>
      <StyledDiv>
        <StyledPaper elevation={8}>{theoric.content}</StyledPaper>
      </StyledDiv>

      <Box
        style={{
          display: "flex",
          marginTop: "2.5vh",
          justifyContent: "flex-end",
        }}
      >
        {theoric.comments.length > 0 &&
          theoric.comments.map((com: string) => {
            return <StyledTypography3> {com} </StyledTypography3>;
          })}
        <LocalOfferIcon />
      </Box>

      {theoric.images.length > 0 &&
        theoric.images.map((img: string) => {
          return <img src={img} alt="" />;
        })}
    </StyledGrid>
  );
}
