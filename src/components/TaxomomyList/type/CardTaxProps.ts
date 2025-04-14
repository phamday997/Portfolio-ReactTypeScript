import { TaxonomyWithImage } from "./TaxonomyWithImage";

export interface CardTaxProps {
  linkParams: string;
  data: TaxonomyWithImage;
  handleClick: () => void;
}
