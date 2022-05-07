import React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import {Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow , TablePagination} from '@mui/material'

interface Column {
  id: 'name' | 'post' | 'description' ;
  label: string;
  minWidth?: number;
  align?: 'center' | 'left';
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nombre de Usuario', minWidth: 170, align:'left' },
  { id: 'post', label: 'Post reportado', minWidth: 100, align:'center' },
  {
    id: 'description',
    label: 'Descripcion del report',
    minWidth: 170,
    align: 'center',
  },
];

interface Data {
  name: string;
  post: string;
  description: string;
}

function createData(
  name: string,
  post: string,
  description: string,

): Data {
  return { name, post, description };
}

const rows = [
  createData('India', "true", "1324171354"),
  createData('China', "true", "1403500365"),
  createData('Italy', "true", "60483973"),
  createData('United States', "true", "327167434"),
  createData('Canada', "true", "37602103"),
  createData('Australia', "true", "25475400"),
  createData('Germany', "true", "83019200"),
  createData('Ireland', "true", "4857000"),
  createData('Mexico', "true", "126577691"),
  createData('Japan', "true", "126317000"),
  createData('France', "true", "67022000"),
  createData('United Kingdom', "true", "67545757"),
  createData('Russia', "true", "146793744"),
  createData('Nigeria', "true", "200962417"),
  createData('Brazil', "true", "210147125"),
];

export default function PanelReport() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 1540}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
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