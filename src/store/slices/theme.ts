import { ThemeSliceInitialStateType } from "@/src/types/reduxStore";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeSliceInitialStateType = {
  mode: "light",
  useDeviceTheme: true,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    __action_toggleTheme: (state) => {
      state.useDeviceTheme = false;

      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    __action_useDeviceTheme: (state, action) => {
      const { theme = "" } = action.payload;

      if (!["dark", "light"].includes(String(theme).toLowerCase())) {
        return;
      }

      state.useDeviceTheme = true;
      state.mode = theme.toLowerCase();
    },
  },
});

export const { __action_toggleTheme, __action_useDeviceTheme } =
  ThemeSlice.actions;
