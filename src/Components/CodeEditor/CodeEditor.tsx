/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React from "react";
/*--------------------------------------------------------*/
import { GridContainter, CodeArea, CodeAreaHeader, CodeButton } from "../Style/StyledComponents";

interface Props {
    value: string;
}

export const CodeEditor = ({ value }: Props) => {
    
    return (
        <>
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
        </>
    )
}