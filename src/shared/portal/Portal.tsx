import type { ReactNode } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: ReactNode }) => {
  return createPortal(children, document.body);
};
