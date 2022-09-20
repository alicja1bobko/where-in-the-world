import React, { Context, createContext, useReducer, useEffect } from "react";

export const LIGHT_THEME: Theme = {
  isDark: false,
};

export const DARK_THEME: Theme = {
  isDark: true,
};

export interface Theme {
  isDark: boolean;
}

interface DarkModeContext {
  mode: Theme;
  dispatch: React.Dispatch<any>;
}

const darkModeReducer = (_: any, isDark: boolean) =>
  isDark ? DARK_THEME : LIGHT_THEME;

const DarkModeContext: Context<DarkModeContext> = createContext(
  {} as DarkModeContext
);

const initialState =
  JSON.parse(localStorage.getItem("DarkMode") as string) || LIGHT_THEME;

interface Props {
  children: React.ReactNode;
}

const DarkModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, dispatch] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(mode));
  }, [mode]);

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        dispatch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };
