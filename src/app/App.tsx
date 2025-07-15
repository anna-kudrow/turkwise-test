/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../global.css";
import InventoryPage from "../pages/inventoryPage/InventoryPage";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";

function App() {
  return (
    <>
      <DashboardLayout>
        <InventoryPage />
      </DashboardLayout>

      {/* <!-- Confetti Animation Container --> */}
      <div id="confettiContainer" className="confetti-container"></div>
      {/* <!-- Smart Suggestion Popup --> */}
      <div id="smartSuggestion" className="smart-suggestion">
        <div className="suggestion-header">
          <div className="suggestion-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <div className="suggestion-title">AI Önerisi</div>
        </div>
        <div className="suggestion-content" id="suggestionContent">
          Bu ürün için "Kullanım Talimatları" eklerseniz iade oranınız %15
          azalabilir!
        </div>
        <div className="suggestion-actions">
          <button className="suggestion-reject" type="button">
            <i className="fas fa-times"></i> Hayır
          </button>
          <button className="suggestion-accept" type="button">
            <i className="fas fa-check"></i> Ekle (+5 puan)
          </button>
        </div>
      </div>
      {/* <!-- Revenue Boost Modal - NEW --> */}
      <div id="revenueBoostModal" className="revenue-boost-modal">
        <div className="revenue-boost-content">
          <div className="revenue-boost-header">
            <div className="revenue-boost-title">🚀 Gelir Artış Fırsatı!</div>
            <div className="revenue-boost-subtitle">
              Bu ürün için hemen gelir artırabilirsiniz
            </div>
          </div>
          <div className="revenue-boost-body">
            <div className="revenue-potential-summary">
              <div className="potential-amount" id="potentialAmount">
                +67₺
              </div>
              <div className="potential-description">
                Tahmini aylık gelir artışı
              </div>
            </div>
            <div className="missing-fields-list" id="missingFieldsList">
              {/* <!-- Dynamic content will be inserted here */}
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "flex-end",
              }}
            >
              <button className="btn btn-secondary" type="button">
                <i className="fas fa-times"></i>
                Şimdi Değil
              </button>
              <button className="btn btn-primary" type="button">
                <i className="fas fa-magic"></i>
                AI ile Hızlı Doldur
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Enhanced Properties Modal with Smart Fields --> */}
      <div id="propertiesModal" className="modal">
        <div className="modal-content" style={{ width: 1200 }}>
          <div className="modal-header">
            <h2 className="modal-title">
              <i className="fas fa-cog"></i>
              Akıllı Ürün Özellikleri & Gelir Artışı
            </h2>
            <button className="modal-close" type="button">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div id="propertiesContent">
              {/* <!-- Content will be dynamically loaded based on category --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
