import { ElementType, ReactNode } from "react";

export interface AnimationElementProps {
  classElement?: string;
  idElement?: string;
  as?: ElementType; // Ensure only valid HTML tags (section, div, span,...) are allowed
  index?: number;
  totalItem?: number;
  animation: string;
  duration?: number;
  delayBase?: number;
  delayStepMore?: number;
  children: ReactNode;
}
