import { useState, type RefObject } from "react";

type InputLineProps = {
  onEnter: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  inputs : string[];
};

export default function InputLine({ onEnter, inputRef, inputs }: InputLineProps) {
  const commands = [
    "ls",
    "theme",
    "theme list",
    "theme dark",
    "theme dracula",
    "theme light",
    "theme cyber",
    "help",
    "clear",
    "about",
  ];


  const [input, setInput] = useState("");
  const [lastInput, setLastInput] = useState(inputs.length);
  const match = input ? commands.find((cmd) => cmd.startsWith(input)) : "";
  const previewText = match ? match.slice(input.length) : "";
  

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {

    if (e.key === "Tab") {
      e.preventDefault();
        if (match) {
          setInput(match);
        }
    }

    let next : number = lastInput;

    if(e.key === "ArrowUp"){
      e.preventDefault()
     setLastInput((prev :number) => {
      next = prev > 0 ? prev - 1: inputs.length -1;
      setInput(inputs[next] ?? "");
      return next;
     })
    }

    if(e.key === "ArrowDown"){
      e.preventDefault()
      setLastInput((prev : number) =>{
        next = prev < inputs.length - 1 ? prev + 1 : 0;
        setInput(inputs[next] ?? "");
        return next;
      })
  }
}

  return (
    <div className="terminal-input">
      <span>
        guest@geoorgeq.computer
        <span style={{ color: "var(--success)", marginRight: "var(--p-3)" }}>
          :~$
        </span>
      </span>
      <input
        ref={inputRef}
        type="text"
        className="terminal-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && input != "") {
            onEnter(input);
            setInput("");
          } else handleKeyDown(e);
        }}
        spellCheck={false}
        style={{ width: `${Math.max(input.length, 1)}ch` }}
      />
      <span className="preview">{previewText}</span>
    </div>
  );
}
