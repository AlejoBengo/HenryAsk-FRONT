/*IMPORT DE UTILITIES*/
import React, { useState } from "react";
import { Editor, EditorState, RichUtils, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";
/*IMPORT DE MUI & CSS*/
import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import CodeIcon from "@mui/icons-material/Code";
import {
  Container,
  OptionsContainer,
  EditorContainer,
} from "./StyledComponents";

export default function Draft() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [aligmentOption, setAligmentOption] = useState<any>("left");

  const _onStyleTextClick = (event: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, `${event}`));
  };
  const _onSizeTextClick = (event: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, `${event}`));
  };
  const _onTab = (event: any) => {
    event.preventDefault();
    const space = "  ";
    const currentState = editorState;
    const newState = Modifier.replaceText(
      currentState.getCurrentContent(),
      currentState.getSelection(),
      space
    );
    setEditorState(
      EditorState.push(currentState, newState, "insert-characters")
    );
  };
  const _handleKeyCommand = (command: any, editorState: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  const _onAligmentClick = (event: string) => {
    setAligmentOption(event);
  };

  return (
    <Container>
      <OptionsContainer>
        <ToggleButtonGroup size="small">
          <ToggleButton
            onClick={() => _onSizeTextClick("normal")}
            value="normal"
          >
            <Typography>P</Typography>
          </ToggleButton>
          <ToggleButton
            onClick={() => _onSizeTextClick("header-one")}
            value="h1"
          >
            <Typography>H1</Typography>
          </ToggleButton>
          <ToggleButton
            onClick={() => _onSizeTextClick("header-two")}
            value="h2"
          >
            <Typography>H2</Typography>
          </ToggleButton>
          <ToggleButton
            onClick={() => _onSizeTextClick("header-three")}
            value="h3"
          >
            <Typography>H3</Typography>
          </ToggleButton>
          <ToggleButton
            onClick={() => _onSizeTextClick("header-four")}
            value="h4"
          >
            <Typography>H4</Typography>
          </ToggleButton>
          <ToggleButton
            onClick={() => _onSizeTextClick("header-five")}
            value="h5"
          >
            <Typography>H5</Typography>
          </ToggleButton>
          <ToggleButton
            onClick={() => _onSizeTextClick("header-six")}
            value="h6"
          >
            <Typography>H6</Typography>
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup size="small">
          <ToggleButton onClick={() => _onStyleTextClick("BOLD")} value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => _onStyleTextClick("ITALIC")}
            value="italic"
          >
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => _onStyleTextClick("UNDERLINE")}
            value="underlined"
          >
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => _onStyleTextClick("STRIKETHROUGH")}
            value="strikethrough"
          >
            <FormatStrikethroughIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup size="small">
          <ToggleButton
            onClick={() => _onAligmentClick("left")}
            value="left"
            aria-label="left aligned"
          >
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => _onAligmentClick("center")}
            value="center"
            aria-label="centered"
          >
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => _onAligmentClick("right")}
            value="right"
            aria-label="right aligned"
          >
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => _onAligmentClick("justify")}
            value="justify"
            aria-label="justified"
          >
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup size="small">
          <ToggleButton
            onClick={() => _onSizeTextClick("unordered-list-item")}
            value="list"
          >
            <FormatListBulletedIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => _onSizeTextClick("ordered-list-item")}
            value="oreder-list"
          >
            <FormatListNumberedIcon />
          </ToggleButton>
          <ToggleButton onClick={() => _onStyleTextClick("CODE")} value="CODE">
            <CodeIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </OptionsContainer>

      <EditorContainer>
        <Editor
          onChange={setEditorState}
          editorState={editorState}
          textAlignment={aligmentOption}
          handleKeyCommand={_handleKeyCommand}
          onTab={_onTab}
        />
      </EditorContainer>
    </Container>
  );
}
