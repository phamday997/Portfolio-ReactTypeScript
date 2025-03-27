import React, { useContext } from "react";
import { AccordionContext } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

interface CustomToggleProps {
  children: React.ReactNode;
  eventKey: string;
  onToggle?: () => void;
}

const CustomToggle: React.FC<CustomToggleProps> = ({
  children,
  eventKey,
  onToggle,
}) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (onToggle) onToggle();
  });
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      role="button"
      className={`button-toggle mouse-cursor-hover ${
        isCurrentEventKey ? "open" : ""
      }`}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          decoratedOnClick(e);
        }
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
};

export default CustomToggle;
