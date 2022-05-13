import * as React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import {Table , TableBody , TableCell , TableContainer, TableHead , TableRow, Paper} from '@mui/material'

function createData(
  numberRol: number,
  role: string,
) {
  return { numberRol , role };
}

const rows = [
  createData(0 , "Usuario logeado , no inscripto en Prep Course"),
  createData(1, "Cursando Prep Course"),
  createData(2, "Estudiante de Henry"),
  createData(3, 'TA'),
  createData(4, 'Instructor'),
  createData(5, 'Administrador'),
  createData(6, 'Henry Mentor'),
  createData(7, 'Henry Hero'),
  createData(8, 'Staff de Henry'),
  createData(9, 'Graduado'),
];

export default function TablaRoles() {
  return (
    <TableContainer>
      <Table sx={{ minWidth:"100%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold", fontSize:"1.1em"}}>Rol</TableCell>
            <TableCell  sx={{fontWeight:"bold", fontSize:"1.1em"}} align="right">Condición</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.numberRol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.numberRol}
              </TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}