import { useState, type RefObject } from "react";

type InputLineProps = {
  onEnter: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

export default function InputLine({ onEnter, inputRef }: InputLineProps) {
  const commands = [
    "ls",
    "theme",
    "theme list",
    "theme dark",
    "theme light",
    "theme cyber",
    "help",
    "clear",
  ];

  const [input, setInput] = useState("");
  const [preview, setPreview] = useState("");

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const match = commands.find((cmd) => cmd.startsWith(input));
    setPreview(match || "");
    if (e.key === "Tab") {
      if (preview) {
        e.preventDefault();
        if (match) {
          setInput(match);
        }
      }
    }
  }

  const match = input ? commands.find((cmd) => cmd.startsWith(input)) : "";
  const previewText = match ? match.slice(input.length) : "";

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
