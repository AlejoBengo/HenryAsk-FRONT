/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import * as React from "react";
import { isAlumnOrInstructor } from "../../../app/interface";
/*-----------IMPORT MUI & CSS-----------*/
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Avatar, Typography } from "@mui/material";
/*--------------------------------------------------------*/

interface Column {
  id: "name" | "asunto" | "description" | "tags";
  label: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}
interface Data {
  name: string;
  asunto: string;
  description: string;
  tags: Array<string>;
}

function createData(
  name: string,
  asunto: string,
  description: string,
  tags: Array<string>
): Data {
  return { name, asunto, description, tags };
}

const rows = [
  createData(
    "India",
    "Problema bucle while ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", " ", "recursion", " ", "ramas"]
  ),
  createData(
    "China",
    "Error ejercicio arboles m1",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Italy",
    "Tengo problemas con react, hooks",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "United States",
    "Como forkear repositorio",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Canada",
    "Como usar las ramas de GIT",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Australia",
    "Necesito ayuda, no me funcionan tests",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Germany",
    "Cuando es el checkpoint",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Ireland",
    "Cuanto dura el checkpoint",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Mexico",
    "Breve explicacion de la cursada",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Japan",
    "No me funciona la ruta GET ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "France",
    "Como accedo a los videos de mi cohorte",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "United Kingdom",
    "Como puedo utilizar slack",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Russia",
    "Que temas se ven en las TIPS",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Nigeria",
    "Que significa redux",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
  createData(
    "Brazil",
    "Ejercicio react redux",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repudiandae tenetur, maxime nihil, consectetur excepturi vero eos provident molestiae eveniet iste ratione cumque itaque magnam? Ex quis nihil accusamus",
    ["m1", "recursion"]
  ),
];

export default function TableInstructor(props: isAlumnOrInstructor) {
  const renderHeadTable = props.user; //lane 56
  const heigthTable = props.height; //lane 88

  const columns: readonly Column[] = [
    { id: "name", label: renderHeadTable, minWidth: 30, align: "center" },
    { id: "asunto", label: "Asunto", minWidth: 150, align: "center" },
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.asunto}
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
                                src="/static/images/avatar/2.jpg"
                              />
                              <Typography variant="subtitle2">
                                {row[column.id]}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
