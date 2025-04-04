import { BlogPost } from "./BlogPost";

export interface CardBlogProps {
  layoutCard?: "vertical" | "horizontal";
  dataPost: BlogPost;
}
