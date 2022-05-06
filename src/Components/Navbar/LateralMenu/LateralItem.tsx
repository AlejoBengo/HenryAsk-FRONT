import React from "react";
import { ListItem , ListItemIcon, ListItemText } from "@mui/material";


export default function LateralItem (props:any){
    const {text, icon} = props
    return (
        <ListItem button key={text}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
        </ListItem>
    )
}