import React from "react";
import { Accordion } from "react-bootstrap";
import { AccordionItemProps } from "./type/AccordionItemProps";
import AccordionItem from "./Card/AccordionItem";

interface AccordionProps {
  data: AccordionItemProps[];
}

const AccordionPD: React.FC<AccordionProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Accordion className="accordion-pd" defaultActiveKey="0">
      {data.map((item: AccordionItemProps, index: number) => (
        <AccordionItem
          key={index}
          eventKey={index.toString()}
          title={item.title}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionPD;
