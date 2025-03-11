import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import CustomToggle from "./CustomToggle";

interface AccordionItemProps {
  eventKey: string;
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  eventKey,
  title,
  children,
}) => {
  return (
    <Card className="style-1">
      <Card.Header>
        <CustomToggle eventKey={eventKey}>
          <span className={`button-plus-minus ${false ? "" : "open"}`} />
          <span>{title}</span>
        </CustomToggle>
      </Card.Header>

      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{children}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default AccordionItem;
