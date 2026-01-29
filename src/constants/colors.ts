import { ColorsType } from "@/src/types/colors";

const colors: ColorsType = {
  light: {
    primary: "#3498db",
    primaryFaded: (opacity = 0.1) => `rgba(52, 152, 219, ${opacity})`,
    success: "#2ecc71",
    successFaded: (opacity = 0.1) => `rgba(46, 204, 113, ${opacity})`,
    error: "#e74c3c",
    errorFaded: (opacity = 0.1) => `rgba(231, 76, 60, ${opacity})`,
    white: "#f6f4f4",
    gray100: "#e7e9ea", //d8d9d9
    gray200: "#96a1a8", //818d96
    gray300: "#393e42",
    black: "#040505",
  },
  dark: {
    primary: "#2980b9",
    primaryFaded: (opacity = 0.1) => `rgba(41, 128, 185, ${opacity})`,
    success: "#27ae60",
    successFaded: (opacity = 0.1) => `rgba(39, 174, 96, ${opacity})`,
    error: "#c0392b",
    errorFaded: (opacity = 0.1) => `rgba(192, 57, 43, ${opacity})`,
    white: "#010e16",
    gray300: "#bdc3c7",
    gray200: "#818d96",
    gray100: "#393e42",
    black: "#f6f4f4",
  },
  fixed: {
    primary: "#3498db",
    success: "#2ecc71",
    error: "#e74c3c",
    white: "#f6f4f4",
    black: "#040505",
  },
};

export default colors;
