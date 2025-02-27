export interface AnimationElementProps {
  classElement?: string;
  index?: number;
  totalItem: number;
  animation: string;
  duration?: number;
  delayBase?: number;
  delayStepMore?: number;
  children: React.ReactNode;
}
