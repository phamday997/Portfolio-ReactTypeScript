import { useCallback } from "react";
import { useGoogleSheetData } from "../../hooks";
import { BlogPost } from "../../components/BlogList/type";

export const useBlogPosts = (
  sheetId: string,
  apiKey: string,
  range = "BlogPost!A2:J"
) => {
  const mapRowToPost = useCallback(
    (row: string[]): BlogPost => ({
      id: Number(row[0]),
      title: row[1],
      content: row[2],
      excerpt: row[3],
      author: row[4],
      date: row[5],
      tag: row[6],
      category: row[7],
      imageCategory: row[8],
      image: row[9],
    }),
    []
  );

  return useGoogleSheetData<BlogPost>(sheetId, apiKey, range, mapRowToPost);
};
