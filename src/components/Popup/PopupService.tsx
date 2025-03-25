import React from "react";
import PopupBase from "./PopupBase";
import { ServiceCard } from "../../pages/Home/Sections/MySkills/type/ServiceCard";

interface PopupServiceProps {
  classAnimation: string;
  data: null | ServiceCard;
  onClose: () => void;
}

export const PopupService: React.FC<PopupServiceProps> = ({
  classAnimation,
  data,
  onClose,
}) => {
  return (
    <PopupBase classAnimation={classAnimation} data={data} onClose={onClose}>
      <div className="description-wrap">
        <div className="popup-details popup-service">
          {data?.dataPopup?.srcImg && (
            <div className="top-img top-img-service">
              <img src={data?.dataPopup?.srcImg} alt="popup-detail" />
            </div>
          )}
          {data?.title && (
            <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
          )}
          <div className="main-details">
            {data?.dataPopup?.details && (
              <div
                className="text-box"
                dangerouslySetInnerHTML={{
                  __html: data?.dataPopup?.details,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </PopupBase>
  );
};
