import { useState } from "react";
import useLocalStroage from "./useLocalStorage";
import "./style.css"

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="containerl-d-m">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
