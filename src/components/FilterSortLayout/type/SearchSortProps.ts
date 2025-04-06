import { Dispatch } from "react";

export interface SearchSortProps {
  width?: number;
  label?: string;
  valueSearch: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
}
