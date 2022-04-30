import { styled } from "@mui/system";
import { Paper, TextField } from "@mui/material";
export const Div = styled("div")(`
    width: 100%;
    height:1000px;
    `);

export const TituloForo = styled("span")(`
text-shadow: 4px 4px 4px rgb(255,255,0);
border-bottom:10px solid rgb(255,255,0);
`);

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
`;
export const StyledTextField = styled(TextField)`
  margin: 1em;
  width: 100%;
  text-align: center;
  padding-right: 16px;
`;
