import React, { useRef } from "react";
import IconClose from "./icon-close.png";
import "./Popup.scss";

interface PopupBaseProps {
  classAnimation: string;
  data: any;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupBase: React.FC<PopupBaseProps> = ({
  classAnimation,
  data,
  onClose,
  children,
}) => {
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
      className={`modal-popup-pd ${classAnimation} ${data?.typePopup || ""}`}
      onClick={handleClickOutSide}
    >
      {data && (
        <div className="group-box-inner" ref={modalRef}>
          <button className="close" onClick={onClose}>
            <img src={IconClose} alt="icon-close" />
          </button>
          {children}
        </div>
      )}
    </div>
  );
};

export default PopupBase;
