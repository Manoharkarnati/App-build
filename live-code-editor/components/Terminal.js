import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const xterm = useRef(null);
  const fitAddon = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      xterm.current = new Terminal({
        rows: 10,
        cols: 80,
        cursorBlink: true,
      });

      fitAddon.current = new FitAddon();
      xterm.current.loadAddon(fitAddon.current);

      xterm.current.open(terminalRef.current);
      fitAddon.current.fit();

      xterm.current.writeln("Welcome to the Live Code Editor Terminal!");
      xterm.current.writeln("Use 'npm install <package>' to install libraries.");

      setIsMounted(true);
    }
  }, [isMounted]);

  return (
    <div
      ref={terminalRef}
      style={{
        backgroundColor: "#000",
        padding: "10px",
        borderRadius: "5px",
        minHeight: "200px",
      }}
    />
  );
};

export default TerminalComponent;
