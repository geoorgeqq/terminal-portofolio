import { useEffect, useState, useRef } from "react";

type ThemeProps = {
    arg? : string,
    themes : string[],
    setTheme :React.Dispatch<React.SetStateAction<string>>
}

export default function Theme ({arg, themes, setTheme} :ThemeProps) {
    const [currentTheme, setCurrentTheme] = useState<string | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (arg === undefined) {
      setTheme((prev) => {
        const nextIndex = (themes.indexOf(prev) + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        timerRef.current = setTimeout(() => setCurrentTheme(nextTheme), 0);
        return nextTheme;
      });
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [arg, themes, setTheme]);

  useEffect(() => {
    if (arg && arg !== "list") {
      if (themes.indexOf(arg) !== -1) {
        setTheme(arg);
        timerRef.current = setTimeout(() => setCurrentTheme(arg), 0);
      }
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [arg, themes, setTheme]);
  
    if(arg ==="list"){
        return(
        <>
        <div className="output-block" key="theme-list-header">List of themes:</div>
          {themes.map((theme)=> (
            <div className="output-block capitalized-text"
                key={`theme-${theme}`}
              >
                {theme}
              </div>))}      
              </>
        )
    }
    if(arg){
    if(themes.indexOf(arg) === -1 && arg !== undefined && arg !== "") {
        return(<div key="theme-not-found">
              Theme not found. Use{" "}
              <span className="accent">theme list </span>
              to see available themes.
            </div>
          );
    }
}
    if (arg) {
          return(
            <div key="theme-switched">Theme switched to <span className="capitalized-text">{arg}</span></div>
            )
        }

    return currentTheme ? (
    <div>
      Theme switched to <span className="capitalized-text">{currentTheme}</span>
    </div>
  ) : null;
    
    

}