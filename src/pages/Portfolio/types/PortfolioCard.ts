import { DetailsPopup } from "./DetailsPopup";

export interface PortfolioItem {
  srcImg?: string;
  typePopup: "video" | "content";
  dataPopup?: string;
  dataPopupObject?: DetailsPopup;
  category?: string;
  title?: string | TrustedHTML;
  objectAlign?: string;
}
