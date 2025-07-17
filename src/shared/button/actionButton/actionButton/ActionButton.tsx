import styles from "../ActionButton.module.css";

interface ActionButtonProps {
  icon: string;
  tooltip: string;
  onClick?: () => void;
  variant?: "default" | "error" | "view" | "properties";
  className?: string;
  style?: React.CSSProperties;
}

export function ActionButton({
  icon,
  tooltip,
  onClick,
  variant = "default",
  className = "",
  style,
}: ActionButtonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "error":
        return styles["btn-revenue-boost"];
      case "view":
        return styles["btn-view"];
      case "properties":
        return styles["btn-properties"];
      default:
        return "";
    }
  };

  return (
    <button
      className={`${styles["action-btn"]} ${getVariantClass()} ${className}`}
      onClick={onClick}
      type="button"
      style={
        variant === "error"
          ? { background: "var(--error-color)", ...style }
          : style
      }
    >
      <i className={icon}></i>
      <div className={styles["action-tooltip"]}>{tooltip}</div>
    </button>
  );
}
