import React from "react";
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
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (onToggle) onToggle();
  });

  return (
    <div
      role="button"
      aria-expanded={false}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          decoratedOnClick(e);
        }
      }}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontWeight: "bold",
        backgroundColor: "#f8f9fa",
        padding: "10px 15px",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
};

export default CustomToggle;
