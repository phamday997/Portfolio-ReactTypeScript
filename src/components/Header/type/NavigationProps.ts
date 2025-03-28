export interface NavigationProps {
  device: "desktop" | "mobile";
  heightParent?: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setShow?: (value: string) => void;
}
