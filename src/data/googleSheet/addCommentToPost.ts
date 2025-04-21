interface NewCommentPost {
  fullName: string;
  email: string;
  message: string;
  date: string;
}

interface AddCommentToPost {
  sheetWebAppUrl: string;
  rowIndex: number;
  newComment: NewCommentPost;
}

export const addCommentToPost = async ({
  sheetWebAppUrl,
  rowIndex,
  newComment,
}: AddCommentToPost) => {
  const url = `${sheetWebAppUrl}?rowIndex=${rowIndex}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    const text = await response.text();
    console.log("✅ Comment posted:", text);
  } catch (error) {
    console.warn("⚠️ First attempt failed, retrying...");

    try {
      const retryResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      const retryText = await retryResponse.text();
      console.log("✅ Retry succeeded:", retryText);
    } catch (finalError) {
      console.error("❌ Final error adding comment:", finalError);
    }
  }
};
