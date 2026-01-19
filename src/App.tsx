import "./App.css";
import { useState, type JSX } from "react";
import InputLine from "./InputLine";
import { useAsciiText, fireFontS } from "react-ascii-text";

export default function App() {
  const asciiTextRef = useAsciiText({
    font: fireFontS,
    isAnimated: false,
    text: "geoorgeq",
  });
  const [lines, setLines] = useState<JSX.Element[]>([
    <pre
      style={{ marginTop: "-35px" }}
      ref={asciiTextRef as React.RefObject<HTMLPreElement>}
      key={0}
    ></pre>,
    <InputLine key={1} onEnter={handleEnter} />,
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
        setLines([
          <pre
            style={{ marginTop: "-35px" }}
            ref={asciiTextRef as React.RefObject<HTMLPreElement>}
            key={0}
          ></pre>,
          <InputLine onEnter={handleEnter} key={1} />,
        ]);
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
            <div className="terminal-input" key={line.key}>
              <span>
                guest@geoorgeq.computer
                <span style={{ color: "var(--success)" }}>:~$</span>
              </span>
              <div>{value}</div>
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
