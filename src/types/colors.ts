export type FixedColorsType = {
  primary: string;
  success: string;
  error: string;
  white: string;
  black: string;
};

export type OtherColorsType = {
  gray100: string;
  gray200: string;
  gray300: string;
  primaryFaded: (opacity?: number) => string;
  successFaded: (opacity?: number) => string;
  errorFaded: (opacity?: number) => string;
};

export type ColorsType = {
  light: FixedColorsType & OtherColorsType;
  dark: FixedColorsType & OtherColorsType;
  fixed: FixedColorsType;
};

export type UseColorsHookType = {
  fixed: FixedColorsType;
  colors: FixedColorsType & OtherColorsType;
  isDarkMode: boolean;
  isDeviceTheme: boolean;
  toggleTheme: () => void;
};
