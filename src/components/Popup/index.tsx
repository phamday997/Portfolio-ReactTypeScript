import React from "react";
import { PortfolioItem } from "../../pages/Portfolio/types/PortfolioCard";
import IconClose from "./icon-close.png";
import "./Popup.scss";

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
  const getEmbedUrl = (url: string): string => {
    if (typeof url !== "string") {
      console.error("Invalid URL:", url);
      return "";
    }

    // Handle YouTube
    const youtubeMatch = url.match(
      /(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/s]{11})/
    );
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    // Handle Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/(?:.*\/)?(\d+))/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    // Handle SoundCloud
    const soundCloudMatch = url.match(/soundcloud\.com\/(.+)/);
    if (soundCloudMatch) {
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
        url
      )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
    }
    // Default return original URL if no match
    return url;
  };

  return (
    <div className={`modal-popup-pd ${classAnimation} ${data?.typePopup}`}>
      <div className="group-box-inner">
        <button className="close" onClick={onClose}>
          <img src={IconClose} alt="icon-close" />
        </button>

        {data.typePopup === "video" || data.typePopup === "audio" ? (
          <div className="video-audio-wrap">
            <iframe
              src={getEmbedUrl(data?.dataPopup ?? "")}
              title="Video Popup"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="description-wrap">
            <div className="popup-details">
              {data?.srcImg && (
                <div className="top-img">
                  <img src={data?.srcImg} alt="popup-detail" />
                </div>
              )}
              {data?.title && (
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
              )}
              {data?.category && (
                <span className="category">{data?.category}</span>
              )}
              <div className="main-details">
                {data?.dataPopupObject?.details && (
                  <div
                    className="text-box"
                    dangerouslySetInnerHTML={{
                      __html: data?.dataPopupObject?.details,
                    }}
                  ></div>
                )}

                <div className="details-box">
                  {data?.dataPopupObject?.client && (
                    <div className="clients details-box--item">
                      <div className="label">Client</div>
                      <div>{data?.dataPopupObject?.client}</div>
                    </div>
                  )}
                  {data?.dataPopupObject?.subCategory && (
                    <div className="sub-cate details-box--item">
                      <div className="label">Category</div>
                      <div>{data?.dataPopupObject?.subCategory}</div>
                    </div>
                  )}
                  {data?.dataPopupObject?.date && (
                    <div className="clients details-box--item">
                      <div className="label">Category</div>
                      <div>{data?.dataPopupObject?.date}</div>
                    </div>
                  )}
                </div>
              </div>
              {data.dataPopupObject?.srcImgObject && (
                <div className="additional-images">
                  <ul>
                    {data.dataPopupObject?.srcImgObject?.map(
                      (item: string, index: number) => (
                        <li key={index}>
                          <img src={item} alt="popup img" width={200} />
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
