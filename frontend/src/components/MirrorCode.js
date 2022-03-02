//Paquetes

import React, { useEffect, useState, useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

function MirrorCode() {
  const [contentMarkdown, setContentMarkdown] = useState(
    "Aqui te vas a reventar la cabeza un rato, :)"
  );

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleSave = () => {
    const content = editorRef.current.getValue();
  };

  return (
    <div>
     
      <Editor
        height="400px"
        width="700px"
        theme="vs-dark"
        default-language="javascript"
        value={contentMarkdown}
        onChange={(value) => setContentMarkdown(value)}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export default MirrorCode;
