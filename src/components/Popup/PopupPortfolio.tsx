import React from "react";
import PopupBase from "./PopupBase";
import useEmbedUrl from "../../hooks/useEmbedUrl";
import { PortfolioItem } from "../../pages/Home/Sections/Portfolio/types/PortfolioCard";

interface PopupPortProps {
  classAnimation: string;
  data: null | PortfolioItem;
  onClose: () => void;
}

export const PopupPortfolio: React.FC<PopupPortProps> = ({
  classAnimation,
  data,
  onClose,
}) => {
  const embedUrl = useEmbedUrl(data?.dataPopup ?? null);

  return (
    <PopupBase classAnimation={classAnimation} data={data} onClose={onClose}>
      {data?.typePopup === "video" || data?.typePopup === "audio" ? (
        <div className="video-audio-wrap">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Video Popup"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="no-data">No {data?.typePopup} to display</div>
          )}
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
                    <div className="label">Date</div>
                    <div>{data?.dataPopupObject?.date}</div>
                  </div>
                )}
              </div>
            </div>
            {data?.dataPopupObject?.srcImgObject && (
              <div className="additional-images">
                <ul>
                  {data?.dataPopupObject?.srcImgObject?.map(
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
    </PopupBase>
  );
};
