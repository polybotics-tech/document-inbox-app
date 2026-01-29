import { Text, View } from "@/src/components/custom";
import { useColors, useDimensions } from "@/src/hooks";
import { NotFoundComponentProps } from "@/src/types/components/reuseable";
import { FileHeart, FileSearch } from "lucide-react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

const NotFoundComponent = ({
  text = "Not found",
  isLoading = true,
  loaderType = "",
  emptyIcon = "",
  height,
}: NotFoundComponentProps) => {
  const { colors } = useColors();
  const { gap, icon, setDimension } = useDimensions();

  //--
  const iconColor = colors.gray200;
  const iconSize = setDimension(84);
  const iconStrokeWidth = 0.3;
  const fillOpacity = 0.05;

  return (
    <>
      {isLoading ? (
        <View height={height} fullscreen center>
          {Boolean(loaderType === "docs") ? (
            Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)?.map((_, index) => (
              <DocumentLoader key={index} />
            ))
          ) : (
            <ActivityIndicator size={icon.size.s} color={colors.gray200} />
          )}
        </View>
      ) : (
        <View height={height} gap={gap.xs} center>
          {emptyIcon && (
            <>
              {emptyIcon === "no-docs" && (
                <FileSearch
                  size={iconSize}
                  color={iconColor}
                  strokeWidth={iconStrokeWidth}
                  fill={iconColor}
                  fillOpacity={fillOpacity}
                />
              )}

              {emptyIcon === "no-fav-docs" && (
                <FileHeart
                  size={iconSize}
                  color={iconColor}
                  strokeWidth={iconStrokeWidth}
                  fill={iconColor}
                  fillOpacity={fillOpacity}
                />
              )}
            </>
          )}

          <Text color={iconColor}>{text}</Text>
        </View>
      )}
    </>
  );
};

export default React.memo(NotFoundComponent);

const DocumentLoader = () => {
  const { colors } = useColors();
  const { padding, gap, radius } = useDimensions();

  return (
    <View vertical={padding.s} flex gap={gap.s} alignItems={"center"}>
      <View
        width={48}
        setHeightAsWidth
        backgroundColor={colors.gray100}
        radius={radius.s}
      />

      <View width={null} fullscreen gap={gap.m}>
        <View height={10} backgroundColor={colors.gray100} radius={radius.s} />

        <View flex justifyContent={"space-between"}>
          <View
            width="10%"
            height={10}
            backgroundColor={colors.gray100}
            radius={radius.s}
          />
          <View
            width="10%"
            height={10}
            backgroundColor={colors.gray100}
            radius={radius.s}
          />
        </View>
      </View>
    </View>
  );
};
