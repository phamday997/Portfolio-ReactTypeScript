import React from "react";
import { Accordion } from "react-bootstrap";
import { AccordionItemProps } from "./type/AccordionItemProps";
import AccordionItem from "./Card/AccordionItem";
import "./AccordionPD.scss";
import { AnimationPD } from "../AnimationPD";

interface AccordionProps {
  data: AccordionItemProps[];
  defaultActiveKey: string;
  animationDelay?: number;
}

export const AccordionPD: React.FC<AccordionProps> = ({
  data,
  defaultActiveKey = "0",
  animationDelay = 0.2,
}) => {
  if (!data || data.length === 0) return null;

  return (
    <Accordion className="accordion-pd" defaultActiveKey={defaultActiveKey}>
      {data.map((item: AccordionItemProps, index: number) => (
        <AnimationPD
          animation="fadeInUp"
          key={index}
          index={index}
          delayBase={animationDelay}
          totalItem={data.length}
        >
          <AccordionItem eventKey={index.toString()} title={item.title}>
            {item.content}
          </AccordionItem>
        </AnimationPD>
      ))}
    </Accordion>
  );
};
