import React from 'react';
/*-----------IMPORT Utilities-----------*/
import { useEffect } from 'react';
import { fetchAllUsers } from '../../app/Utils/allUsers';
import { useAppDispatch , useAppSelector } from '../../app/hooks';
import { User } from '../../app/interface';
/*-----------IMPORT Components-----------*/
import SelectRole from './SelectRole';
import DialogSuccess from '../Dialog/DialogSuccess';
/*-----------IMPORT MUI & CSS-----------*/
import {Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow , TablePagination , Box} from '@mui/material'

interface Column {
  id: 'user_name' | 'first_name' | 'role' ;
  label: string;
  minWidth?: number;
  align?: 'center' | 'left';
}

const columns:Array<Column> = [
  { id: 'user_name', label: 'Nombre de Usuario', minWidth: 170, align:'left' },
  { id: 'first_name', label: 'Puede Postear', minWidth: 100, align:'center' },
  {
    id: 'role',
    label: 'Rol',
    minWidth: 170,
    align: 'center',
  },
];

/* interface Data {
  name: string;
  puedePostear: string;
  role: number;
}

function createData(
  name: string,
  puedePostear: string,
  role: number,

): Data {
  return { name, puedePostear, role };
}

const rows = [
  createData('India', "true", 1324171354),
  createData('China', "true", 1403500365),
  createData('Italy', "true", 60483973),
  createData('United States', "true", 327167434),
  createData('Canada', "true", 37602103),
  createData('Australia', "true", 25475400),
  createData('Germany', "true", 83019200),
  createData('Ireland', "true", 4857000),
  createData('Mexico', "true", 126577691),
  createData('Japan', "true", 126317000),
  createData('France', "true", 67022000),
  createData('United Kingdom', "true", 67545757),
  createData('Russia', "true", 146793744),
  createData('Nigeria', "true", 200962417),
  createData('Brazil', "true", 210147125),
]; */

export default function PanelTable(props:any) {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state)=> state.allUser.allUsers)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const [openDialog, setOpenDialog] = React.useState(false); // dialog

  useEffect(()=>{
    dispatch(fetchAllUsers())
  },[])
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // dialog
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
//---------------
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 1540 }}>
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
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.first_name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      let usuario = row
                      if(column.id === "role"){
                          return (
                          <TableCell key={column.id} align={column.align}>
                                <SelectRole valor={value} usuario={usuario} handleClickOpen={handleClickOpen}/>
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
      <DialogSuccess handleClose={handleClose} openDialog={openDialog} title1="Rol cambiado con exito!" subtitle1="puedes volver a cambiar el rol del usuario tantas veces que quieras!" buttonText="Aceptar"/>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}