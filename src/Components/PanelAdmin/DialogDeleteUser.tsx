import React, { useState } from "react";
/*-----------IMPORT MUI & CSS-----------*/
import {
  CircularProgress,
  Fade,
  Modal,
  TextField,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

export default function DialogDeleteUser(props: any) {
  const navigate = useNavigate();
  const {
    handleCloseModalDelete,
    openDialogDelete,
    infoDelete,
    borrarUsuario,
  } = props;
  return (
    <Modal open={openDialogDelete} onClose={() => handleCloseModalDelete}>
      <Fade in={openDialogDelete}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: "auto",
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{ margin: "0px 0px 20px 0px" }}>
              <Typography sx={{ color: "comen.main" }} align="center">
                Esta seguro/a que desea eliminar este usuario?
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                color="warning"
                variant="outlined"
                onClick={() => handleCloseModalDelete()}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                color="error"
                variant="outlined"
                onClick={() => borrarUsuario(infoDelete._id)}
              >
                Eliminar Usuario
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}
