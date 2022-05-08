/*-----------IMPORT UTILITIES---------------*/
import * as React from 'react';
/*-----------IMPORT TS---------------------*/
import { ColumnTableTheoric, Theoric } from '../../../../app/interface';
/*-----------IMPORT REDUCER---------------*/

/*-----------IMPORT COMPONENTS-----------*/

/*-----------IMPORT MUI & CSS-----------*/
import { Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, Container, Typography, Box, Avatar } from '@mui/material';
import { LinkDom, TituloForo } from '../../../Style/StyledComponents';
/*-------------------------------------*/

const TableTheoric = (props:any) => {
  const theoricsToRender:Array<Theoric> = props.theoricsToRender;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns: readonly ColumnTableTheoric[] = [
    { 
      id: 'owner', 
      label: 'Creador', 
      minWidth: 170 ,
    },
    { 
      id: 'title', 
      label: 'Título', minWidth: 100 
    },
    {
      id: 'content',
      label: 'Contenido',
      minWidth: 170,
      align: 'center',
      format: (value: string) => value.split(" ").length > 28
        ?`${value.split(" ").slice(0,28).join(" ")}...`
        : value,
    },
    {
      id: 'author',
      label: 'Autor',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'images',
      label: 'Imágenes',
      minWidth: 170,
      align: 'center',
      format: (value: Array<string>) => value.length? "✔" : "❌",
    },
    {
      id: 'comments',
      label: 'Comentarios',
      minWidth: 170,
      align: 'center',
      format: (value: Array<string>) => value.length? "✔" : "❌",
    },
  ];

  return (
    <Container>
      <Typography
      variant="h3"
      textAlign="center"
      margin="4rem 0rem 2rem 0rem">
          🧠 Aumenta tus conocimientos con <TituloForo>Posteos Teóricos</TituloForo>
      </Typography>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
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
          {theoricsToRender
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index:number) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} 
                  key={`${row.owner}${index}`}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === "owner") {
                      return (
                        <TableCell align={column.align}>
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{ flexDirection: "column", maxWidth:"200px"}}
                          >
                            <Avatar
                              alt={row.owner.user_name} //if the image can't be loaded then will show the first alt's letter (user's firstname)
                              src={row.owner.profile_picture ? row.owner.profile_picture : row.owner.avatar }
                            />
                            <Typography variant="subtitle2">
                              <LinkDom to={`/Profile/${row.owner?._id}`}>{row.owner?.user_name}</LinkDom>
                            </Typography>
                          </Box>
                        </TableCell>
                      );
                    } else if (column.id === "title"){
                      return(
                        <LinkDom to={`/Theoric/${row._id}`}>
                          { value }
                        </LinkDom>
                      )
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && (typeof value === 'object' 
                          || typeof value === 'string')
                          ? column.format(value)
                          : value}
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
      count={theoricsToRender?.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
</Container>
);
};

export default TableTheoric;
