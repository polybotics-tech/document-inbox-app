import { useDimensions } from "@/src/hooks";
import { CustomViewProps } from "@/src/types/components/custom";
import { BlurViewProps, BlurView as ExpoBlurView } from "expo-blur";
import React from "react";
import {
  TouchableOpacity as RNTouchableOpacity,
  View as RNView,
  StyleSheet,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";

const View = ({
  children,
  style = {},
  width = "100%",
  setWidthAsHeight = false,
  height,
  setHeightAsWidth = false,
  fullscreen = false,
  padding = 0,
  margin = 0,
  top,
  left,
  right,
  bottom,
  vertical,
  horizontal,
  useSpaceAsMargin = false,
  gap = 0,
  backgroundColor,
  transparent = false,
  radius = 0,
  round = false,
  overflowHidden = false,
  flex = false,
  justifyContent,
  alignItems,
  center = false,
  setBackgroundBlur = false,
  blurIntensity = 50,
  blurTint = "dark",
  isClickable = false,
  onPress = () => {},
  ...props
}: ViewProps & TouchableOpacityProps & BlurViewProps & CustomViewProps) => {
  const { radius: radiusDimension } = useDimensions();

  const styles = StyleSheet.create({
    dimensions: {
      width: setWidthAsHeight ? height : width || "auto",
      height: setHeightAsWidth ? width : height,
      gap: gap,
    },
    padding: {
      paddingVertical: vertical,
      paddingHorizontal: horizontal,
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
      padding: padding,
    },
    margin: {
      marginVertical: vertical,
      marginHorizontal: horizontal,
      marginTop: top,
      marginBottom: bottom,
      marginLeft: left,
      marginRight: right,
      margin: margin,
    },
    structure: {
      backgroundColor: transparent
        ? "transparent"
        : backgroundColor || "transparent",
      borderRadius: round ? radiusDimension.round : radius,
      overflow: overflowHidden ? "hidden" : "visible",
    },
    flex: {
      flexDirection: flex ? "row" : "column",
      justifyContent: center ? "center" : justifyContent,
      alignItems: center ? "center" : alignItems,
    },
    flexScreen: {
      flex: 1,
    },
  });

  return isClickable ? (
    <RNTouchableOpacity
      activeOpacity={0.6}
      style={[
        fullscreen && styles.flexScreen,
        styles.dimensions,
        useSpaceAsMargin ? styles.margin : styles.padding,
        styles.structure,
        styles.flex,
        style,
      ]}
      onPress={onPress}
      {...props}
    >
      {children}
    </RNTouchableOpacity>
  ) : setBackgroundBlur ? (
    <ExpoBlurView
      intensity={blurIntensity}
      tint={blurTint}
      experimentalBlurMethod="dimezisBlurView"
      style={[
        styles.dimensions,
        useSpaceAsMargin ? styles.margin : styles.padding,
        styles.structure,
        styles.flex,
        fullscreen && styles.flexScreen,
        style,
      ]}
      //pointerEvents="none"
      {...props}
    >
      {children}
    </ExpoBlurView>
  ) : (
    <RNView
      style={[
        styles.dimensions,
        useSpaceAsMargin ? styles.margin : styles.padding,
        styles.structure,
        styles.flex,
        fullscreen && styles.flexScreen,
        style,
      ]}
      {...props}
    >
      {children}
    </RNView>
  );
};

export default React.memo(View);
