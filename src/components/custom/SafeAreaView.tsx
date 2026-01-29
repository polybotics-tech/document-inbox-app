import { useColors } from "@/src/hooks";
import { CustomSafeAreaViewProps } from "@/src/types/components/custom";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = ({
  children,
  style = {},
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
  ...props
}: CustomSafeAreaViewProps) => {
  const { isDarkMode, colors } = useColors();
  const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: colors.white,
    },
    dimensions: {
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
  });

  return (
    <RNSafeAreaView
      style={[
        styles.view,
        styles.dimensions,
        useSpaceAsMargin ? styles.margin : styles.padding,
        style,
      ]}
      {...props}
    >
      {children}

      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </RNSafeAreaView>
  );
};

export default React.memo(SafeAreaView);
