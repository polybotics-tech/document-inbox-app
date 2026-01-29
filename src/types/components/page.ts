import { Dispatch, SetStateAction } from "react";

export interface FilterModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
