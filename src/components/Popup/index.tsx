import React, { useRef } from "react";
import { PortfolioItem } from "../../pages/Portfolio/types/PortfolioCard";
import IconClose from "./icon-close.png";
import useEmbedUrl from "../../hooks/useEmbedUrl";
import "./Popup.scss";

interface PopupProps {
  classAnimation: string;
  data: null | PortfolioItem;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({
  classAnimation,
  data,
  onClose,
}) => {
  const embedUrl = useEmbedUrl(data?.dataPopup ?? null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-popup-pd ${classAnimation} ${
        data ? data.typePopup : ""
      }`}
      onClick={handleClickOutSide}
    >
      {data && (
        <div className="group-box-inner" ref={modalRef}>
          <button className="close" onClick={onClose}>
            <img src={IconClose} alt="icon-close" />
          </button>
          {data.typePopup === "video" || data.typePopup === "audio" ? (
            <div className="video-audio-wrap">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Video Popup"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="no-data">No {data.typePopup} to display </div>
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
      )}
    </div>
  );
};
