import React from "react";
import ReadMoreModal from "./ReadMoreModal";
import { useNavigate } from "react-router-dom";
import { fetchAnswerById } from "../../app/Utils/answerUtilities";
import { TituloForo } from "../Style/StyledComponents";
import { editIsBanned, fetchIdUserBan } from "../../app/Utils/editUser";
import { editReportStatus } from "../../app/Utils/editReportStatus";
import { deletePost } from "../../app/Utils/postUtilities";
import Dialog from "../Dialog/Dialog";
import { deleteAnswer } from "../../app/Utils/answerUtilities";
import { deleteComment } from "../../app/Utils/commentUtilities";

/*-----------IMPORT MUI & CSS-----------*/
import {
  Table,
  TableBody,
  Avatar,
  Typography,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TablePagination,
  Button,
} from "@mui/material";
import { LinkDom } from "../Style/StyledComponents";
import { Box } from "@mui/system";
import {
  TituloVerMas,
  ButtonVerMas,
  SpanVerMas,
} from "../Style/StyledComponents";
import { useAppDispatch } from "../../app/hooks";

interface Column {
  id: "name" | "post" | "description" | "status";
  label: string;
  minWidth?: number;
  align?: "center" | "left";
}

const columns: readonly Column[] = [
  {
    id: "status",
    label: "Estado",
    minWidth: 50,
    align: "left",
  },
  { id: "name", label: "Usuario", minWidth: 50, align: "center" },
  { id: "post", label: "Post reportado", minWidth: 100, align: "center" },
  {
    id: "description",
    label: "Descripcion del report",
    minWidth: 120,
    align: "center",
  },
];

