import * as React from "react";
import { LinkDom } from "../../Style/StyledComponents";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Avatar, Typography } from "@mui/material";
import { Column } from "../../../app/interface";

export default function TableInstructor(props: any) {
  const renderHeadTable = props.user; //lane 24
  const heigthTable = props.height; //lane 56
  const posts = props.post;

  const columns: readonly Column[] = [
    {
      id: "open",
      label: "Tags",
      minWidth: 90,
      align: "center",
    },
    { id: "name", label: renderHeadTable, maxWidth: "4em", align: "center" },
    { id: "question", label: "Asunto", minWidth: 220, maxWidth:220 , align: "center" },
    {
      id: "description",
      label: "Descripcion",
      minWidth: 320,
      align: "center",
    },
    {
      id: "tags",
      label: "Tags",
      minWidth: 90,
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
            
              {columns.map((column) => {

                  if(column.id==="open"){
                    return(
                      <TableCell
                      key="hola"
                      sx={{ width: "5px" , padding:"0px", margin:"0px"}}
                      >
                      </TableCell>

                    )
                  }

                if(column.id==="name"){
                  return(
                    <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ width: column.maxWidth }}
                    >
                    {column.label}
                    </TableCell>
  
                  )
                }
                
                if(column.id==="question"){

                  return(
                    <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ width: column.minWidth , maxWidth:column.maxWidth}}
                    >
                    {column.label}
                    </TableCell>
  
                  )
                }
                if(column.id==="description"){

                  return(
                    <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ width: column.minWidth , maxWidth:column.maxWidth}}
                    >
                    {column.label}
                    </TableCell>
  
                  )
                }
                if(column.id==="tags"){
                  return(
                    <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ width: column.minWidth , maxWidth:column.maxWidth}}
                    >
                    {column.label}
                    </TableCell>
                  )
                }
              }
               
              )}
            </TableRow>
          </TableHead>
{/* Desde aca empieza el body de la table */}
          <TableBody sx={{ width: "100%" }}>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${row.question + Math.random()}`}
                    sx={{ maxWidth: "100%", height:"5em", maxHeigth:"5em" }}
                  >
                    
                    {columns.map((column) => {
                      const value = row[column.id];
                      
                      if(column.id==="open"){
                        return(
                          <TableCell
                          key="hola"
                          sx={{ width: "5px" , padding:"0px", margin:"0px", backgroundColor:row.open?"rgb(2, 136, 209)":"rgb(56, 142, 60)",}}
                          >
                          </TableCell>
    
                        )
                      }
                      

                      if (column.id === "name") {
                        return (
                          <TableCell align={column.align}>
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{ flexDirection: "column", maxWidth:"200px"}}
                            >
                              <Avatar
                                alt={row.owner.user_name} //if the image can't be loaded then will show the first alt's letter (user's firstname)
                                src={row.owner.profile_picture.length>0? row.owner.profile_picture : row.owner.avatar.length>0? row.owner.avatar : row.owner.profile_picture }
                              />
                              <Typography variant="subtitle2">
                                <LinkDom to={`/Profile/${row.owner._id}`}>{row.owner.user_name}</LinkDom>
                              </Typography>
                            </Box>
                          </TableCell>
                        );
                      }
                      if (column.id === "question") {
                        return (
                          <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            maxWidth: "20vw",
                            minWidth: "100px",
                            maxHeight: "14.5vh",
                            fontWeight:"bold"
                          }}
                        >
                          <LinkDom to={`/Post/${row._id}`}>{value}</LinkDom>
                        </TableCell>
                        );
                      }
                      if (column.id === "description") {
                        let aux = value.split(" ");
                        let aux2 = aux.slice(0,28);
                        let aux3 = aux2.join(" ")
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
                          {aux.length>=28? `${aux3}...`: value}
                        </TableCell>
                        );
                      }
                      if(column.id ==="tags"){
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{
                              maxWidth: "7vw",
                              minWidth: "8em",
                              maxHeight: "14.5vh",
                            }}
                          >
                            <Box
                            display="flex"
                            sx={{flexDirection:"column" , color:"#dba200" , fontWeight:"bold"}}
                            >
                            {value.map((e:any)=> (<span># {e}</span>))}
                            </Box>
                          </TableCell>
                        );
                      }
                      
                    })}
                  </TableRow>
                );
              })}
              {/* ACA TERMINA EL BODY DE LA TABLE */}
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
