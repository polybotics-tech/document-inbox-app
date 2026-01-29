import { View } from "@/src/components/custom";
import { useColors } from "@/src/hooks";
import { CustomMediaProps } from "@/src/types/components/custom";
import { Image as ExpoImage, ImageProps } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

const Media = ({ uri, ...props }: CustomMediaProps & ImageProps) => {
  const { colors } = useColors();

  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: "100%",
    },
  });

  return (
    <View backgroundColor={colors.gray200} fullscreen overflowHidden>
      <ExpoImage
        style={styles.image}
        contentFit="cover"
        source={uri}
        //cachePolicy={"memory-disk"}
        {...props}
      />
    </View>
  );
};

export default React.memo(Media);
