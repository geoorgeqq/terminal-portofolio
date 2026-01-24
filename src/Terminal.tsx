import { useEffect, useRef, useState, type JSX } from "react";
import { useAsciiText, fireFontS } from "react-ascii-text";
import InputLine from "./InputLine";
import About from "./commands/About";
import CommandNotFound from "./commands/CommandNotFound";
import Ls from "./commands/Ls";
import Theme from "./commands/Theme";
import Help from "./commands/Help";

type TerminalProps = {
    setTheme : React.Dispatch<React.SetStateAction<string>>
}
type command = {
    arg? : string,
    themes: string[],
    setTheme : React.Dispatch<React.SetStateAction<string>>
}

type CommandHandler = (ctx: command) => JSX.Element[];

export default function Terminal ({setTheme} :TerminalProps){
    const activeInputRef = useRef<HTMLInputElement | null>(null);
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

  

  const commandHandlers : Record<string, CommandHandler> = {
    help: () => [<Help key="help" />],
    about: () =>[<About key="about"/>],
    ls: () =>[<Ls key="ls" />],
    theme: (ctx) => [<Theme key="theme" {...ctx}/>]
  }
  function handleEnter(value: string) {
    // eslint-disable-next-line react-hooks/immutability
    inputs.push(value);
    const output: JSX.Element[] = [];
    const parts = value.toLowerCase().split(" ");
    const command = parts[0];
    const arg = parts[1];
    const handler = commandHandlers[command];

    if (command === "clear") {
  const newKey = ++keyRef.current;

  setLines([
    <InputLine
      key={`input-line-${newKey}`}
      onEnter={handleEnter}
      inputRef={activeInputRef}
      inputs={inputs}
    />,
  ]);

  return;
}

    if(handler) {
        output.push(...handler({arg,themes,setTheme}))
    }else {
        output.push(<CommandNotFound key ="not-found" />)
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

return(
<div className="terminal" onClick={() => activeInputRef.current?.focus()}>
        {lines}
      </div>
      )
}