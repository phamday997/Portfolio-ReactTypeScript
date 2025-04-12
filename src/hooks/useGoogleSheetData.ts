import { useEffect, useState } from "react";
import axios from "axios";

type GoogleSheetResponse = {
  range: string;
  majorDimension: string;
  values: string[][];
};

export const useGoogleSheetData = <T>(
  sheetId: string,
  apiKey: string,
  range = "Sheet1!A2:Z",
  mapRowToItem: (row: string[]) => T
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSheet = async () => {
      try {
        const res = await axios.get<GoogleSheetResponse>(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );
        const rows = res.data.values || [];
        setData(rows.map(mapRowToItem));
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSheet();
  }, [sheetId, apiKey, range, mapRowToItem]);

  return { data, loading };
};
