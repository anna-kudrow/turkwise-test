import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.css";

function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
    // Enhanced Header with Revenue Tracker & AI IQ Badge
    <header className={styles["page-header"]}>
      <div className={styles["header-content"]}>
        <div className={styles["header-left"]}>
          <div className={styles.breadcrumb}>
            <span className={styles["breadcrumb-item"]}>AI Yönetimi</span>
            <i className="fas fa-chevron-right"></i>
            <span className={styles["breadcrumb-item"]}>Envanter</span>
          </div>
          <h1 className={styles["page-title"]}>Akıllı Envanter Yönetimi</h1>
        </div>
        <div className={styles["header-actions"]}>
          {/* <!-- Revenue Potential Tracker - NEW --> */}
          <div className={styles["revenue-tracker"]} id="revenueTracker">
            <i className={`fas fa-coins ${styles["revenue-tracker-icon"]}`}></i>
            <div className={styles["revenue-info"]}>
              <div
                className={styles["revenue-potential"]}
                id="revenuePotential"
              >
                +1.247₺
              </div>
              <div className={styles["revenue-label"]}>
                Aylık Gelir Potansiyeli
              </div>
            </div>
          </div>
          {/* <!-- AI IQ Badge - Enhanced --> */}
          <div className={styles["ai-iq-badge"]} id="aiIqBadge">
            <i className={`fas fa-brain ${styles["ai-brain-icon"]}`}></i>
            <span className={styles["ai-iq-score"]} id="aiIqScore">
              847
            </span>
            <div className={styles["ai-iq-tooltip"]}>
              AI Zekanız: Her veri girişi AI'yı daha akıllı yapıyor!
            </div>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className={styles["theme-toggle"]}
          >
            <i
              className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}
              id="themeIcon"
            ></i>
          </button>
          <button className="btn btn-secondary" type="button">
            <i className="fas fa-download"></i>
            Dışa Aktar
          </button>
          <button className="btn btn-secondary" type="button">
            <i className="fas fa-upload"></i>
            İçe Aktar
          </button>
          <button className="btn btn-primary" type="button">
            <i className="fas fa-plus"></i>
            Ürün Ekle
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
