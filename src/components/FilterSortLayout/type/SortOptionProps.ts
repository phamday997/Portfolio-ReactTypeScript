import { Dispatch } from "react";

export interface SortOptionProps {
  typeName: "post" | "product";
  width?: number;
  valueSort: string;
  setCurrentSort: Dispatch<React.SetStateAction<string>>;
}
