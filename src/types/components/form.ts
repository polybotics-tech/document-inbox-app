import { ReactNode } from "react";

export interface CustomTextInputProps {
  label?: string;
  placeholder?: string;
  value: string | number | any;
  setValue: (...prev: any) => void;
  name?: string;
  setValueAsForm?: boolean;
  icon?: ReactNode;
  isPassword?: boolean;
  showLabel?: boolean;
  isEmail?: boolean;
  isSearch?: boolean;
  isNumeric?: boolean;
  backgroundColor?: string;
}
