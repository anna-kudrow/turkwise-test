import Modal from "../../../shared/modal/Modal";
import type { AnalysisDescription } from "../aiStatItem/types";
import styles from "./HelpModal.module.css";

function HelpModal({
  isOpen,
  helpData,
  onClose,
}: {
  isOpen: boolean;
  helpData: AnalysisDescription;
  onClose: () => void;
}) {
  // <!-- Other modals remain the same as original -->
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles["modal-header"]}>
        <h2 className={styles["modal-title"]}>
          <i className="fas fa-question-circle"></i>
          Yardım
        </h2>
        <button
          type="button"
          className={styles["modal-close"]}
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className={styles["modal-body"]}>
        <div className={styles["help-content"]} id="helpContent">
          <div className={styles["help-icon-large"]}>
            <i className={helpData.icon}></i>
          </div>

          <div className={styles["help-title"]}>{helpData.title}</div>
          <div className={styles["help-description"]}>
            {helpData.description}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            <i className="fas fa-check"></i>
            Anladım
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default HelpModal;
