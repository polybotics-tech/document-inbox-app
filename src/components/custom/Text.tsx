import { useColors, useDimensions } from "@/src/hooks";
import { CustomTextProps } from "@/src/types/components/custom";
import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";

const Text = ({
  children,
  style = {},
  center = false,
  right = false,
  light = false,
  semibold = false,
  bold = false,
  color,
  size,
  isClickable = false,
  onPress = () => {},
  ...props
}: TextProps & CustomTextProps) => {
  const { colors } = useColors();
  const { font } = useDimensions();
  const { family: fontFamily, size: fontSize } = font;

  const styles = StyleSheet.create({
    textAlign: {
      textAlign: right ? "right" : center ? "center" : "left",
    },
    fontWeight: {
      fontFamily: bold
        ? fontFamily.bold
        : semibold
          ? fontFamily.semibold
          : light
            ? fontFamily.light
            : fontFamily.regular,
    },
    fontSize: {
      fontSize: size || fontSize.s,
      lineHeight: size ? size + Number(size / 4) : fontSize.s,
    },
    color: {
      color: color || colors.black || "black",
    },
  });

  return (
    <RNText
      style={[
        styles.textAlign,
        styles.fontWeight,
        styles.fontSize,
        styles.color,
        style,
      ]}
      onPress={onPress}
      disabled={!isClickable}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default React.memo(Text);
