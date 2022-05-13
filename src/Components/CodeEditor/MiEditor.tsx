import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import {
  EditorCode,
  EditorTest,
  Title,
  Executer,
  EditorsContainer,
} from "./MyStyledEditor";

interface Data {
  coding: string;
  testing: string;
}

export default function MiEditor({ coding, testing }: Data) {
  const [code, setCode] = useState("");
  const [test, setTest] = useState("");

  useEffect(() => {
    if (coding.length > 0) {
      setCode(coding);
    }
    if (testing.length > 0) {
      setTest(testing);
    }
  }, [coding, testing]);

  return (
    <EditorsContainer>
      <EditorCode>
        <Title>SOLUCIÓN</Title>
        <CodeMirror
          value={code}
          theme={oneDark}
          height="30vh"
          placeholder="Tu código..."
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            setCode(value);
          }}
        />
      </EditorCode>
      <EditorTest>
        <Title>TESTS</Title>
        <CodeMirror
          value={test}
          theme={oneDark}
          height="19vh"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            setTest(value);
          }}
        />
        <Executer variant="contained" size="small">
          Ejecutar!
        </Executer>
      </EditorTest>
    </EditorsContainer>
  );
}
