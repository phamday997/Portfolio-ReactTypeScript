import React from "react";
import { ServiceCard } from "../type/ServiceCard";

interface cardServiceProps {
  data: ServiceCard;
  onOpen: () => void;
}

const Card: React.FC<cardServiceProps> = ({ data, onOpen }) => {
  return (
    <div className="service-card" style={{ background: data?.background }}>
      <div className="overlay-action mouse-cursor" onClick={onOpen}></div>
      <div className="service-card--inner">
        <img className="icon" src={data?.icon} alt={data?.title} />
        <h3 className="title">{data?.title}</h3>
        <p className="description">{data?.description}</p>
      </div>
    </div>
  );
};

export default Card;
