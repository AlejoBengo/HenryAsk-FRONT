import * as React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import { Accordion , AccordionSummary , AccordionDetails , Typography , Alert} from '@mui/material';
import { Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/*-----------IMPORT Components-----------*/
import TablaRoles from './TablaRoles';

export default function AcordeonRole() {
  return (
    <div style={{width:"100%"}}>
      <Accordion sx={{width:"100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tabla de roles y Estados</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <TablaRoles/>
        </AccordionDetails>
        <Grid container spacing={2} sx={{margin:"20px 0px 20px 0px"}}>
          <Grid item xs={3.85}><Alert severity="success">Resuelto</Alert></Grid>
          <Grid item xs={3.85}><Alert severity='error'>Rechazado</Alert></Grid>
          <Grid item xs={3.85}><Alert severity='warning'>Pendiente</Alert></Grid>
        </Grid>
      </Accordion>
    </div>
  );
}