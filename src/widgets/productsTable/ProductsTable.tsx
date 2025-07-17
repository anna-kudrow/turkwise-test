import {
  ActionButtonGroup,
  ErrorActionButton,
  PropertiesActionButton,
  ViewActionButton,
} from "../../shared/button/actionButton/actionButtonGroup/ActionButtonGroup";
import styles from "./ProductsTable.module.css";

function ProductsTable() {
  return (
    <section className={`${styles["data-table-section"]} fade-in-up`}>
      <div className={styles["table-controls"]}>
        <div className={styles["table-left-controls"]}>
          <div className={styles["search-container"]}>
            <i className={`fas fa-search ${styles["search-icon"]}`}></i>
            <input
              type="text"
              className={styles["search-input"]}
              placeholder="Ürün adı, SKU, barkod ile arama yapın..."
              id="searchInput"
            />
            <div className={styles["column-selector"]}>
              <button className={styles["column-btn"]} type="button">
                <i className="fas fa-columns"></i>
                Sütunları Özelleştir
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className={styles["column-dropdown"]} id="columnDropdown">
                <div className={styles["column-dropdown-header"]}>
                  Görünür Sütunlar
                </div>
                <div className={styles["column-options"]}>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="image"
                    />
                    Görsel
                  </label>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="name"
                    />
                    Ürün Adı
                  </label>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="category"
                    />
                    Kategori
                  </label>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="price"
                    />
                    Fiyat
                  </label>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="stock"
                    />
                    Stok
                  </label>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="marketplace"
                    />
                    Satış Kanalları
                  </label>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="ai-score"
                    />
                    AI Skoru
                  </label>
                  <label className={styles["column-option"]}>
                    <input
                      type="checkbox"
                      className={styles["column-checkbox"]}
                      checked
                      data-column="revenue-potential"
                    />
                    Gelir Potansiyeli
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["table-right-controls"]}>
            <select className={styles["filter-input"]}>
              <option>25 / sayfa</option>
              <option>50 / sayfa</option>
              <option>100 / sayfa</option>
              <option>250 / sayfa</option>
            </select>
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className={styles["product-table"]}>
            <thead>
              <tr>
                <th data-column="image">Ürün</th>
                <th data-column="category">Kategori</th>
                <th data-column="price">Fiyat</th>
                <th data-column="stock">Stok</th>
                <th data-column="marketplace">Satış Kanalları</th>
                <th data-column="revenue-potential">💰 Gelir Potansiyeli</th>
                <th data-column="ai-score">AI Skoru</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {/* Moda & Tekstil Ürünü - High Revenue Potential */}
              <tr
                className={`${styles["product-row"]} ${styles["revenue-opportunity"]}`}
              >
                <td data-column="image">
                  <div className={styles["product-image-container"]}>
                    <div className={styles["missing-info-indicator"]}></div>
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=64&h=64&fit=crop&crop=center"
                      alt="T-Shirt"
                      className={styles["product-image"]}
                    />
                    <div className={styles["product-info"]}>
                      <div className={styles["product-name"]}>
                        Kadın Oversize Basic T-Shirt %100 Pamuk
                      </div>
                      <div className={styles["product-sku"]}>
                        TSH-OVR-001-WHT-L
                      </div>
                    </div>
                    <button
                      className={styles["variants-toggle"]} /* onClick={...} */
                      type="button"
                    >
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </td>
                <td data-column="category">
                  <span className={styles["category-badge"]}>
                    <i className="fas fa-tshirt"></i>
                    Moda & Tekstil
                  </span>
                </td>
                <td data-column="price">
                  <div className={styles["price-container"]}>
                    <div className={styles["price-current"]}>₺89.90</div>
                    <div className={styles["price-old"]}>₺119.90</div>
                  </div>
                </td>
                <td data-column="stock">
                  <div className={styles["stock-container"]}>
                    <div
                      className={`${styles["stock-indicator"]} ${styles["stock-high"]}`}
                    ></div>
                    <span className={styles["stock-value"]}>156</span>
                  </div>
                </td>
                <td data-column="marketplace">
                  <div className={styles["marketplace-badges"]}>
                    <span
                      className={
                        styles["marketplace-badge"] +
                        " " +
                        styles["badge-trendyol"]
                      }
                    >
                      TY
                    </span>
                  </div>
                </td>
                <td data-column="revenue-potential">
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <div
                      style={{
                        color: "var(--revenue-color)",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      +67₺/ay
                    </div>
                    <div style={{ fontSize: 11, color: "var(--neutral-500)" }}>
                      3 eksik bilgi
                    </div>
                  </div>
                </td>
                <td data-column="ai-score">
                  <div className={styles["ai-score-container"]}>
                    <div className={styles["ai-score-bar"]}>
                      <div
                        className={styles["ai-score-fill"]}
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                    <span className={styles["ai-score-value"]}>87%</span>
                  </div>
                </td>
                <td>
                  <ActionButtonGroup>
                    <ErrorActionButton
                      onClick={() => console.log("Error clicked")}
                    />
                    <ViewActionButton
                      onClick={() => console.log("View clicked")}
                    />
                    <PropertiesActionButton
                      onClick={() => console.log("Properties clicked")}
                    />
                  </ActionButtonGroup>
                </td>
              </tr>
              {/* Product Variants Row */}
              <tr
                className={styles["product-variants"]}
                id="variants-product-1"
              >
                <td colSpan={8}>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>Beyaz - XS</div>
                      <div className={styles["variant-specs"]}>
                        Stok: 23 • Gelir Potansiyeli: +12₺/ay
                      </div>
                    </div>
                  </div>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>Beyaz - S</div>
                      <div className={styles["variant-specs"]}>
                        Stok: 45 • Gelir Potansiyeli: +18₺/ay
                      </div>
                    </div>
                  </div>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>Siyah - L</div>
                      <div className={styles["variant-specs"]}>
                        Stok: 21 • Gelir Potansiyeli: +15₺/ay
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* Elektronik Ürünü - Medium Revenue Potential */}
              <tr className={styles["product-row"]}>
                <td data-column="image">
                  <div className={styles["product-image-container"]}>
                    <img
                      src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=64&h=64&fit=crop&crop=center"
                      alt="iPhone"
                      className={styles["product-image"]}
                    />
                    <div className={styles["product-info"]}>
                      <div className={styles["product-name"]}>
                        iPhone 15 Pro Max 256GB Titanium
                      </div>
                      <div className={styles["product-sku"]}>
                        IPH-15PM-256-TIT
                      </div>
                    </div>
                    <button
                      className={styles["variants-toggle"]} /* onClick={...} */
                      type="button"
                    >
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </td>
                <td data-column="category">
                  <span
                    className={styles["category-badge"]}
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    }}
                  >
                    <i className="fas fa-mobile-alt"></i>
                    Elektronik
                  </span>
                </td>
                <td data-column="price">
                  <div className={styles["price-container"]}>
                    <div className={styles["price-current"]}>₺54.999</div>
                  </div>
                </td>
                <td data-column="stock">
                  <div className={styles["stock-container"]}>
                    <div
                      className={`${styles["stock-indicator"]} ${styles["stock-medium"]}`}
                    ></div>
                    <span className={styles["stock-value"]}>8</span>
                  </div>
                </td>
                <td data-column="marketplace">
                  <div className={styles["marketplace-badges"]}>
                    <span
                      className={
                        styles["marketplace-badge"] +
                        " " +
                        styles["badge-trendyol"]
                      }
                    >
                      TY
                    </span>
                  </div>
                </td>
                <td data-column="revenue-potential">
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <div
                      style={{
                        color: "var(--warning-color)",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      +23₺/ay
                    </div>
                    <div style={{ fontSize: 11, color: "var(--neutral-500)" }}>
                      1 eksik bilgi
                    </div>
                  </div>
                </td>
                <td data-column="ai-score">
                  <div className={styles["ai-score-container"]}>
                    <div className={styles["ai-score-bar"]}>
                      <div
                        className={styles["ai-score-fill"]}
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                    <span className={styles["ai-score-value"]}>94%</span>
                  </div>
                </td>
                <td>
                  <ActionButtonGroup>
                    <ErrorActionButton
                      onClick={() => console.log("Error clicked")}
                    />
                    <ViewActionButton
                      onClick={() => console.log("View clicked")}
                    />
                    <PropertiesActionButton
                      onClick={() => console.log("Properties clicked")}
                    />
                  </ActionButtonGroup>
                </td>
              </tr>
              {/* Variants for iPhone */}
              <tr
                className={styles["product-variants"]}
                id="variants-product-2"
              >
                <td colSpan={8}>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>
                        256GB - Titanium Natural
                      </div>
                      <div className={styles["variant-specs"]}>
                        Stok: 3 • Gelir Potansiyeli: +8₺/ay
                      </div>
                    </div>
                  </div>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>
                        512GB - Titanium Natural
                      </div>
                      <div className={styles["variant-specs"]}>
                        Stok: 2 • Gelir Potansiyeli: +7₺/ay
                      </div>
                    </div>
                  </div>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>
                        1TB - Titanium Natural
                      </div>
                      <div className={styles["variant-specs"]}>
                        Stok: 3 • Gelir Potansiyeli: +8₺/ay
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* Kozmetik Ürünü - Critical Missing Info */}
              <tr
                className={`${styles["product-row"]} ${styles["missing-critical-info"]}`}
              >
                <td data-column="image">
                  <div className={styles["product-image-container"]}>
                    <div className={styles["missing-info-indicator"]}></div>
                    <img
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=64&h=64&fit=crop&crop=center"
                      alt="Serum"
                      className={styles["product-image"]}
                    />
                    <div className={styles["product-info"]}>
                      <div className={styles["product-name"]}>
                        Hyaluronic Acid Serum %2 + B5 30ml
                      </div>
                      <div className={styles["product-sku"]}>
                        COS-HYA-30-001
                      </div>
                    </div>
                    <button
                      className={styles["variants-toggle"]} /* onClick={...} */
                      type="button"
                    >
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </td>
                <td data-column="category">
                  <span
                    className={styles["category-badge"]}
                    style={{
                      background: "linear-gradient(135deg, #ec4899, #f97316)",
                    }}
                  >
                    <i className="fas fa-heart"></i>
                    Kozmetik
                  </span>
                </td>
                <td data-column="price">
                  <div className={styles["price-container"]}>
                    <div className={styles["price-current"]}>₺189.90</div>
                    <div className={styles["price-old"]}>₺249.90</div>
                  </div>
                </td>
                <td data-column="stock">
                  <div className={styles["stock-container"]}>
                    <div
                      className={`${styles["stock-indicator"]} ${styles["stock-low"]}`}
                    ></div>
                    <span className={styles["stock-value"]}>3</span>
                  </div>
                </td>
                <td data-column="marketplace">
                  <div className={styles["marketplace-badges"]}>
                    <span
                      className={
                        styles["marketplace-badge"] +
                        " " +
                        styles["badge-trendyol"]
                      }
                    >
                      TY
                    </span>
                  </div>
                </td>
                <td data-column="revenue-potential">
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <div
                      style={{
                        color: "var(--error-color)",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      -34₺/ay
                    </div>
                    <div style={{ fontSize: 11, color: "var(--error-color)" }}>
                      5 kritik eksik
                    </div>
                  </div>
                </td>
                <td data-column="ai-score">
                  <div className={styles["ai-score-container"]}>
                    <div className={styles["ai-score-bar"]}>
                      <div
                        className={styles["ai-score-fill"]}
                        style={{ width: "76%" }}
                      ></div>
                    </div>
                    <span className={styles["ai-score-value"]}>76%</span>
                  </div>
                </td>
                <td>
                  <ActionButtonGroup>
                    <ErrorActionButton
                      onClick={() => console.log("Error clicked")}
                    />
                    <ViewActionButton
                      onClick={() => console.log("View clicked")}
                    />
                    <PropertiesActionButton
                      onClick={() => console.log("Properties clicked")}
                    />
                  </ActionButtonGroup>
                </td>
              </tr>
              {/* Variants for Kozmetik */}
              <tr
                className={styles["product-variants"]}
                id="variants-product-3"
              >
                <td colSpan={8}>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>
                        30ml - Standart
                      </div>
                      <div className={styles["variant-specs"]}>
                        Stok: 3 • Kritik bilgi eksik: Kullanım talimatları
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* Spor & Outdoor Ürünü - Optimized */}
              <tr className={styles["product-row"]}>
                <td data-column="image">
                  <div className={styles["product-image-container"]}>
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=64&h=64&fit=crop&crop=center"
                      alt="Yoga Mat"
                      className={styles["product-image"]}
                    />
                    <div className={styles["product-info"]}>
                      <div className={styles["product-name"]}>
                        Premium Yoga Matı 6mm Anti-Slip
                      </div>
                      <div className={styles["product-sku"]}>
                        SPT-YG-MAT-6MM
                      </div>
                    </div>
                    <button
                      className={styles["variants-toggle"]} /* onClick={...} */
                      type="button"
                    >
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </td>
                <td data-column="category">
                  <span
                    className={styles["category-badge"]}
                    style={{
                      background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    }}
                  >
                    <i className="fas fa-dumbbell"></i>
                    Spor & Outdoor
                  </span>
                </td>
                <td data-column="price">
                  <div className={styles["price-container"]}>
                    <div className={styles["price-current"]}>₺149.90</div>
                    <div className={styles["price-old"]}>₺199.90</div>
                  </div>
                </td>
                <td data-column="stock">
                  <div className={styles["stock-container"]}>
                    <div
                      className={`${styles["stock-indicator"]} ${styles["stock-high"]}`}
                    ></div>
                    <span className={styles["stock-value"]}>67</span>
                  </div>
                </td>
                <td data-column="marketplace">
                  <div className={styles["marketplace-badges"]}>
                    <span
                      className={
                        styles["marketplace-badge"] +
                        " " +
                        styles["badge-trendyol"]
                      }
                    >
                      TY
                    </span>
                  </div>
                </td>
                <td data-column="revenue-potential">
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <div
                      style={{
                        color: "var(--success-color)",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      ✓ Optimized
                    </div>
                    <div
                      style={{ fontSize: 11, color: "var(--success-color)" }}
                    >
                      Tam dolu
                    </div>
                  </div>
                </td>
                <td data-column="ai-score">
                  <div className={styles["ai-score-container"]}>
                    <div className={styles["ai-score-bar"]}>
                      <div
                        className={styles["ai-score-fill"]}
                        style={{ width: "91%" }}
                      ></div>
                    </div>
                    <span className={styles["ai-score-value"]}>91%</span>
                  </div>
                </td>
                <td>
                  <ActionButtonGroup>
                    <ErrorActionButton
                      onClick={() => console.log("Error clicked")}
                    />
                    <ViewActionButton
                      onClick={() => console.log("View clicked")}
                    />
                    <PropertiesActionButton
                      onClick={() => console.log("Properties clicked")}
                    />
                  </ActionButtonGroup>
                </td>
              </tr>
              {/* Variants for Spor */}
              <tr
                className={styles["product-variants"]}
                id="variants-product-4"
              >
                <td colSpan={8}>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>6mm - Mor</div>
                      <div className={styles["variant-specs"]}>
                        Stok: 23 • Durum: Optimize edilmiş
                      </div>
                    </div>
                  </div>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>6mm - Mavi</div>
                      <div className={styles["variant-specs"]}>
                        Stok: 21 • Durum: Optimize edilmiş
                      </div>
                    </div>
                  </div>
                  <div className={styles["variant-item"]}>
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=32&h=32&fit=crop&crop=center"
                      alt="Variant"
                      className={styles["variant-image"]}
                    />
                    <div className={styles["variant-details"]}>
                      <div className={styles["variant-name"]}>8mm - Pembe</div>
                      <div className={styles["variant-specs"]}>
                        Stok: 23 • Durum: Optimize edilmiş
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.pagination}>
          <div className={styles["pagination-info"]}>
            <strong>1-25</strong> arası gösteriliyor (toplam{" "}
            <strong>2.847</strong> ürün)
          </div>
          <div className={styles["pagination-controls"]}>
            <button className={styles["page-btn"]} type="button" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className={`${styles["page-btn"]} ${styles.active}`}
              type="button"
            >
              1
            </button>
            <button className={styles["page-btn"]} type="button">
              2
            </button>
            <button className={styles["page-btn"]} type="button">
              3
            </button>
            <button className={styles["page-btn"]} type="button">
              4
            </button>
            <button className={styles["page-btn"]} type="button">
              5
            </button>
            <span style={{ padding: "0 12px", color: "var(--neutral-400)" }}>
              ...
            </span>
            <button className={styles["page-btn"]} type="button">
              114
            </button>
            <button className={styles["page-btn"]} type="button">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsTable;
