import { ScrollView, Text, View } from "@/src/components/custom";
import { useColors, useDimensions } from "@/src/hooks";
import { CustomScrollViewProps } from "@/src/types/components/custom";
import { BottomModalComponentProps } from "@/src/types/components/reuseable";
import React from "react";
import { StyleSheet } from "react-native";

const BottomModalComponent = ({
  children,
  title,
  ...props
}: CustomScrollViewProps & BottomModalComponentProps) => {
  const { colors } = useColors();
  const { padding, radius, gap, font, screenHeight, screenWidth } =
    useDimensions();

  const styles = StyleSheet.create({
    modal: {
      minHeight: screenHeight.ratio(0.3),
      maxHeight: screenHeight.ratio(0.8),
      borderTopLeftRadius: radius.b,
      borderTopRightRadius: radius.b,
    },
    bottomLine: {
      borderWidth: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.gray100,
    },
  });

  return (
    <View backgroundColor={colors.white} style={styles.modal}>
      {/**bar */}
      <View padding={padding.xs} gap={gap.s} style={styles.bottomLine} center>
        {title ? (
          <Text size={font.size.m} color={colors.black} semibold>
            {title}
          </Text>
        ) : (
          <View
            width={screenWidth.ratio(0.1)}
            height={4}
            backgroundColor={colors.black}
            round
          />
        )}
      </View>

      {/**content */}
      <ScrollView padding={padding.m} {...props}>
        {children}
      </ScrollView>
    </View>
  );
};

export default React.memo(BottomModalComponent);
