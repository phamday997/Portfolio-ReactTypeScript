import { getPlainText } from "../helper";

type Extractor<T> = {
  title: (item: T) => string | TrustedHTML; // required for search + sort (az/za)
  category?: (item: T) => string; // optional, used for filtering
  id: (item: T) => number; // required for sorting (oldest/latest)
};

export const useFilteredSortedPaginatedItems = <T>(
  pagination: boolean,
  items: T[],
  query: string,
  sort: string,
  limit: number,
  currentPage: number,
  excludeIds: number[] = [],
  extractor: Extractor<T>
): {
  results: T[];
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
} => {
  const lowerQuery = query.toLowerCase();

  const cleanedItems =
    excludeIds.length > 0
      ? items.filter((item) => !excludeIds.includes(extractor.id(item)))
      : items;

  const filtered = cleanedItems.filter((item) => {
    const title = getPlainText(extractor.title(item)).toLowerCase();
    const category = extractor.category
      ? getPlainText(extractor.category(item) || "").toLowerCase()
      : "";

    return title.includes(lowerQuery) || category.includes(lowerQuery);
  });

  const sorted = filtered.sort((a, b) => {
    switch (sort) {
      case "oldest":
        return extractor.id(a) - extractor.id(b);

      case "latest":
        return extractor.id(b) - extractor.id(a);

      case "az":
        return getPlainText(extractor.title(a)).localeCompare(
          getPlainText(extractor.title(b))
        );

      case "za":
        return getPlainText(extractor.title(b)).localeCompare(
          getPlainText(extractor.title(a))
        );

      default:
        return 0;
    }
  });

  const totalItems = items.length;
  const itemPerPage = limit <= 0 ? 1 : limit;
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const page = Math.max(1, Math.min(currentPage, totalPages)); // ensure it's in range
  const startIndex = (page - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage - 1, totalItems - 1);

  const results =
    pagination === true
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
