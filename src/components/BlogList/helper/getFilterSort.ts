import { BlogPost } from "../type";
import { getPlainText } from "./getPlainText";

export const getFilteredSortedPosts = (
  panigation: boolean,
  posts: BlogPost[],
  query: string,
  sort: string,
  limit: number,
  currentPage: number
): {
  results: BlogPost[];
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
} => {
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

      case "latest":
        return b.id - a.id;

      case "az":
        return getPlainText(a.title).localeCompare(getPlainText(b.title));

      case "za":
        return getPlainText(b.title).localeCompare(getPlainText(a.title));

      default:
        return 0;
    }
  });

  const totalItems = posts.length;
  const itemPerPage = limit <= 0 ? 1 : limit;
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const page = Math.max(1, Math.min(currentPage, totalPages)); // ensure it's in range
  const startIndex = (page - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage - 1, totalItems - 1);

  const results =
    panigation === true
      ? sorted.slice(startIndex, endIndex + 1)
      : limit === -1
      ? sorted
      : sorted.slice(0, limit);

  return {
    results,
    totalPages,
    hasPrev: page > 1,
    hasNext: page < totalPages,
  };
};
