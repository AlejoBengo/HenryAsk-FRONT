/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchOneTheoric, theoricTemplate } from "../app/Reducers/theoricSlice";
import { Theoric } from "../app/interface";
import { editTheoric } from "../app/Reducers/theoricSlice";
import { useParams, useNavigate } from "react-router-dom";
/*-----------IMPORT MUI & CSS-----------*/
import { Button, Modal, TextField } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  StyledBox,
  StyledBox2,
  StyledBox3,
  StyledTypography,
  StyledTypography2,
  StyledTypography3,
  StyledPaper,
  StyledGrid,
  StyledBoxModal,
  StyledButtonModal,
  StyledTextFieldModal,
  StyledTextFieldModal2,
  StyledTextFieldModal3,
  StyledDivModal2,
  StyledButtonModal2,
  StyledButtonModal3,
} from "../Components/Theoric/StyledComponents";

/*--------------------------------------------------------*/

export default function TheoricView() {
  const { id } = useParams();
  const usuario = useAppSelector((state) => state.user.data);
  const [theoric, setTheoric] = useState<Theoric>(theoricTemplate);
  const [role, setRole] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [editable, setEditable] = useState({
    owner: "",
    title: "",
    content: "",
    author: "",
    images: [],
    comments: [],
    id: "",
  });
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
    if (typeof id === "string") {
      setEditable({ ...editable, id: id });
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
    window.location.reload();
  };

  if (role === 4 || role === 5) {
    return (
      <StyledGrid>
        <StyledBox>
          <Modal open={open}>
            <StyledBoxModal>
              <StyledButtonModal onClick={handleOpen}>Cerrar</StyledButtonModal>
              <StyledTextFieldModal
                name="title"
                onChange={handleInputChange}
                value={editable.title}
                multiline
              />
              <StyledDivModal2>
                <StyledTextFieldModal2
                  name="content"
                  onChange={handleInputChange}
                  value={editable.content}
                  multiline
                />
              </StyledDivModal2>
              <StyledTextFieldModal3
                name="author"
                onChange={handleInputChange}
                value={editable.author}
                multiline
              />
              <StyledButtonModal2 onClick={handleSaver}>
                Save
              </StyledButtonModal2>
            </StyledBoxModal>
          </Modal>
          <StyledTypography>{theoric.title}</StyledTypography>
          <StyledBox3>
            <StyledButtonModal3 onClick={handleOpen}>Editar</StyledButtonModal3>
            <StyledTypography2>Por: {theoric.author}</StyledTypography2>
          </StyledBox3>
        </StyledBox>
        <StyledPaper>{theoric.content}</StyledPaper>

        <StyledBox2>
          {theoric.comments.length > 0 &&
            theoric.comments.map((com: string) => {
              return <StyledTypography3> {com} </StyledTypography3>;
            })}
          <LocalOfferIcon />
        </StyledBox2>
        {theoric.images.length > 0 &&
          theoric.images.map((img: string) => {
            return <img src={img} alt="" />;
          })}
      </StyledGrid>
    );
  } else {
    return (
      <StyledGrid>
        <StyledBox>
          <StyledTypography>{theoric.title}</StyledTypography>
          <StyledTypography2>Por: {theoric.author}</StyledTypography2>
        </StyledBox>
        <StyledPaper>{theoric.content}</StyledPaper>

        <StyledBox2>
          {theoric.comments.length > 0 &&
            theoric.comments.map((com: string) => {
              return <StyledTypography3> {com} </StyledTypography3>;
            })}
          <LocalOfferIcon />
        </StyledBox2>

        <img src={theoric.images} alt="not found" />
      </StyledGrid>
    );
  }
}
