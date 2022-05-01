import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Avatar, Typography } from "@mui/material";
import {
  isAlumnOrInstructor,
  propsPost,
  height,
  Column,
} from "../../../app/interface";

export default function TableInstructor(props: any) {
  const renderHeadTable = props.user; //lane 24
  const heigthTable = props.height; //lane 56
  const posts = props.post;

  const columns: readonly Column[] = [
    { id: "name", label: renderHeadTable, minWidth: 30, align: "center" },
    { id: "question", label: "Asunto", minWidth: 150, align: "center" },
    {
      id: "description",
      label: "Descripcion",
      minWidth: 170,
      align: "center",
    },
    {
      id: "tags",
      label: "Tags",
      minWidth: 100,
      align: "center",
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: heigthTable }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ width: "100%" }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ width: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody sx={{ width: "100%" }}>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                {
                  console.log(row);
                }
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${row.question + Math.random()}`}
                    sx={{ maxWidth: "100%" }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "name") {
                        return (
                          <TableCell align={column.align}>
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ flexDirection: "column" }}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src={row.owner.profile_picture}
                              />
                              <Typography variant="subtitle2">
                                {row.owner.user_name}
                              </Typography>
                            </Box>
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            maxWidth: "20vw",
                            minWidth: "100px",
                            maxHeight: "14.5vh",
                          }}
                        >
                          {value}
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
        count={posts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
