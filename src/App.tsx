import "./App.css";
import { useEffect, useRef, useState, type JSX } from "react";
import InputLine from "./InputLine";
import { useAsciiText, fireFontS } from "react-ascii-text";

export default function App() {
  const activeInputRef = useRef<HTMLInputElement | null>(null);
  const [theme, setTheme] = useState("dark");
  const themes = ["dark", "light", "cyber", "dracula"];
  const inputs :string[] = [];
  const keyRef = useRef(0);

  const asciiTextRef = useAsciiText({
    font: fireFontS,
    isAnimated: false,
    text: "geoorgeq",
  });
  const [lines, setLines] = useState<JSX.Element[]>([
    <pre
      style={{ marginTop: "-35px" }}
      ref={asciiTextRef as React.RefObject<HTMLPreElement>}
      key="ascii-header"
    ></pre>,
    <InputLine key={`input-line-${keyRef.current}`} onEnter={handleEnter} inputRef={activeInputRef}  inputs = {inputs}/>,
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
        output.push(<div key="ls-output">
          <span className="output-block">List of projects:</span>
           <span className="output-block">Social Media App - <a target="_blank" className="accent" href="https://github.com/geoorgeqq/Social-Media-App">https://github.com/geoorgeqq/Social-Media-App</a> <div className="icons"><img src="./angular-icon.svg" alt="angular" /><img src="./spring-icon.svg" alt="java" /></div></span>
            <span className="output-block">Terminal Portofolio - <a target="_blank" className="accent" href="https://github.com/geoorgeqq/terminal-portofolio">https://github.com/geoorgeqq/terminal-portofolio</a><img src="./react-icon.svg" alt="react" className="single-image"/></span>
             <span className="output-block">Student Management App - <a target="_blank" className="accent" href="https://github.com/geoorgeqq/Student-Management">https://github.com/geoorgeqq/Student-Management</a><div className="icons"><img src="./react-icon.svg" alt="react" /> <img src="./spring-icon.svg" alt="java" /></div></span>
             <span className="output-block">Colaborative Code Editor - <a target="_blank" className="accent" href="https://github.com/geoorgeqq/Collaborative-Code-Editor">https://github.com/geoorgeqq/Collaborative-Code-Editor</a><img src="./rust-icon.svg" alt="rust" className="single-image" style={{color: "white"}}/></span>
          
        </div>);
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
      case "clear": {
        const newKey = ++keyRef.current;
        setLines([
          <InputLine onEnter={handleEnter} key={`input-line-${newKey}`} inputRef={activeInputRef} inputs={inputs} />,
        ]);
        return;
      }
      case "theme": {
        if (arg === "list") {
          output.push(<div className="output-block" key="theme-list-header">List of themes:</div>);
          for (let i = 0; i < themes.length; i++) {
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
              <span className="accent">theme list </span>
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
            <span className="accent">help</span> to find all
            available commands.
          </div>,
        );
    }
    const newCounter = keyRef.current += 2;
    setLines((prev) => [
      ...prev.map((line) => {
        if (line.type === InputLine) {
          return (
            <div className="input-line" key={line.key}>
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
      <div key={`output-${newCounter}`}>{output}</div>,
      <InputLine
        key={`input-line-${newCounter + 1}`}
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
