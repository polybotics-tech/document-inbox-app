import { DimensionsType } from "@/src/types/dimensions";

const dimensions: DimensionsType = {
  font: {
    size: {
      xs: 11.5,
      s: 14,
      m: 16,
      b: 20,
      xb: 24,
      xxb: 28,
    },
    family: {
      bold: "Poppins_700Bold",
      semibold: "Poppins_600SemiBold",
      regular: "Poppins_400Regular",
      light: "Poppins_300Light",
    },
  },
  icon: {
    size: {
      xs: 15,
      s: 18,
      m: 20,
      b: 24,
    },
    weight: {
      regular: 1.8,
      semibold: 2.5,
      bold: 3.2,
    },
  },
  thumbnail: {
    s: 48,
    m: 64,
    b: 92,
    xb: 120,
  },
  padding: {
    xs: 8,
    s: 12,
    m: 16,
    b: 24,
    xb: 32,
  },
  gap: {
    xs: 4,
    s: 8,
    m: 16,
    b: 24,
    xb: 48,
  },
  radius: {
    s: 12,
    m: 16,
    b: 24,
    round: 1000,
  },
  setDimension: (value = 0) => value,
};

export default dimensions;