export default function PanelReport(props: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [open, setOpen] = React.useState(false);
  let [infoModal, setInfoModal] = React.useState({});

  //ir al commentario
  const handlePostComment = (argument: string) => {
    fetchAnswerById(argument).then((response) =>
      navigate(`/post/${response.post._id}`)
    );
  };

  //---------//

  const handleClickOpen = (val: any) => {
    setOpen(true);
    setInfoModal((infoModal = { val }));
  };

  const { rows } = props;
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // handle BANEO
  const handleCloseResuelto = (info: any) => {
    if (info.post) {
      fetchIdUserBan(info.post.owner).then((response) => {
        let aux = { ...response, isBanned: true };
        alert(`${aux.user_name} ha sido baneado correctamente`);
        editIsBanned(aux)
          .then((respo) =>
            editReportStatus({ status: "FULFILLED", id: info._id })
          )
          .then(() => window.location.reload());
      });
    }
    if (info.answer) {
      fetchIdUserBan(info.answer.owner).then((response) => {
        let aux = { ...response, isBanned: true };
        alert(`${aux.user_name} ha sido baneado correctamente`);
        editIsBanned(aux)
          .then((respo) =>
            editReportStatus({ status: "FULFILLED", id: info._id })
          )
          .then(() => window.location.reload());
      });
    }
    if (info.comment) {
      fetchIdUserBan(info.comment.owner).then((response) => {
        let aux = { ...response, isBanned: true };
        alert(`${aux.user_name} ha sido baneado correctamente`);
        editIsBanned(aux)
          .then((respo) =>
            editReportStatus({ status: "FULFILLED", id: info._id })
          )
          .then(() => window.location.reload());
      });
    }
    setOpen(false);
  };

  // ===============//
  // report instantaneo y borrar post
  const [openDialog, setOpenDialog] = React.useState(false);
  let [modalState, setModalState] = React.useState("Enviando...");
  let [dialogBaneado, setDialogBaneado] = React.useState("");
  const handleBoomReport = (str: string, info: any) => {
    if (str === "post") {
      deletePost(info.val?.post._id)
        .then(() => fetchIdUserBan(info.val?.post.owner))
        .then((response) => {
          let aux = { ...response, isBanned: true };
          editIsBanned(aux);
        })
        .then(() =>
          editReportStatus({ status: "FULFILLED", id: info.val?._id })
        )
        .then(() => {
          setDialogBaneado(
            (dialogBaneado = "Se ha baneado y eliminado el post correctamente!")
          );
          setModalState((modalState = dialogBaneado));
          setOpenDialog(true);
        })
        .catch((err) => console.log(err));
    }
    if (str === "answer") {
      deleteAnswer(info.val?.answer._id)
        .then(() => fetchIdUserBan(info.val?.answer.owner))
        .then((response) => {
          let aux = { ...response, isBanned: true };
          editIsBanned(aux);
        })
        .then(() =>
          editReportStatus({ status: "FULFILLED", id: info.val?._id })
        )
        .then(() => {
          setDialogBaneado(
            (dialogBaneado =
              "Se ha baneado y eliminado la respuesta correctamente")
          );
          setModalState((modalState = dialogBaneado));
          setOpenDialog(true);
        })
        .catch((err) => console.log(err));
    }
    if (str === "comment") {
      deleteComment(info.val?.comment._id)
        .then(() => fetchIdUserBan(info.val?.comment.owner))
        .then((response) => {
          let aux = { ...response, isBanned: true };
          editIsBanned(aux);
        })
        .then(() =>
          editReportStatus({ status: "FULFILLED", id: info.val?._id })
        )
        .then(() => {
          setDialogBaneado(
            (dialogBaneado =
              "Se ha baneado y eliminado el comentario correctamente")
          );
          setModalState((modalState = dialogBaneado));
          setOpenDialog(true);
        })
        .catch((err) => console.log(err));
    }
  };

  // ==================//
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Dialog
        textSuccess={dialogBaneado}
        openDialog={openDialog}
        modalState={modalState}
        error="No se pudo completar el procedimiento"
        setOpenDialog={setOpenDialog}
      />
      <ReadMoreModal
        open={open}
        setOpen={setOpen}
        infoModal={infoModal}
        handlePostComment={handlePostComment}
        handleCloseResuelto={handleCloseResuelto}
        handleBoomReport={handleBoomReport}
      />
      <TableContainer sx={{ maxHeight: 1540, minHeight: 1540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.label === "Estado") {
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: "10%",
                        fontWeight: "bold",
                        margin: 0,
                        padding: "0px 0px 0px 8px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  );
                }
                if (column.label === "Usuario") {
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: "10%",
                        fontWeight: "bold",
                        margin: 0,
                        padding: "0px 0px 0px 0px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  );
                }
                if (column.label === "Post reportado") {
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: "10%",
                        fontWeight: "bold",
                        margin: 0,
                        padding: "0px 0px 0px 10px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  );
                }
                return (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .reverse()
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if (column.id === "name") {
                        return (
                          <TableCell
                            align={column.align}
                            sx={{ padding: 0, margin: 0, width: "12%" }}
                          >
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ flexDirection: "column" }}
                            >
                              <Avatar
                                alt={row.owner.user_name}
                                src={
                                  row.owner.profile_picture.length > 0
                                    ? row.owner.profile_picture
                                    : row.owner.avatar.length > 0
                                    ? row.owner.avatar
                                    : row.owner.profile_picture
                                }
                              />
                              <Typography
                                variant="subtitle2"
                                sx={{ color: "secondary.main" }}
                              >
                                <LinkDom to={`#`} color="secondary.main">
                                  {row.owner.user_name}
                                </LinkDom>
                              </Typography>
                            </Box>
                          </TableCell>
                        );
                      }
                      if (column.id === "post") {
                        if (row.post) {
                          return (
                            <TableCell
                              align={column.align}
                              sx={{
                                padding: "0px 0px 0px 10px",
                                margin: "0px",
                                width: "19%",
                              }}
                            >
                              <LinkDom to={`/post/${row.post._id}`}>
                                Ir al Posteo
                              </LinkDom>
                            </TableCell>
                          );
                        }
                        if (row.answer) {
                          return (
                            <TableCell
                              align={column.align}
                              sx={{
                                padding: "0px 0px 0px 10px",
                                margin: "0px",
                                width: "19%",
                              }}
                            >
                              <LinkDom to={`/post/${row.answer.post}`}>
                                Ir a la Respuesta
                              </LinkDom>
                            </TableCell>
                          );
                        }
                        if (row.comment) {
                          return (
                            <TableCell
                              align={column.align}
                              sx={{
                                padding: "0px 0px 0px 10px",
                                margin: "0px",
                                width: "19%",
                              }}
                            >
                              <Button
                                sx={{
                                  textTransform: "none",
                                  color: "comen.main",
                                }}
                                onClick={() =>
                                  handlePostComment(row.comment.answer)
                                }
                              >
                                Ir al comentario
                              </Button>
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell
                            align={column.align}
                            sx={{
                              padding: "0px 0px 0px 10px",
                              margin: "0px",
                              width: "19%",
                            }}
                          >
                            <TituloForo
                              sx={{ borderBottom: "4px solid yellow" }}
                            >
                              Post Eliminado
                            </TituloForo>
                          </TableCell>
                        );
                      }

                      if (column.id === "status") {
                        if (row.status === "FULFILLED") {
                          return (
                            <TableCell>
                              <Box
                                textAlign={column.align}
                                sx={{
                                  boxShadow: "1px 1px 8px #00CC66",
                                  width: "10px",
                                  height: 95,
                                  backgroundColor: "success.main",
                                }}
                              ></Box>
                            </TableCell>
                          );
                        }
                        if (row.status === "PENDING") {
                          return (
                            <TableCell>
                              <Box
                                textAlign={column.align}
                                sx={{
                                  boxShadow: "1px 1px 8px #ef6c00",
                                  width: "10px",
                                  height: 95,
                                  backgroundColor: "warning.main",
                                }}
                              ></Box>
                            </TableCell>
                          );
                        }
                        if (row.status === "REJECTED") {
                          return (
                            <TableCell>
                              <Box
                                textAlign={column.align}
                                sx={{
                                  boxShadow: "1px 1px 8px #A10702",
                                  width: "10px",
                                  height: 95,
                                  backgroundColor: "error.main",
                                }}
                              ></Box>
                            </TableCell>
                          );
                        }
                      }
                      let aux = value?.split(" ");
                      let aux2 = aux?.slice(0, 28);
                      let aux3 = aux2?.join(" ");

                      return (
                        <TableCell
                          align={column.align}
                          sx={{ maxWidth: "20vw" }}
                        >
                          <Box>
                            <ButtonVerMas
                              onClick={(e: any) => handleClickOpen(row)}
                              sx={{
                                color: "inherit",
                                minWidth: "80%",
                                minHeight: "80px",
                              }}
                            >
                              {aux3}
                              <TituloVerMas>
                                <SpanVerMas sx={{ color: "primary.main" }}>
                                  Ver mas
                                </SpanVerMas>
                              </TituloVerMas>
                            </ButtonVerMas>
                          </Box>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
