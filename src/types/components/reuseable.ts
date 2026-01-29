import { Dispatch, ReactNode, SetStateAction } from "react";
import { DocumentType } from "../documents";

export interface NotFoundComponentProps {
  text?: string;
  isLoading?: boolean;
  loaderType?: string;
  emptyIcon?: string;
  height?: number;
}

export interface BottomModalComponentProps {
  children: ReactNode;
  title?: string;
}

export interface DocumentPreviewComponentProps {
  data: DocumentType;
}

export interface DocumentPreviewMenuModalProps {
  document: DocumentType;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export interface MenuItemProps {
  iconComponent?: ReactNode;
  name: string;
  onPress?: () => void;
}
