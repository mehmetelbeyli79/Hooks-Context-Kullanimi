import "./styles.css";
import Content from "./components/content";
import React, { useState } from "react";

const themes = {
  dark: {
    backgroundColor: "#000",
    color: "white",
    height: "500px",
    padding: "10px"
  },
  light: {
    backgroundColor: "#fff",
    color: "#000",
    height: "500px",
    padding: "10px"
  }
};

export const ThemeContext = React.createContext(themes.dark);

export default function App() {
  const [theme, setThemes] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setThemes(themes.light);
    } else {
      setThemes(themes.dark);
    }
  };
  return (
    <div className="App">
      <button onClick={toggleTheme}>
        {theme === themes.dark ? "Light Theme" : "Dark Theme"}
      </button>
      <ThemeContext.Provider value={theme}>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}
