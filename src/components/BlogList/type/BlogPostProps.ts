type PositiveNumber = number & { __positive__: true };
type PositiveNumOrMinusOne = number & { __positiveOrMinusOne__: true };

export const toPositiveNumber = (n: number): PositiveNumber => {
  if (n <= 0) throw new Error("Number must be greater than 0");
  return n as PositiveNumber;
};
export const toPositiveNumberOrMinusOne = (
  n: number
): PositiveNumOrMinusOne => {
  if (n !== -1 && n <= 0)
    throw new Error("numOfPost must be -1 or a number greater than 0");
  return n as PositiveNumOrMinusOne;
};
export interface BlogPostProps {
  panigation?: boolean;
  linkReadMore?: boolean;
  layout?: boolean;
  search?: boolean;
  sort?: boolean;
  postPerPage: PositiveNumOrMinusOne; // -1 show all
  columList: 1 | 2 | 3 | 4 | 5 | 6;
  spaceCol: PositiveNumber;
  spaceRow: PositiveNumber;
  sortOrder: "oldest" | "latest" | "za" | "az";
}

// ALIASES for cleaner JSX usage
export const pn = toPositiveNumber;
export const pnm1 = toPositiveNumberOrMinusOne;
