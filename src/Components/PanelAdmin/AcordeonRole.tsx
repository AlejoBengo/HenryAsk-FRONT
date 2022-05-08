import * as React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import { Accordion , AccordionSummary , AccordionDetails , Typography } from '@mui/material';
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
          <Typography>Tabla de roles</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <TablaRoles/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}