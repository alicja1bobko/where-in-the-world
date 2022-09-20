import React, { useContext } from "react";
import { DarkModeContext } from "../providers/DarkModeProvider";

const setTheme = (darkMode: DarkModeContext) => {
  const isDark = darkMode.mode.isDark;
  darkMode.dispatch(!isDark);
};
const MainApp = (props: any) => {
  const theme = useContext(DarkModeContext);
  const { isDark } = theme.mode;

  return (
    <div className={`${isDark ? "theme-dark" : "theme-light"} content`}>
      <div>Theme is {isDark ? "Dark" : "Light"}</div>
      <button onClick={() => setTheme(theme)}>Change Theme</button>
    </div>
  );
};

export default MainApp;
