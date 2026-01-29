import { useDispatch, useSelector } from "react-redux";

import { colors as AppColors } from "@/src/constants";
import { __action_toggleTheme } from "@/src/store/slices/theme";
import {
  FixedColorsType,
  OtherColorsType,
  UseColorsHookType,
} from "@/src/types/colors";
import { ThemeSliceInitialStateType } from "@/src/types/reduxStore";

export default function useColors(): UseColorsHookType {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: { theme: ThemeSliceInitialStateType }) => state.theme,
  );
  const { mode, useDeviceTheme } = theme;
  const themeColor: FixedColorsType & OtherColorsType = AppColors[mode];

  const _toggleTheme = () => {
    dispatch(__action_toggleTheme());
  };

  return {
    fixed: AppColors.fixed,
    colors: themeColor || AppColors.light,
    isDarkMode: Boolean(mode === "dark"),
    isDeviceTheme: Boolean(useDeviceTheme),
    toggleTheme: _toggleTheme,
  };
}
