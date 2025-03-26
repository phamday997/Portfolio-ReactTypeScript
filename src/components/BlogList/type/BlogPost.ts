export interface BlogPost {
  id: number;
  title: string;
  content: string | TrustedHTML;
  author: string;
  date: string;
  category: string;
  image: string;
}
