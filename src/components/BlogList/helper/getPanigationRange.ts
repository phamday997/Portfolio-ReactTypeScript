export const getPaginationRange = (
  currentPage: number,
  totalPages: number,
  customPoints: number[] = [],
  siblingCount: number = 1
): (number | "...")[] => {
  const defaultPages = [1, 2, 3, totalPages];

  // Pages near the current page
  const dynamicRange = [
    currentPage - siblingCount,
    currentPage,
    currentPage + siblingCount,
  ];

  const points = Array.from(
    new Set([...defaultPages, ...customPoints, ...dynamicRange])
  )
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);

  const result: (number | "...")[] = [];
  let prev = 0;

  for (let page of points) {
    if (page - prev > 1) {
      result.push("...");
    }
    result.push(page);
    prev = page;
  }

  return result;
};
