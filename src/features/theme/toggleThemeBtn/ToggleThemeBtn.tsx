import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selectToggleTheme, toggleTheme } from "../themeSlice";
import styles from "./ToggleThemeBtn.module.css";

function ToggleThemeBtn() {
  const currentTheme = useAppSelector(selectToggleTheme);

  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      className={styles["theme-toggle"]}
    >
      <i
        className={currentTheme === "light" ? "fas fa-moon" : "fas fa-sun"}
        id="themeIcon"
      ></i>
    </button>
  );
}

export default ToggleThemeBtn;
