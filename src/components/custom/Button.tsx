import { Text, View } from "@/src/components/custom";
import { useColors, useDimensions } from "@/src/hooks";
import { CustomButtonProps } from "@/src/types/components/custom";
import React from "react";
import { ActivityIndicator } from "react-native";

const Button = ({
  title = "Click Here",
  onPress = () => {},
  isLoading = false,
  isClickable = true,
  backgroundColor,
  color,
  width = undefined,
  height = 48,
  buttonStyle = {},
  titleStyle = {},
  ...props
}: CustomButtonProps) => {
  const { colors } = useColors();
  const { font, gap } = useDimensions();

  const textColor = color || colors.white || "white";
  const buttonColor = backgroundColor || colors.primary || "black";

  return (
    <View
      width={width}
      height={height}
      backgroundColor={buttonColor}
      flex
      center
      gap={gap.s}
      round
      onPress={onPress}
      isClickable={isClickable}
      fullscreen={Boolean(!width)}
      style={buttonStyle}
      {...props}
    >
      <Text size={font.size.s} color={textColor} semibold style={titleStyle}>
        {title}
      </Text>

      {isLoading && <ActivityIndicator size={font.size.s} color={textColor} />}
    </View>
  );
};

export default React.memo(Button);
