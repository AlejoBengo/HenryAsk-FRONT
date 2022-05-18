import * as React from "react";
/*-----------IMPORT MUI & CSS-----------*/
import { TituloForo } from "../Style/StyledComponents";
import { LinkDom } from "../Style/StyledComponents";
import { editReportStatus } from "../../app/Utils/editReportStatus";
/*-----------IMPORT Components-----------*/
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";

export default function ReadMoreModal(props: any) {
  const {
    open,
    setOpen,
    infoModal,
    handlePostComment,
    handleBoomReport,
    handleCloseResuelto,
  } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseRechazado = (info: any) => {
    editReportStatus({ status: "REJECTED", id: info._id }).then(() =>
      window.location.reload()
    );
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
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
              Razon:
            </TituloForo>{" "}
            {infoModal.val?.reason}
          </Box>
          <Button
            onClick={handleClose}
            sx={{ color: "error.main", fontSize: "17px" }}
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
            <TituloForo
              sx={{ borderBottom: "6px solid yellow", fontWeight: "bold" }}
            >
              Descripcion del reporte:{" "}
            </TituloForo>
            <br />
            <br />
            {infoModal.val?.description}
            <br />
            <br />
            {infoModal.val?.answer?._id && (
              <>
                <TituloForo
                  sx={{ borderBottom: "6px solid yellow", fontWeight: "bold" }}
                >
                  Respuesta reportada:
                </TituloForo>
                <br />
                <br />
                {infoModal.val?.answer.content}
              </>
            )}
            {infoModal.val?.comment?._id && (
              <>
                <TituloForo
                  sx={{ borderBottom: "6px solid yellow", fontWeight: "bold" }}
                >
                  Comentario reportado:
                </TituloForo>
                <br />
                <br />
                {infoModal.val?.comment.content}
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem 1rem 1rem 1rem",
            minWidth: "40vw",
          }}
        >
          <Box>
            {infoModal.val?.post?._id && (
              <Button
                onClick={handleClose}
                sx={{ color: "warning.main", marginRight: "2vw" }}
                color="warning"
                variant="outlined"
              >
                <LinkDom to={`/post/${infoModal.val?.post._id}`}>
                  Ir al Post
                </LinkDom>
              </Button>
            )}
            {infoModal.val?.answer?._id && (
              <Button
                onClick={handleClose}
                sx={{ color: "warning.main", marginRight: "2vw" }}
                color="warning"
                variant="outlined"
              >
                <LinkDom to={`/post/${infoModal.val?.answer.post}`}>
                  Ir al Post
                </LinkDom>
              </Button>
            )}
            {infoModal.val?.comment?._id && (
              <Button
                onClick={() => handlePostComment(infoModal.val.comment.answer)}
                sx={{ color: "warning.main", marginRight: "2vw" }}
                color="warning"
                variant="outlined"
              >
                Ir al Post
              </Button>
            )}
            {infoModal.val?.post?._id && (
              <Button
                onClick={() => handleBoomReport("post", infoModal)}
                sx={{ color: "error.main" }}
                color="error"
                variant="outlined"
              >
                BOOM!
              </Button>
            )}
            {infoModal.val?.answer?._id && (
              <Button
                onClick={() => handleBoomReport("answer", infoModal)}
                sx={{ color: "error.main" }}
                color="error"
                variant="outlined"
              >
                BOOM!
              </Button>
            )}
            {infoModal.val?.comment?._id && (
              <Button
                onClick={() => handleBoomReport("comment", infoModal)}
                sx={{ color: "error.main" }}
                color="error"
                variant="outlined"
              >
                BOOM!
              </Button>
            )}
          </Box>

          <Box>
            <Button
              onClick={() => handleCloseResuelto(infoModal.val)}
              sx={{ color: "error.main", marginRight: "2vw" }}
              color="error"
              variant="outlined"
            >
              Banear
            </Button>
            <Button
              onClick={() => handleCloseRechazado(infoModal.val)}
              autoFocus
              sx={{ color: "success.main" }}
              color="success"
              variant="outlined"
            >
              Rechazar peticion
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
