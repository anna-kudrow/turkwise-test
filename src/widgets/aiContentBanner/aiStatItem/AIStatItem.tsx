import { useState } from "react";
import HelpModal from "../helpModal/HelpModal";
import styles from "./AIStatItem.module.css";
import type { AIStatItemType } from "./types";

function AIStatItem({ props }: { props: AIStatItemType }) {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={styles["stat-item"]}
        onClick={() => setHelpModalOpen(true)}
      >
        <div className={styles["stat-help-icon"]}>
          <i className="fas fa-question"></i>
        </div>
        <div className={styles["stat-label"]}>{props.analizLabel}</div>
        <div className={styles["stat-value"]}>{props.percentage}</div>
        <div className={styles["stat-progress"]}>
          <div
            className={styles["stat-progress-fill"]}
            style={{ width: "87%" }}
          ></div>
        </div>
        <div className={`${styles["stat-change"]} ${styles.positive}`}>
          <i className="fas fa-arrow-up"></i>
          {props.weeklyChange}
        </div>
      </button>
      <HelpModal
        isOpen={helpModalOpen}
        helpData={props.analizDescription}
        onClose={() => setHelpModalOpen(false)}
      />
    </>
  );
}

export default AIStatItem;
