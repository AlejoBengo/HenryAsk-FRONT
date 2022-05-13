/*-----------IMPORT UTILITIES---------------*/
import * as React from 'react';
import { useState } from "react";
/*-----------IMPORT TS---------------------*/
import { ExerciseInterface } from "../../../../app/Interfaces/interfaceExercise";
import { ColumnTableExercise } from "../../../../app/interface"
/*-----------IMPORT REDUCER---------------*/

/*-----------IMPORT COMPONENTS-----------*/

/*-----------IMPORT MUI & CSS-----------*/
import { Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableHead,TableRow, Container, Typography, Avatar } from '@mui/material';
import { LinkDom, TituloForo } from '../../../Style/StyledComponents';
import { Box } from '@mui/system';
import { styled } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
/*-------------------------------------*/

export const StyledTypography = styled(Typography)(({theme}) =>
  `
  color:${theme.palette.getContrastText(theme.palette.background.default)};
  `
);

const TableExercise = (props:any) => {
  const exercisesToRender:Array<ExerciseInterface> = props.exercisesToRender;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const columns: readonly ColumnTableExercise[] = [
    { id: 'owner',
      label: 'Creador',
      align: 'center',
      minWidth: 100 
    },
    { id: 'title',
      label: 'Título',
      align: 'center',
      minWidth: 200 
    },
    {
      id: 'description',
      label: 'Descripción',
      minWidth: 250,
      align: 'center',
      format: (value: string) => value.split(" ").length>28
        ?`${value.split(" ").slice(0,28).join(" ")}...`
        : value,
    },
    {
      id: 'code',
      label: 'Código',
      minWidth: 50,
      align: 'center',
      format: (value)=> value.length
        ? <CheckIcon data-testid="CheckIcon" fontSize="large" color="success"></CheckIcon>
        : <CloseIcon data-testid="CloseIcon" fontSize="large" color="error"></CloseIcon> 
    },
    {
      id: 'test',
      label: 'Test',
      minWidth: 50,
      align: 'center',
      format: (value)=> value.length
        ? <CheckIcon data-testid="CheckIcon" fontSize="large" color="success"></CheckIcon>
        : <CloseIcon data-testid="CloseIcon" fontSize="large" color="error"></CloseIcon> 
    },
    {
      id: 'tags',
      label: 'Tags',
      minWidth: 100,
      align: 'center',
      format: ( value ) => `# ${value.join(" ")}`
    },
  ];

  return (
    <Container>
      <StyledTypography
      variant="h3"
      textAlign="center"
      padding="3rem 0rem 2rem 0rem">
          🚀 Desarrolla tu potencial con <TituloForo>Ejercicios</TituloForo>
      </StyledTypography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 1040 }}>
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
            {exercisesToRender
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index:number) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={`${row.owner}${index}`}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "owner") {
                        return (
                          <TableCell align={column.align}>
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ 
                                flexDirection: "column", 
                                maxWidth:"200px"}}
                            >
                              <Avatar
                                alt={row.owner.user_name} //if the image can't be loaded then will show the first alt's letter (user's firstname)
                                src={ row.owner.profile_picture ? row.owner.profile_picture : row.owner.avatar }
                              />
                              <Typography 
                                variant="subtitle2"
                                fontWeight="bold"
                              >
                                <LinkDom to={`/Profile/${row.owner._id}`}>{row.owner.user_name}</LinkDom>
                              </Typography>
                            </Box>
                          </TableCell>
                        );
                      } else if (column.id === "title"){
                        return(
                          <TableCell
                            key={`${column.id}${Math.random()}`}
                            align={column.align}
                            sx={{
                              maxWidth: "20vw",
                              minWidth: "100px",
                              maxHeight: "14.5vh",
                              fontWeight:"bold"
                            }}
                          >
                            <LinkDom
                              to={`/Exercise/${row._id}`}
                            >
                            {typeof value === "string" && value}
                            </LinkDom>
                          </TableCell>
                        )
                      } else if ( column.id === "tags"){
                        return(
                        <TableCell
                          align={column.align}
                          sx={{
                            fontWeight:"bold",
                            color:"primary.dark"
                          }}
                        >
                          {column.format && column.format(value)}
                        </TableCell>
                      )}
                      return (
                        <TableCell 
                          key={column.id} 
                          align={column.align}
                        >
                          {column.format && ( typeof value === 'string' || typeof value === "object")
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
        count={exercisesToRender?.length ? exercisesToRender.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
</Container>
);
};

export default TableExercise;
