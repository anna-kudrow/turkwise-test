/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
import "./styles.css";
import type { AnalysisDescription } from "../aiStatItem/types";
import Modal from "../../../shared/modal/Modal";

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
      <div className="modal-header">
        <h2 className="modal-title">
          <i className="fas fa-question-circle"></i>
          Yardım
        </h2>
        <button type="button" className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="modal-body">
        <div className="help-content" id="helpContent">
          <div className="help-icon-large">
            <i className={helpData.icon}></i>
          </div>
          <div className="help-title">{helpData.title}</div>
          <div className="help-description">{helpData.description}</div>
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
