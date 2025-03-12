import React from "react";
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
        <CustomToggle eventKey={eventKey} onToggle={() => {}}>
          <div className="button-plus-minus">
            <span></span>
          </div>
          <h3 className="title">{title}</h3>
        </CustomToggle>
      </Card.Header>

      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <p>{children}</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default AccordionItem;
