import "./App.css";
import { useState, type JSX } from "react";
import InputLine from "./InputLine";

export default function App() {
  const [lines, setLines] = useState<JSX.Element[]>([
    <InputLine key={0} onEnter={handleEnter} />,
  ]);

  // handler pentru Enter
  function handleEnter(value: string) {
    let output: JSX.Element;

    switch (value) {
      case "ls":
        output = <div>List of projects</div>;
        break;
      case "help":
        output = (
          <div className="output-block">
            <div>Use the following commands</div>
            <div>ls - to list all the personal projects</div>
            <div>about - learn something about me</div>
          </div>
        );
        break;
      case "clear":
        setLines([<InputLine key={0} onEnter={handleEnter} />]);
        return;
      default:
        output = (
          <div>
            Command not found. Type{" "}
            <span style={{ color: "var(--accent)" }}>help</span> to find all
            available commands.
          </div>
        );
    }

    setLines((prev) => [
      ...prev.map((line) => {
        if (line.type === InputLine) {
          return (
            <div className="terminal-input">
              <span>
                guest@geoorgeq.computer
                <span style={{ color: "var(--success)" }}>:~$</span>
              </span>
              <div key={line.key}>{value}</div>
            </div>
          );
        }
        return line;
      }),
      <div key={prev.length}>{output}</div>,
      <InputLine key={prev.length + 1} onEnter={handleEnter} />,
    ]);
  }

  return (
    <div className="app">
      <div className="terminal">{lines}</div>
    </div>
  );
}
