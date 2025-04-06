import { Dispatch } from "react";

export interface ShowItemPerPageProps {
  pagination?: boolean;
  currentPerPage: number;
  setChange: Dispatch<React.SetStateAction<number>>;
  columnList: 1 | 2 | 3 | 4 | 5 | 6;
}
