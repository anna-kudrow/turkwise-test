import { revenueImpactStats } from "../revenueImpactStat/lib/mocks";
import RevenueImpactStat from "../revenueImpactStat/RevenueImpactStat";
import "./styles.css";

function RevenueImpactBanner() {
  return (
    <section className="revenue-impact-banner fade-in-up">
      <div className="revenue-impact-content">
        <div className="revenue-impact-title">
          <i className="fas fa-rocket"></i>
          Eksik Bilgileri Doldur, Gelirini Katla!
        </div>
        <p
          style={{
            marginBottom: 24,
            fontSize: 16,
            opacity: 0.9,
            color: "var(--neutral-700)",
          }}
        >
          Turkwise AI, eksik ürün bilgilerinizi analiz ederek gelir artış
          potansiyelinizi hesaplıyor. Aşağıdaki bilgi türlerini tamamladığınızda
          müşteri deneyimi ve satış performansınız dramatik şekilde artacak!
        </p>
        <div className="revenue-impact-stats">
          {revenueImpactStats.map((statItem) => (
            <RevenueImpactStat
              key={statItem.label}
              statValue={statItem.value}
              statLabel={statItem.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RevenueImpactBanner;
