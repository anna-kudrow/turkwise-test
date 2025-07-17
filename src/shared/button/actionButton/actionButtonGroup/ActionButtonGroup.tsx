import type { ReactNode } from "react";
import styles from "../ActionButton.module.css";
import { ActionButton } from "../actionButton/ActionButton";

interface ActionButtonGroupProps {
  children: ReactNode;
  className?: string;
}

export function ActionButtonGroup({
  children,
  className = "",
}: ActionButtonGroupProps) {
  return (
    <div className={`${styles["action-buttons"]} ${className}`}>{children}</div>
  );
}

export function ErrorActionButton({
  onClick,
  tooltip = "Kritik Bilgi Eksik!",
}: {
  onClick?: () => void;
  tooltip?: string;
}) {
  return (
    <ActionButton
      icon="fas fa-exclamation-triangle"
      tooltip={tooltip}
      onClick={onClick}
      variant="error"
    />
  );
}

export function ViewActionButton({
  onClick,
  tooltip = "Ürünü Görüntüle",
}: {
  onClick?: () => void;
  tooltip?: string;
}) {
  return (
    <ActionButton
      icon="fas fa-eye"
      tooltip={tooltip}
      onClick={onClick}
      variant="view"
    />
  );
}

export function PropertiesActionButton({
  onClick,
  tooltip = "Ürün Özellikleri",
}: {
  onClick?: () => void;
  tooltip?: string;
}) {
  return (
    <ActionButton
      icon="fas fa-cog"
      tooltip={tooltip}
      onClick={onClick}
      variant="properties"
    />
  );
}
