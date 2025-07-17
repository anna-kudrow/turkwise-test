/** biome-ignore-all lint/a11y/noLabelWithoutControl: <labels are without inputs> */

import styles from "./FilterSystemWidget.module.css";

function FilterSystemWidget() {
  return (
    <section className={`${styles["filter-system"]} fade-in-up`}>
      <div className={styles["filter-header"]}>
        <div className={styles["filter-title"]}>
          <i className="fas fa-filter"></i>
          Gelişmiş Filtreleme Sistemi
        </div>
        <button className={styles["filter-toggle"]} type="button">
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
      <div className={styles["filter-content"]} id="filterContent">
        <div className={styles["filter-grid"]}>
          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>Ürün Kategorisi</label>
            <select className={styles["filter-input"]} id="categoryFilter">
              <option value="">Tüm Kategoriler</option>
              <option value="moda">Moda & Tekstil</option>
              <option value="elektronik">Elektronik</option>
              <option value="kozmetik">Kozmetik & Kişisel Bakım</option>
              <option value="ev">Ev & Yaşam</option>
              <option value="spor">Spor & Outdoor</option>
              <option value="kitap">Kitap & Hobi</option>
              <option value="bebek">Anne & Bebek</option>
              <option value="otomobil">Otomotiv</option>
            </select>
          </div>
          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>Gelir Potansiyeli</label>
            <select className={styles["filter-input"]} id="revenueFilter">
              <option value="">Tümü</option>
              <option value="high">Yüksek (+50₺/ay)</option>
              <option value="medium">Orta (10-50₺/ay)</option>
              <option value="low">Düşük (0-10₺/ay)</option>
            </select>
          </div>
          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>Eksik Bilgi Durumu</label>
            <select className={styles["filter-input"]} id="missingInfoFilter">
              <option value="">Tümü</option>
              <option value="critical">Kritik Eksiklikler</option>
              <option value="revenue">Gelir Etkileyen</option>
              <option value="return">İade Etkileyen</option>
              <option value="support">Destek Etkileyen</option>
            </select>
          </div>
          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>Stok Durumu</label>
            <select className={styles["filter-input"]} id="stockFilter">
              <option value="">Tümü</option>
              <option value="high">Yüksek Stok (100+)</option>
              <option value="medium">Orta Stok (10-99)</option>
              <option value="low">Düşük Stok (1-9)</option>
              <option value="out">Stokta Yok</option>
            </select>
          </div>
          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>
              AI Optimizasyon Skoru
            </label>
            <select className={styles["filter-input"]} id="aiScoreFilter">
              <option value="">Tümü</option>
              <option value="excellent">Mükemmel (90-100%)</option>
              <option value="good">İyi (70-89%)</option>
              <option value="average">Orta (50-69%)</option>
              <option value="poor">Düşük (0-49%)</option>
            </select>
          </div>
          <div className={styles["filter-group"]}>
            <label className={styles["filter-label"]}>Son Güncelleme</label>
            <select className={styles["filter-input"]} id="updateFilter">
              <option value="">Tümü</option>
              <option value="today">Bugün</option>
              <option value="week">Bu Hafta</option>
              <option value="month">Bu Ay</option>
              <option value="older">Daha Eski</option>
            </select>
          </div>
        </div>
        <div className={styles["marketplace-section"]}>
          <div className={styles["marketplace-grid"]}>
            <div className={styles["marketplace-category"]}>
              <div className={styles["category-title"]}>
                <i className="fas fa-store"></i>
                Pazaryerleri
              </div>
              <div className={styles["marketplace-options"]}>
                <label
                  className={`${styles["marketplace-option"]} ${styles.active}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    checked
                    data-marketplace="trendyol"
                  />
                  TY
                </label>
                <label
                  className={`${styles["marketplace-option"]} ${styles["coming-soon"]}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    disabled
                    data-marketplace="hepsiburada"
                  />
                  Hepsiburada
                </label>
                <label
                  className={`${styles["marketplace-option"]} ${styles["coming-soon"]}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    disabled
                    data-marketplace="amazon"
                  />
                  Amazon
                </label>
                <label
                  className={`${styles["marketplace-option"]} ${styles["coming-soon"]}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    disabled
                    data-marketplace="n11"
                  />
                  n11
                </label>
              </div>
            </div>
            <div className={styles["marketplace-category"]}>
              <div className={styles["category-title"]}>
                <i className="fas fa-globe"></i>
                Web Site Sağlayıcıları
              </div>
              <div className={styles["marketplace-options"]}>
                <label
                  className={`${styles["marketplace-option"]} ${styles["coming-soon"]}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    disabled
                    data-platform="shopify"
                  />
                  Shopify
                </label>
                <label
                  className={`${styles["marketplace-option"]} ${styles["coming-soon"]}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    disabled
                    data-platform="ikas"
                  />
                  İkAs
                </label>
                <label
                  className={`${styles["marketplace-option"]} ${styles["coming-soon"]}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    disabled
                    data-platform="ticimax"
                  />
                  Ticimax
                </label>
                <label
                  className={`${styles["marketplace-option"]} ${styles["coming-soon"]}`}
                >
                  <input
                    type="checkbox"
                    className={styles["marketplace-checkbox"]}
                    disabled
                    data-platform="woocommerce"
                  />
                  WooCommerce
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterSystemWidget;
