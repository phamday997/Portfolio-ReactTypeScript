import { DetailService } from "./DetailService";

export interface ServiceCard {
  background?: string;
  icon?: string;
  title?: string;
  description?: string;
  dataPopup: DetailService;
}
