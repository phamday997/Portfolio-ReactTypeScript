import { Dispatch } from "react";

export interface PaginationProps {
  totalPage: number;
  paginRange: (number | "...")[];
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
  hasPrev: boolean;
  hasNext: boolean;
}
