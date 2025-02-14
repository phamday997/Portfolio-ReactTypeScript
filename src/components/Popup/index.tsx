import React from "react";
import { PortfolioItem } from "../../pages/Portfolio/types/PortfolioCard";

interface PopupProps {
  classAnimation: string;
  data: PortfolioItem;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({
  classAnimation,
  data,
  onClose,
}) => {
  const getYouTubeEmbedUrl = (url: any): string => {
    if (typeof url !== "string") {
      console.error("Invalid URL:", url);
      return "";
    }

    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/s]{11})/
    );

    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : url;
  };

  return (
    <div className={`popup ${classAnimation}`}>
      <button onClick={onClose}>Close</button>
      {data.typePopup === "video" ? (
        <iframe
          width="560"
          height="315"
          src={getYouTubeEmbedUrl(data.dataPopup)}
          title="Video Popup"
          allowFullScreen
        ></iframe>
      ) : (
        <div>
          <h2>Details</h2>
          <p>
            <strong>Client:</strong> {data.dataPopupObject?.details}
          </p>
          <p>
            <strong>Date:</strong> {data.dataPopupObject?.date}
          </p>
          {data.dataPopupObject?.srcImgObject?.map(
            (item: any, index: number) => (
              <img key={index} src={item} alt="popup img" width={200} />
            )
          )}
        </div>
      )}
    </div>
  );
};
