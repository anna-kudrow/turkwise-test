import AIStatItem from "../aiStatItem/AIStatItem";
import { aiStatData } from "../config/ai-content-data";
import styles from "./AIContentBanner.module.css";

function AIContentBanner() {
  return (
    <section className={`${styles["ai-content-section"]} fade-in-up`}>
      <div className={styles["ai-header"]}>
        <div className={styles["ai-title"]}>
          <div className={styles["ai-icon"]}>
            <i className="fas fa-brain"></i>
          </div>
          AI İçerik Zekası & Doluluk Analizi
        </div>
        <button className="btn btn-primary" type="button">
          <i className="fas fa-chart-pie"></i>
          Detaylı Rapor
        </button>
      </div>
      <div className={styles["completion-stats"]}>
        {aiStatData.map((aiStatItem) => (
          <AIStatItem key={aiStatItem.analizLabel} props={aiStatItem} />
        ))}
      </div>
    </section>
  );
}

export default AIContentBanner;
