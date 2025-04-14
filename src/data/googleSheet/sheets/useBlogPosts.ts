import { useCallback } from "react";
import { useGoogleSheetData } from "../../../hooks";
import { BlogPost } from "../../../components/BlogList/type";

export const useBlogPosts = (
  sheetId: string,
  apiKey: string,
  range = "BlogPost!A2:I" // BlogPost is a Tab name of google sheet
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
      imageCategory: row[7],
      image: row[8],
    }),
    [] // deps empty because it do not have any var outside so just load once.
  );

  return useGoogleSheetData<BlogPost>(sheetId, apiKey, range, mapRowToPost);
};
