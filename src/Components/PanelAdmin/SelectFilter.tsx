import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectFilter(props:any) {
  let {filter,setFilter,reports} = props;

  const handleChange = (event: SelectChangeEvent) => {
    if(event.target.value === 'PENDING'){
        setFilter(filter = reports.filter((el:any)=>el.status ==='PENDING'))
    }
    if(event.target.value === 'FULFILLED'){
        setFilter(filter = reports.filter((el:any)=>el.status ==='FULFILLED'))
    }
    if(event.target.value === 'REJECTED'){
        setFilter(filter = reports.filter((el:any)=>el.status ==='REJECTED'))
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small">Filtro</InputLabel>
      <Select
        labelId="demo-select-medium"
        id="demo-select-small"
        value={filter[0]?.status}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value="PENDING">Pendiente</MenuItem>
        <MenuItem value="FULFILLED">Resuelto</MenuItem>
        <MenuItem value="REJECTED">Rechazado</MenuItem>
      </Select>
    </FormControl>
  );
}