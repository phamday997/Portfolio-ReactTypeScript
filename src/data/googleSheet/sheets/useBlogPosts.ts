import { useCallback } from "react";
import { useGoogleSheetData } from "../../../hooks";
import { BlogPost } from "../types/BlogPost";

export const useBlogPosts = (
  sheetId: string,
  apiKey: string,
  range = "BlogPost!A2:H" // BlogPost is a Tab name of google sheet, A2:H is data row (A1 is Heading row)
) => {
  const mapRowToPost = useCallback(
    (row: string[]): BlogPost => ({
      id: Number(row[0]),
      title: row[1],
      content: row[2],
      excerpt: row[3],
      author: row[4],
      date: row[5],
      category: row[6],
      image: row[7],
    }),
    [] // deps empty because it do not have any var outside so just load once.
  );

  return useGoogleSheetData<BlogPost>(sheetId, apiKey, range, mapRowToPost);
};
