import "./App.css";
import { useState} from "react";
import Terminal from "./Terminal";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`app theme-${theme}`}>
      <Terminal setTheme={setTheme}/>
    </div>
  );
}
