import "./App.css";
import { useEffect, useRef, useState, type JSX } from "react";
import InputLine from "./InputLine";
import { useAsciiText, fireFontS } from "react-ascii-text";

export default function App() {
  const activeInputRef = useRef<HTMLInputElement | null>(null);
  const [theme, setTheme] = useState("dark");
  const themes = ["dark", "light", "cyber", "dracula"];
  const inputs :string[] = [];

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
    <InputLine key={1} onEnter={handleEnter} inputRef={activeInputRef}  inputs = {inputs}/>,
  ]);

  
  function handleEnter(value: string) {
    // eslint-disable-next-line react-hooks/immutability
    inputs.push(value);
    const output: JSX.Element[] = [];
    const parts = value.toLowerCase().split(" ");
    const command = parts[0];
    const arg = parts[1];

    switch (command) {
      case "ls":
        output.push(<div key="ls-output">List of projects</div>);
        break;
      case "help":
        output.push(
          <div className="output-block" key="help-output">
            <div>Use the following commands</div>
            <div>ls - to list all the personal projects</div>
            <div>about - learn something about me</div>
            <div>theme - change the theme of the terminal</div>
            <div>theme list - list of available themes</div>
          </div>,
        );
        break;
      case "about":
        output.push(
          <div className="output-block about" key="about-output">
            <div>
              I am an eager and motivated beginner programmer with a strong
            </div>
            <div>
              passion for learning and a commitment to honing my coding skills.
            </div>
            <div>
              My goal is to build a solid foundation in software development and
            </div>
            <div>
              continuously improve my abilities through hands-on experience and
            </div>
            <div>collaboration with others in the programming community.</div>
          </div>,
        );
        break;
      case "clear":
        setLines([
          <pre
            style={{ marginTop: "-35px" }}
            ref={asciiTextRef as React.RefObject<HTMLPreElement>}
            key={0}
          ></pre>,
          <InputLine onEnter={handleEnter} key={1} inputRef={activeInputRef}  inputs = {inputs}/>,
        ]);
        return;
      case "theme": {
        if (arg === "list") {
          output.push(<div className="output-block" key="theme-list-header">List of themes:</div>);
          for (let i = 0; i <= themes.length; i++) {
            output.push(
              <div
                className="output-block capitalized-text"
                key={`theme-${i}`}
              >
                {themes[i]}
              </div>,
            );
          }
        } else if (themes.indexOf(arg) === -1 && arg !== undefined && arg !== "") {
          output.push(
            <div key="theme-not-found">
              Theme not found. Use{" "}
              <span style={{ color: "var(--accent)" }}>theme list </span>
              to see available themes.
            </div>,
          );
        } else if (arg) {
          setTheme(arg);
          output.push(
            <div key="theme-switched">Theme switched to <span className="capitalized-text">{arg}</span></div>,
          );
        } else {
          let currentTheme = "";
          setTheme((prevTheme) => {
            const currentIndex = themes.indexOf(prevTheme);
            const nextIndex = (currentIndex + 1) % themes.length;
            currentTheme = themes[nextIndex];
            return themes[nextIndex];
          });
          output.push(
            <div key="theme-switched-auto">
              Theme switched to <span className="capitalized-text">{currentTheme}</span>
            </div>,
          );
        }
        break;
      }
      default:
        output.push(
          <div key="command-not-found">
            Command not found. Type{" "}
            <span style={{ color: "var(--accent)" }}>help</span> to find all
            available commands.
          </div>,
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
              <div style={{ marginLeft: "var(--p-3)" }}>{value}</div>
            </div>
          );
        }
        return line;
      }),
      <div key={prev.length}>{output}</div>,
      <InputLine
        key={prev.length + 1}
        onEnter={handleEnter}
        inputRef={activeInputRef}
        inputs={inputs}
      />,
    ]);
  }

  useEffect(() => {
    activeInputRef.current?.focus();
  }, [lines]);

  return (
    <div className={`app theme-${theme}`}>
      <div className="terminal" onClick={() => activeInputRef.current?.focus()}>
        {lines}
      </div>
    </div>
  );
}
