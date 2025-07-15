/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
import type { ReactNode } from "react";
import { Portal } from "../portal/Portal";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  id?: string;
}

function Modal({ isOpen, onClose, children, className = "", id }: ModalProps) {
  return (
    <Portal>
      <div
        id={id}
        className={`${styles.modal} ${isOpen ? styles.active : ""} ${className}`}
        onClick={onClose}
        onKeyDown={onClose}
      >
        <div
          className={styles["modal-content"]}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
