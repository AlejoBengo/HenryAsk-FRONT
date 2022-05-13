/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React from "react";
/*--------------------------------------------------------*/
import {
  GridContainter,
  CodeArea,
  CodeAreaHeader,
  CodeButton,
} from "../Style/StyledComponents";

import { Box } from "@mui/material";

interface Props {
  value: string;
}

export const ExeCodeEditor = ({ value }: Props) => {
  return (
    <Box>
      <h1>Editor de codigo</h1>
      <GridContainter>
        <CodeArea>
          <CodeAreaHeader>
            <h1>Editor</h1>
            <CodeButton>Run</CodeButton>
          </CodeAreaHeader>
          <textarea className="codemirror-textarea"></textarea>
        </CodeArea>

        <CodeArea>
          <CodeAreaHeader>
            <h1>Shell</h1>
            <CodeButton>Clear</CodeButton>
          </CodeAreaHeader>
          <textarea className="codemirror-textarea"></textarea>
        </CodeArea>
      </GridContainter>
    </Box>
  );
};
