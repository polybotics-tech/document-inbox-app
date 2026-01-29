import { useColors, useDimensions } from "@/src/hooks";
import {
  DocumentPreviewComponentProps,
  DocumentPreviewMenuModalProps,
  MenuItemProps,
} from "@/src/types/components/reuseable";
import {
  DocumentPreviewThumbnailType,
  DocumentType,
} from "@/src/types/documents";
import { convertSizeToReadable } from "@/src/utils/number";
import {
  ChevronRight,
  EllipsisVertical,
  File,
  FileEdit,
  Heart,
  Image,
  Share,
  Share2,
} from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { ModalBase, Text, View } from "../custom";
import BottomModalComponent from "./BottomModalComponent";

const DocumentPreviewComponent = ({ data }: DocumentPreviewComponentProps) => {
  const { colors } = useColors();
  const { font, gap, icon } = useDimensions();

  //--states
  const [menuIsVisible, setMenuIsVisible] = React.useState(false);

  return (
    <>
      <View flex gap={gap.s} alignItems={"center"}>
        {/**thumbnail */}
        <PreviewThumbnail mimeType={data.mimeType} />

        {/**details */}
        <View gap={gap.s} fullscreen>
          <Text size={font.size.m} numberOfLines={1} semibold>
            {data.name}
          </Text>

          <View flex alignItems={"flex-end"} justifyContent={"space-between"}>
            <Text color={colors.gray200}>
              {convertSizeToReadable(data.size)}
            </Text>

            <Text size={font.size.xs} color={colors.gray300} semibold>
              {data.mimeType}
            </Text>
          </View>
        </View>

        {/**menu */}
        <View
          width={16}
          center
          isClickable
          onPress={() => setMenuIsVisible((prev) => !prev)}
        >
          <EllipsisVertical
            size={icon.size.m}
            color={colors.gray200}
            strokeWidth={icon.weight.regular}
          />
        </View>
      </View>

      {/**menu */}
      {menuIsVisible && (
        <PreviewMenuModal
          document={data}
          isVisible={menuIsVisible}
          setIsVisible={setMenuIsVisible}
        />
      )}
    </>
  );
};

export default React.memo(DocumentPreviewComponent);

const PreviewThumbnail = ({ mimeType = "" }) => {
  const { colors } = useColors();
  const { radius, font } = useDimensions();

  //--variables
  const selected = extractPreviewData(mimeType);

  //--functions
  function extractPreviewData(mime: string): DocumentPreviewThumbnailType {
    let preview: DocumentPreviewThumbnailType = {};
    mime = String(mime).toLowerCase().trim();

    if (mime === "pdf") {
      preview.bgColor = colors.error;
      preview.name = "PDF";
    } else if (mime === "docx" || mime === "doc") {
      preview.bgColor = colors.primary;
      preview.name = "DOC";
    } else if (mime === "txt") {
      preview.bgColor = colors.gray300;
      preview.name = "TXT";
    } else if (mime === "png" || mime === "jpg" || mime === "jpeg") {
      preview.bgColor = colors.gray200;
      preview.name = <Image color={colors.white} />;
    } else {
      preview.bgColor = colors.gray200;
      preview.name = <File color={colors.white} />;
    }

    return preview;
  }

  return (
    <View
      width={48}
      height={48}
      backgroundColor={selected.bgColor}
      radius={radius.s}
      center
    >
      <Text color={colors.white} size={font.size.s} semibold>
        {selected.name}
      </Text>
    </View>
  );
};

const PreviewMenuModal = ({
  document = {},
  isVisible,
  setIsVisible = () => {},
}: DocumentPreviewMenuModalProps) => {
  const { colors } = useColors();
  const { padding, gap, icon, isIOS } = useDimensions();

  const styles = StyleSheet.create({
    bottomLine: {
      borderWidth: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.gray100,
    },
  });

  //--variables
  const { name, size, mimeType }: DocumentType = document;
  const iconSize = icon.size.b;
  const iconColor = colors.gray300;
  const iconWidth = icon.weight.regular;

  return (
    <ModalBase isVisible={isVisible} setIsVisible={setIsVisible} placeBottom>
      <BottomModalComponent gap={gap.m}>
        {/**meta information */}
        <View bottom={padding.s} gap={gap.m} style={styles.bottomLine}>
          {/**title */}
          <MetaInfo name={"Title"} value={name} />

          <View
            flex
            gap={gap.m}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/**size */}
            <MetaInfo name={"Size"} value={convertSizeToReadable(size)} />

            {/**file type */}
            <MetaInfo
              name={"File Type"}
              value={String(mimeType).toUpperCase()}
              alignRight
            />
          </View>
          {/**directory */}
        </View>

        {/**menu items */}
        <View gap={gap.m}>
          <MenuItem
            iconComponent={
              <FileEdit
                size={iconSize}
                color={iconColor}
                strokeWidth={iconWidth}
              />
            }
            name={"Rename File"}
          />

          <MenuItem
            iconComponent={
              <Heart
                size={iconSize}
                color={iconColor}
                strokeWidth={iconWidth}
              />
            }
            name={"Add To Favourites"}
          />

          <MenuItem
            iconComponent={
              isIOS ? (
                <Share
                  size={iconSize}
                  color={iconColor}
                  strokeWidth={iconWidth}
                />
              ) : (
                <Share2
                  size={iconSize}
                  color={iconColor}
                  strokeWidth={iconWidth}
                />
              )
            }
            name={"Share With"}
          />
        </View>
      </BottomModalComponent>
    </ModalBase>
  );
};

const MetaInfo = ({
  name,
  value = "Unknown",
  alignRight = false,
}: {
  name: string;
  value?: string | number;
  alignRight?: boolean;
}) => {
  const { colors } = useColors();
  const { font, gap } = useDimensions();

  return (
    <View width={null} gap={gap.xs}>
      <Text size={font.size.xs} color={colors.gray200} right={alignRight}>
        {name}
      </Text>

      <Text
        size={font.size.m}
        color={colors.black}
        numberOfLines={2}
        right={alignRight}
      >
        {value}
      </Text>
    </View>
  );
};

const MenuItem = ({
  iconComponent = <></>,
  name,
  onPress = () => {},
}: MenuItemProps) => {
  const { colors } = useColors();
  const { gap, icon } = useDimensions();

  return (
    <View flex alignItems={"center"} gap={gap.s} isClickable onPress={onPress}>
      <View width={null}>{iconComponent}</View>

      <View width={null} fullscreen>
        <Text color={colors.gray300} semibold>
          {name}
        </Text>
      </View>

      <View width={null}>
        <ChevronRight
          size={icon.size.xs}
          color={colors.gray300}
          strokeWidth={icon.weight.regular}
        />
      </View>
    </View>
  );
};

/**
 * rename file
 * add to favorite
 * share with friends
 */
