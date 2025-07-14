import AIStatItem from "../aiStatItem/AIStatItem";
import { aiStatMockData } from "../aiStatItem/lib/mocks";
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
        {aiStatMockData.map((aiStatItem) => (
          <AIStatItem key={aiStatItem.analizLabel} props={aiStatItem} />
        ))}
      </div>
    </section>
  );
}

export default AIContentBanner;
