import { useState } from "react";
import HelpModal from "../helpModal/HelpModal";
import type { AIStatItemType } from "./types";

function AIStatItem({ props }: { props: AIStatItemType }) {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="stat-item"
        onClick={() => setHelpModalOpen(true)}
      >
        <div className="stat-help-icon">
          <i className="fas fa-question"></i>
        </div>
        <div className="stat-label">{props.analizLabel}</div>
        <div className="stat-value">{props.percentage}</div>
        <div className="stat-progress">
          <div className="stat-progress-fill" style={{ width: "87%" }}></div>
        </div>
        <div className="stat-change positive">
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
