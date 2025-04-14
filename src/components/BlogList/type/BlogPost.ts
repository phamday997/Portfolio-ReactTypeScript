export interface BlogPost {
  id: number;
  title: string | TrustedHTML;
  content: string | TrustedHTML;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageCategory: string;
  image: string;
}
