import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Breadcrumbs,
  useTheme,
  Avatar,
} from "@mui/material";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchAllUsers } from "../app/Utils/allUsers";
import { LinkDom, TituloForo } from "../Components/Style/StyledComponents";
import { UserShort } from "../Components/UserShort/UserShort";
import { StackMigajas } from "../Components/Style/StyledComponents";
import { Link } from "react-router-dom";

export const HenryCoinsRanking = () => {
  const allUsers = useAppSelector((state) => state.allUser.allUsers);
  let filterUsers = [...allUsers].filter((el) => el.role === 2);
  let sortedUsers = filterUsers.sort((a, b) => a.give_henry_coin < b.give_henry_coin ? -1 : 1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const formatDate = (date: string) => {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    let aux = date.slice(0, 10).split("-");

    return `${aux[2]} de ${months[Number(aux[1])]} del ${aux[0]}`;
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

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
      to="/Ranking"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      HENRY COINS RANKING
    </Link>,
  ];

  return (
    <Container
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StackMigajas
        style={{ marginLeft: "-27.7vw", marginTop: "-1.2vh" }}
        spacing={2}
      >
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.getContrastText(
            theme.palette.background.default
          ),
        }}
      >
        Ranking de <TituloForo>Henry Coins</TituloForo>
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Posicion</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Nombre completo</TableCell>
              <TableCell>Henry Coins</TableCell>
              <TableCell>Usuario desde </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers
              .reverse()
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => {
                return (
                  <TableRow key={user._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <LinkDom to={`/Profile/${user._id}`}>
                        <Typography
                          variant="body2"
                          display={"flex"}
                          alignItems="center"
                        >
                          <Avatar
                            sx={{
                              width: "35px",
                              height: "35px",
                              display: "inline",
                              mx: 1,
                              zIndex: 2,
                              border: "1px solid",
                              borderColor: "primary.dark",
                              ["&:before"]: {
                                zIndex: -1,
                                content: "''",
                                display: "block",
                                backgroundColor: "primary.light",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                              },
                            }}
                            src={
                              user?.profile_picture.length > 0
                                ? user.profile_picture
                                : user.avatar.length > 0
                                ? user.avatar
                                : user.profile_picture
                            }
                          />
                          {user.user_name}
                        </Typography>
                      </LinkDom>
                    </TableCell>
                    <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
                    <TableCell>{user.give_henry_coin}</TableCell>
                    <TableCell>{formatDate(user.createdAt || "")}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component={"div"}
        page={page}
        count={sortedUsers.length}
        rowsPerPage={rowsPerPage}
        onPageChange={(event, newPage) => {
          setPage(newPage);
        }}
        onRowsPerPageChange={(
          event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setRowsPerPage(Number(event.target.value));
        }}
      />
    </Container>
  );
};

export default HenryCoinsRanking;
