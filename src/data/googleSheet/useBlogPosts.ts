import { useCallback } from "react";
import { useGoogleSheetData } from "../../hooks";
import { BlogPost, CommentItem } from "../../components/BlogList/type";

export const useBlogPosts = (
  sheetId: string,
  apiKey: string,
  range = "BlogPost!A2:K" // now includes column K for comments
) => {
  const mapRowToPost = useCallback((row: string[]): BlogPost => {
    const commentsStr = row[10] || "[]";
    let comments: CommentItem[] = [];

    try {
      comments = JSON.parse(commentsStr);
    } catch (e) {
      console.warn("Invalid comment JSON for post id:", row[0]);
    }

    return {
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
      comments,
    };
  }, []);

  return useGoogleSheetData<BlogPost>(sheetId, apiKey, range, mapRowToPost);
};
