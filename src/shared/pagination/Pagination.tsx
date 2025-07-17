import styles from "./Pagination.module.css";

function Pagination() {
  return (
    <div className={styles.pagination}>
      <div className={styles["pagination-info"]}>
        <strong>1-25</strong> arası gösteriliyor (toplam <strong>2.847</strong>{" "}
        ürün)
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
  );
}

export default Pagination;
