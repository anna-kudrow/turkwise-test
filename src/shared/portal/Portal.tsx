import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

export const Portal: React.FC<PortalProps> = ({
  children,
  containerId = "modal-root",
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let modalRoot = document.getElementById(containerId);

    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = containerId;
      document.body.appendChild(modalRoot);
    }

    setContainer(modalRoot);

    return () => {
      if (modalRoot && modalRoot.childNodes.length === 0) {
        document.body.removeChild(modalRoot);
      }
    };
  }, [containerId]);

  return container ? createPortal(children, container) : null;
};
