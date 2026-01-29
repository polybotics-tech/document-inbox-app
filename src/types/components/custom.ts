import { ReactElement, ReactNode, RefObject } from "react";
import { DimensionValue, TextStyle, ViewStyle } from "react-native";

export interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  isClickable?: boolean;
  backgroundColor?: string;
  color?: string;
  width?: number | "100%" | "auto" | undefined;
  height?: number | "100%" | "auto" | undefined;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  icon?: ReactElement;
}

export interface CustomMediaProps {
  uri?: string;
}

export interface CustomModalBaseProps {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: (state: boolean) => any;
  canClose?: boolean;
  onClose?: () => void;
  canSwipe?: boolean;
  style?: ViewStyle;
  placeCenter?: boolean;
  placeBottom?: boolean;
  backdropOpacity?: number;
  backdropColor?: string;
}

export interface CustomSafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
  padding?: number;
  margin?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
  useSpaceAsMargin?: boolean;
  gap?: number;
}

export interface CustomScrollViewProps {
  children: ReactNode;
  containerStyle?: ViewStyle;
  padding?: number;
  margin?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  spaceVertical?: number;
  spaceHorizontal?: number;
  useSpaceAsMargin?: boolean;
  gap?: number;
  ref?: RefObject<any>;
  horizontal?: boolean;
  pagingEnabled?: boolean;
}

export interface CustomTextProps {
  children: ReactNode;
  style?: TextStyle;
  center?: boolean;
  right?: boolean;
  light?: boolean;
  semibold?: boolean;
  bold?: boolean;
  color?: string;
  size?: number | undefined;
  isClickable?: boolean;
  onPress?: () => void;
}

export interface CustomViewProps {
  children?: ReactNode;
  width?: number | DimensionValue | "auto" | undefined;
  setWidthAsHeight?: boolean;
  height?: number | DimensionValue | "auto" | undefined;
  setHeightAsWidth?: boolean;
  fullscreen?: boolean;
  padding?: number;
  margin?: number;
  top?: number;
  left?: number | "auto";
  right?: number | "auto";
  bottom?: number;
  vertical?: number | "auto";
  horizontal?: number | "auto";
  useSpaceAsMargin?: boolean;
  gap?: number;
  backgroundColor?: string;
  transparent?: boolean;
  radius?: number;
  round?: boolean;
  overflowHidden?: boolean;
  flex?: boolean;
  justifyContent?:
    | undefined
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "center"
    | "flex-start"
    | "flex-end";
  alignItems?: undefined | "center" | "flex-start" | "flex-end";
  center?: boolean;
  isClickable?: boolean;
  setBackgroundBlur?: boolean;
  blurIntensity?: number;
  blurTint?: "dark" | "light";
  onPress?: () => void;
}

export interface CustomFlashListProps {
  data: any[];
  refreshFunc?: () => Promise<void>;
  loadMoreFunc?: () => Promise<void>;
  canLoadMore?: boolean;
  isLoading?: boolean;
  ListEmptyComponent?: ReactNode;
  ItemSeparatorComponent?: ReactNode;
  gapSize?: number;
  padding?: number;
  paddingTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}
