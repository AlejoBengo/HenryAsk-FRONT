import React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import {Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow , TablePagination } from '@mui/material';
import Typography from '@mui/material/Typography';
import {LinkDom} from '../Style/StyledComponents';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';

interface Column {
  id: 'name' | 'post' | 'description' | 'status' ;
  label: string;
  minWidth?: number;
  align?: 'center' | 'left';
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Usuario', minWidth: 120, align:'center' },
  { id: 'post', label: 'Post reportado', minWidth: 100, align:'center' },
  {
    id: 'description',
    label: 'Descripcion del report',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Estado',
    minWidth: 120,
    align: 'center',
  },
];

/* interface Data {
  name: string;
  post: string;
  description: string;
  status:string;
}

function createData(
  name: string,
  post: string,
  description: string,
  status:string
): Data {
  return { name, post, description, status};
} */

/* const rows = [
  createData('India', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('China', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Italy', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('United', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Canada', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Australia', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Germany', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Ireland', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Mexico', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Japan', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('France', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('United', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Russia', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Nigeria', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
  createData('Brazil', "true", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet magni mollitia repellat quibusdam ab voluptatum eius blanditiis veritatis delectus aut. Dolores veritatis asperiores mollitia fuga perferendis distinctio pariatur voluptatem explicabo.", "Eliminar"),
]; */

export default function PanelReport(props:any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {rows} = props;
  console.log(rows)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 1540 , minHeight:1540}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , fontWeight:"bold",}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if(column.id === "name"){
                        return (
                          <TableCell align={column.align}>
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ flexDirection: "column"}}
                            >
                              <Avatar
                                alt={row.owner.user_name}
                                src="https://thumbs.dreamstime.com/b/hombre-de-avatar-en-gris-hombres-abstractos-del-la-muestra-perfil-masculino-icono-s%C3%ADmbolo-blanco-fondo-c%C3%ADrculo-ilustraci%C3%B3n-144168114.jpg"
                              />
                              <Typography variant="subtitle2" sx={{color:"secondary.main",}}>
                                <LinkDom to={`#`} color="secondary.main" >{row.owner.user_name}</LinkDom>
                              </Typography>
                            </Box>
                          </TableCell>
                        )
                      }
                      if(column.id === "post"){
                        return (
                          <TableCell align={column.align}>
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ flexDirection: "column"}}
                            >
                              <Avatar
                                alt={row.owner.user_name}
                                src="https://thumbs.dreamstime.com/b/hombre-de-avatar-en-gris-hombres-abstractos-del-la-muestra-perfil-masculino-icono-s%C3%ADmbolo-blanco-fondo-c%C3%ADrculo-ilustraci%C3%B3n-144168114.jpg"
                              />
                              <Typography variant="subtitle2" sx={{color:"secondary.main",}}>
                                <LinkDom to={`#`} color="secondary.main" >{row.owner.user_name}</LinkDom>
                              </Typography>
                            </Box>
                          </TableCell>
                        )
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
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