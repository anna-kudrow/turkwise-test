import AIStatItem from "../aiStatItem/AIStatItem";
import { aiStatData } from "../config/ai-content-data";
import "./styles.css";

function AIContentBanner() {
  return (
    <section className="ai-content-section fade-in-up">
      <div className="ai-header">
        <div className="ai-title">
          <div className="ai-icon">
            <i className="fas fa-brain"></i>
          </div>
          AI İçerik Zekası & Doluluk Analizi
        </div>
        <button className="btn btn-primary" type="button">
          <i className="fas fa-chart-pie"></i>
          Detaylı Rapor
        </button>
      </div>
      <div className="completion-stats">
        {aiStatData.map((aiStatItem) => (
          <AIStatItem key={aiStatItem.analizLabel} props={aiStatItem} />
        ))}
      </div>
    </section>
  );
}

export default AIContentBanner;
