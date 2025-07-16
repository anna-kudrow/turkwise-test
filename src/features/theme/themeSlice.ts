import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const getInitialTheme = (): "light" | "dark" => {
  if (typeof localStorage !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  }
  return "light";
};

export interface ThemeState {
  currentTheme: "light" | "dark";
}

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

export const toggleThemeSlice = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.currentTheme === "light") {
        state.currentTheme = "dark";
      } else {
        state.currentTheme = "light";
      }
    },
  },
});

export const { toggleTheme } = toggleThemeSlice.actions;

export const selectToggleTheme = (state: RootState) => state.theme.currentTheme;

export default toggleThemeSlice.reducer;
