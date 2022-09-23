import { useContext } from "react";
import { DarkModeContext } from "../providers/DarkModeProvider";
import { Icon } from "react-icons-kit";
import { sun } from "react-icons-kit/icomoon/sun";
import { moonO } from "react-icons-kit/fa/moonO";

const setTheme = (darkMode: DarkModeContext) => {
  const isDark = darkMode.mode.isDark;
  darkMode.dispatch(!isDark);
};

const Header = () => {
  const theme = useContext(DarkModeContext);
  const { isDark } = theme.mode;
  return (
    <header
      className={`${
        isDark ? "theme-dark" : "theme-light"
      } z-10 shadow-md p-8 transition-all items-center duration-500`}
    >
      <h1 className="text-xl sm:text-2xl xl:text-[24px] tracking-[1px] font-extrabold w-[8rem] sm:w-auto">
        Where in the World?
      </h1>
      <button
        className="flex gap-2 items-center"
        onClick={() => setTheme(theme)}
      >
        <Icon icon={isDark ? sun : moonO} size={22} />
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
