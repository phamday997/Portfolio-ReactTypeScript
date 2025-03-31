export interface BlogPost {
  id: number;
  title: string | TrustedHTML;
  content: string | TrustedHTML;
  author: string;
  date: string;
  category: string;
  image: string;
}
