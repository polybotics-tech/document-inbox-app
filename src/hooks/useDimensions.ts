import { dimensions } from "@/src/constants";
import { UseDimensionsHookType } from "@/src/types/dimensions";
import { Dimensions, Platform } from "react-native";

export default function useDimensions(): UseDimensionsHookType {
  const W = Dimensions.get("window").width;
  const H = Dimensions.get("window").height;

  return {
    isIOS: Boolean(Platform.OS === "ios"),
    screenWidth: {
      full: W,
      ratio: (ratio, width = W) => width * ratio,
    },
    screenHeight: {
      full: H,
      ratio: (ratio, height = H) => height * ratio,
    },
    ...dimensions,
  };
}
