import { MouseEventHandler } from "react";

// 커스텀 버튼
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  isDisabled?: boolean;
  rightIcon?: boolean;
}

// 제조사
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

// fetch Data
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface KeyTranslations {
  [key: string]: string;
}

export interface ValueTransforms {
  [key: string]: (value: any) => string;
}
