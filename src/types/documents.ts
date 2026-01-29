import { ReactNode } from "react";

export type DocumentType = {
  name?: string;
  size?: number;
  mimeType?: string;
  uri?: string;
};

export type DocumentPreviewThumbnailType = {
  bgColor?: string;
  name?: string | ReactNode;
};
