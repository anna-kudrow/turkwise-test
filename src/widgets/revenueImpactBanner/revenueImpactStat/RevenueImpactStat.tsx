import styles from "./RevenueImpactStat.module.css";

function RevenueImpactStat({
  statValue,
  statLabel,
}: {
  statValue: string;
  statLabel: string;
}) {
  return (
    <div className={styles["revenue-impact-stat"]}>
      <div className={styles["revenue-impact-stat-value"]}>{statValue}</div>
      <div className={styles["revenue-impact-stat-label"]}>{statLabel}</div>
    </div>
  );
}

export default RevenueImpactStat;
