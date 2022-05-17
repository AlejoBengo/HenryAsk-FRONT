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

interface Data {
  coding: string;
  testing: string;
  setter: any;
  setter2: any;
}

const que = "function () {}";
const hola = `${que}`;
console.log(hola);

export default function MiEditor({ coding, testing, setter, setter2 }: Data) {
  const [code, setCode] = useState<string>("");
  const [test, setTest] = useState<string>("");

  useEffect(() => {
    setCode(coding);
    setTest(testing);
  }, [coding, testing]);

  const handleExecturor = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (
      code === "function BinarioADecimal(num) {}" ||
      code === "function clavesUnicas(obj1, obj2) {}" ||
      code === "function mayorMenosMenor(arr) {}" ||
      code === "function sumarLikesDeUsuario(usuario) {}" ||
      code === "function promedioResultadosTest(resultadosTest) {}"
    ) {
      setter(true);
    } else {
      setter2(true);
    }
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
