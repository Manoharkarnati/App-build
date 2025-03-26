import CodeEditor from "../components/CodeEditor";
import TerminalComponent from "../components/Terminal";

export default function Home() {
  return (
    <div>
      <h1>Live React Code Editor</h1>
      <CodeEditor />
      <h2>Terminal</h2>
      <TerminalComponent />
    </div>
  );
}
