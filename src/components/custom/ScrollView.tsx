import { CustomScrollViewProps } from "@/src/types/components/custom";
import React from "react";
import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  StyleSheet,
} from "react-native";

const ScrollView = ({
  children,
  style = {},
  containerStyle = {},
  padding = 0,
  margin = 0,
  top,
  left,
  right,
  bottom,
  spaceVertical,
  spaceHorizontal,
  useSpaceAsMargin = false,
  gap = 0,
  ...props
}: ScrollViewProps & CustomScrollViewProps) => {
  const styles = StyleSheet.create({
    dimensions: {
      gap: gap,
    },
    padding: {
      paddingVertical: spaceVertical,
      paddingHorizontal: spaceHorizontal,
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
      padding: padding,
    },
    margin: {
      marginVertical: spaceVertical,
      marginHorizontal: spaceHorizontal,
      marginTop: top,
      marginBottom: bottom,
      marginLeft: left,
      marginRight: right,
      margin: margin,
    },
  });

  return (
    <RNScrollView
      style={style}
      contentContainerStyle={[
        styles.dimensions,
        useSpaceAsMargin ? styles.margin : styles.padding,
        containerStyle,
      ]}
      {...props}
    >
      {children}
    </RNScrollView>
  );
};

export default React.memo(ScrollView);
