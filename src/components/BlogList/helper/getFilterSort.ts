import { BlogPost } from "../type";
import { getPlainText } from "./getPlainText";

export const getFilteredSortedPosts = (
  posts: BlogPost[],
  query: string,
  sort: string,
  limit: number
): BlogPost[] => {
  const lowerQuery = query.toLowerCase();

  const filtered = posts.filter((post) => {
    const title = getPlainText(post.title).toLowerCase();
    const category = getPlainText(post.category || "").toLowerCase();

    return title.includes(lowerQuery) || category.includes(lowerQuery);
  });

  const sorted = filtered.sort((a, b) => {
    switch (sort) {
      case "oldest":
        return a.id - b.id;

      case "lastest":
        return b.id - a.id;

      case "az":
        return getPlainText(a.title).localeCompare(getPlainText(b.title));

      case "za":
        return getPlainText(b.title).localeCompare(getPlainText(a.title));

      default:
        return 0;
    }
  });

  return limit === -1 ? sorted : sorted.slice(0, limit);
};
