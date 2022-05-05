/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  fetchOneTheoric,
  theoricTemplate,
  deleteTheoric,
} from "../app/Reducers/theoricSlice";
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
  StyledTypography4,
  StyledPaper,
  StyledGrid,
  StyledDiv,
  StyledBoxModal,
  StyledBoxModal2,
  StyledButtonModal,
  StyledTextFieldModal,
  StyledTextFieldModal2,
  StyledTextFieldModal3,
  StyledDivModal2,
  StyledButtonModal2,
  StyledButtonModal3,
  StyledButtonModal4,
  StyledButtonModal5,
} from "../Components/Theoric/StyledComponents";

/*--------------------------------------------------------*/

export default function TheoricView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const usuario = useAppSelector((state) => state.user.data);
  const [theoric, setTheoric] = useState<Theoric>(theoricTemplate);
  const [role, setRole] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
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

  const handleOpenDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDelete(!openDelete);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof id === "string") {
      deleteTheoric(id);
      navigate("/");
    }
  };

  return (
    <StyledGrid>
      <StyledBox>
        <Modal open={openDelete}>
          <StyledBoxModal2>
            <StyledButtonModal5 onClick={handleOpenDelete}>
              Close
            </StyledButtonModal5>
            <StyledTypography4>Are you sure?</StyledTypography4>
            <StyledButtonModal4 onClick={handleDelete}>
              Delete
            </StyledButtonModal4>
          </StyledBoxModal2>
        </Modal>
        <Modal open={open}>
          <StyledBoxModal>
            <StyledButtonModal onClick={handleOpen}>Close</StyledButtonModal>
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
            <StyledButtonModal2 onClick={handleSaver}>Save</StyledButtonModal2>
          </StyledBoxModal>
        </Modal>
        <StyledTypography>{theoric.title}</StyledTypography>

        {role > 3 && (
          <StyledBox3>
            <StyledButtonModal3 onClick={handleOpen}>Edit</StyledButtonModal3>
            <StyledButtonModal4 onClick={handleOpenDelete}>
              Delete
            </StyledButtonModal4>
          </StyledBox3>
        )}
      </StyledBox>
      <StyledTypography2>Por: {theoric.author}</StyledTypography2>
      <StyledDiv>
        <StyledPaper elevation={8}>{theoric.content}</StyledPaper>
      </StyledDiv>

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
}
