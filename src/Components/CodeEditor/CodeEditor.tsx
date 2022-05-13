/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React from "react";
import CodeMirror from "./codemirror-5.65.3/lib/codemirror.js";
/*--------------------------------------------------------*/
import {
  GridContainter,
  CodeArea,
  CodeAreaHeader,
  CodeButton,
} from "../Style/StyledComponents";
import TextareaAutosize from "@mui/material/TextareaAutosize";

interface Props {
  value: string;
}

export const CodeEditor = ({ value }: Props) => {
  // const [input, output] = document.querySelectorAll("codemirror-textarea");
  // const [run, clear] = document.querySelectorAll("button");

  // const editor = CodeMirror.fromTextArea(input,{lineNumbers:true});
  // const shell = CodeMirror.fromTextArea(output,{lineNumbers:false});

  // run.addEventListener("click", ()=>{
  //     const codeToRun = editor.getValue();

  //     try {
  //         shell.replaceRange(`$ `+eval(`${codeToRun}`) + "\n", CodeMirror.Pos(shell.lastLine()) );
  //     } catch (error) {
  //         shell.replaceRange(`$ ` + error + "\n", CodeMirror.Pos(shell.lastLine()) );
  //     }
  // });
  // clear.addEventListener("click", ()=> shell.setValue(""));

  return (
    <>
      <h1>Editor de codigo</h1>
      <GridContainter>
        <CodeArea>
          <CodeAreaHeader>
            <h1>Editor</h1>
            <CodeButton>Run</CodeButton>
          </CodeAreaHeader>
          <TextareaAutosize
            style={{ marginTop: "20px", width: 400, height: 300 }}
            id=""
            placeholder="Tu mensaje"
            name="codemirror-textarea"
          ></TextareaAutosize>
        </CodeArea>

        <CodeArea>
          <CodeAreaHeader>
            <h1>Shell</h1>
            <CodeButton>Clear</CodeButton>
          </CodeAreaHeader>
          <TextareaAutosize
            style={{ marginTop: "20px", width: 400, height: 300 }}
            id=""
            placeholder="Tu mensaje"
            name="codemirror-textarea"
          ></TextareaAutosize>
        </CodeArea>
      </GridContainter>

      {/* <div class="grid-containter">
                <div class="code-area">
                    <div class="code-area-header">
                        <h1>Editor</h1>
                        <button class="button">Run</button>
                    </div>
                    <textarea class="codemirror-textarea"></textarea>
                </div>
                <div class="code-area">
                    <div class="code-area-header">
                        <h1>Shell</h1>
                        <button class="button">Clear</button>
                    </div>
                    <textarea class="codemirror-textarea"></textarea>
                </div>
            </div> */}
    </>
  );
};
