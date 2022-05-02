/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React from "react";
/*-----------IMPORT MUI & CSS-----------*/
import { Grid, ToggleButtonGroup, ToggleButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import CodeIcon from "@mui/icons-material/Code";
/*--------------------------------------------------------*/
interface Props {
  value: string;
}
export const TextEditor = ({ value }: Props) => {
  const [format, setFormat] = React.useState<Array<string>>([]);
  const handleFormatChange = (
    event: React.ChangeEvent<{}>,
    newFormat: Array<string>
  ) => {
    setFormat(newFormat);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ToggleButtonGroup
            value={format}
            color="secondary"
            onChange={handleFormatChange}
          >
            <ToggleButton value="bold" aria-label="Bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="Italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="code" aria-label="Code">
              <CodeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </>
  );
};
