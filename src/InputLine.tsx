import { useState, useEffect, useRef } from "react";

type InputLineProps = {
  onEnter: (value: string) => void;
};

export default function InputLine({ onEnter }: InputLineProps) {
  const [input, setInput] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  // autofocus la mount
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="terminal-input">
      <span>
        guest@geoorgeq.computer
        <span style={{ color: "var(--success)" }}>:~$</span>
      </span>
      <input
        ref={ref}
        type="text"
        className="terminal-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnter(input); // trimitem input-ul în App
            setInput(""); // resetăm input-ul local (nu mai contează)
          }
        }}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
}
