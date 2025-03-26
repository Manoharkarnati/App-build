import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

const CodeEditor = () => {
  return (
    <Sandpack
      template="react"
      theme="dark"
      options={{
        showNavigator: true,
        showLineNumbers: true,
        editorHeight: 400,
      }}
    />
  );
};

export default CodeEditor;
