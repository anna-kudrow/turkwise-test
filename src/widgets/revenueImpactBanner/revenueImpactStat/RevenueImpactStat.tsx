import "./styles.css";

function RevenueImpactStat({
  statValue,
  statLabel,
}: {
  statValue: string;
  statLabel: string;
}) {
  return (
    <div className="revenue-impact-stat">
      <div className="revenue-impact-stat-value">{statValue}</div>
      <div className="revenue-impact-stat-label">{statLabel}</div>
    </div>
  );
}

export default RevenueImpactStat;
