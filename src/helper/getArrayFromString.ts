export const getArrayFromString = <T>(data: T, withSpace = false): any[] => {
  const delimiter = withSpace
    ? /[\s,;\-|]+/ // includes space
    : /[,\-;|]+/; // excludes space

  const dataArray = Array.isArray(data)
    ? data
    : String(data)
        .split(delimiter)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

  return dataArray;
};
