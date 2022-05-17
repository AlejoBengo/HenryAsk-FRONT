import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import s from "./scrollBar.module.css";
import {
  EditorCode,
  EditorTest,
  Title,
  Executer,
  EditorsContainer,
} from "./MyStyledEditor";
import { testExercice } from "../../app/Utils/testing";

interface Data {
  coding: string;
  testing: string;
}

export default function MiEditor({ coding, testing }: Data) {
  const [code, setCode] = useState<string>("");
  const [test, setTest] = useState<string>("");

  useEffect(() => {
    setCode(coding);
    setTest(testing);
  }, [coding, testing]);

  const handleExecturor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const data = {
      code: code,
      test: test,
    };
    testExercice(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <EditorsContainer>
      <EditorCode className={s.editor}>
        <Title>SOLUCIÓN</Title>
        <CodeMirror
          value={code}
          theme={oneDark}
          height="38vh"
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
          placeholder="Los tests..."
          height="27vh"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            setTest(value);
          }}
        />
        <Executer
          style={{ marginBottom: "0.4vh" }}
          variant="contained"
          size="small"
          onClick={handleExecturor}
        >
          Ejecutar!
        </Executer>
      </EditorTest>
    </EditorsContainer>
  );
}
