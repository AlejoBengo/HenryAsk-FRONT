import React from 'react';
/*-----------IMPORT Utilities-----------*/
import { useEffect } from 'react';
import { fetchAllUsers } from '../../app/Utils/allUsers';
import { useAppDispatch , useAppSelector } from '../../app/hooks';
import { editIsBanned } from '../../app/Utils/editUser';
import { deleteUserPanel } from '../../app/Utils/editUser';
import { User } from '../../app/interface';
/*-----------IMPORT Components-----------*/
import SelectRole from './SelectRole';
import DialogSuccess from '../Dialog/DialogSuccess';
/*-----------IMPORT MUI & CSS-----------*/
import {Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow , TablePagination , Box , IconButton} from '@mui/material'
import {Button} from '@mui/material'
import DialogDeleteUser from './DialogDeleteUser';
import CloseIcon from '@mui/icons-material/Close';


interface Column {
  id: 'user_name' | 'isBanned' | 'role' ;
  label: string;
  minWidth?: number;
  align?: 'center' | 'left';
}

const columns:Array<Column> = [
  { id: 'user_name', label: 'Nombre de Usuario', minWidth: 170, align:'left' },
  { id: 'isBanned', label: 'Puede Postear', minWidth: 100, align:'center' },
  {
    id: 'role',
    label: 'Rol',
    minWidth: 170,
    align: 'center',
  },
];

export default function PanelTable(props:any) {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state)=> state.allUser.allUsers)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const userByUserName = useAppSelector((state) => state.searchUserName.searchUserName);
  const [openDialog, setOpenDialog] = React.useState(false); // dialog
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);
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
//BANEOS 
  const handleDesban = (info:any)=>{
    let aux = {...info , isBanned:false};
    editIsBanned(aux)
    .then(()=> window.location.reload())
    .catch((error)=> console.log(error));
  }
  
  const handleBan = (info:any)=>{
    console.log(info)
    let aux = {...info , isBanned:true};
    editIsBanned(aux)
    .then(()=> window.location.reload())
    .catch((error)=> console.log(error));
  }
// ======>

// HANDLE DELETE USER
let [infoDelete , setInfoDelete] = React.useState({})
const handleCloseModalDelete = () => {
  setOpenDialogDelete(false);
  setInfoDelete({});
};
const handleOpenModalDelete = (info:any) => {
  setOpenDialogDelete(true);
  setInfoDelete(info);
}
const borrarUsuario = (id:string) => {
  deleteUserPanel(id)
  .then(()=>window.location.reload())
  .catch((error)=> console.log(error))
}
//==============//
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <DialogDeleteUser handleCloseModalDelete={handleCloseModalDelete} openDialogDelete={openDialogDelete} infoDelete={infoDelete} borrarUsuario={borrarUsuario}/>
      <TableContainer sx={{ maxHeight: 1540 , minHeight:1540}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , fontWeight:"bold"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { userByUserName.user_name? 
            
            [userByUserName].map((row) => {
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
            })
            
            :users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.first_name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      let usuario = row
                      if(column.id === "role"){
                          return (
                          <TableCell key={column.id} align={column.align} sx={{display:"flex", alignItems:"center"}}>
                                <SelectRole valor={value} usuario={usuario} handleClickOpen={handleClickOpen}/>
                                <IconButton onClick={()=>handleOpenModalDelete(row)} aria-label="delete" color="error">
                                  <CloseIcon />
                                </IconButton> 
                          </TableCell>
                          )
                      }
                      if(column.id==="isBanned"){
                        if(row.isBanned){
                          return(
                          <TableCell key={column.id} align={column.align}>
                              <Button onClick={()=> handleDesban(row)} color="success">Pulsa para Desbanear</Button>
                        </TableCell>
                          )
                        }else{
                          return(
                            <TableCell key={column.id} align={column.align}>
                            <Button onClick={()=> handleBan(row)} color="error">Pulsa para Banear</Button>
                          </TableCell>
                          )
                        }
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
        count={userByUserName.user_name? [userByUserName].length :users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}