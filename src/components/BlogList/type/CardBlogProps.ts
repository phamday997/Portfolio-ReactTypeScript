import { BlogPost } from "./BlogPost";

export interface CardBlogProps {
  layoutCard?: "vertical" | "horizontal";
  showExcerpt?: boolean;
  showDate?: boolean;
  showCate?: boolean;
  showTag?: boolean;
  dataPost: BlogPost;
}
