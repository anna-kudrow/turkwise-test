import "./styles.css";

function Header() {
  return (
    // Enhanced Header with Revenue Tracker & AI IQ Badge
    <header className="page-header">
      <div className="header-content">
        <div className="header-left">
          <div className="breadcrumb">
            <span className="breadcrumb-item">AI Yönetimi</span>
            <i className="fas fa-chevron-right"></i>
            <span className="breadcrumb-item">Envanter</span>
          </div>
          <h1 className="page-title">Akıllı Envanter Yönetimi</h1>
        </div>
        <div className="header-actions">
          {/* <!-- Revenue Potential Tracker - NEW --> */}
          <div className="revenue-tracker" id="revenueTracker">
            <i className="fas fa-coins revenue-tracker-icon"></i>
            <div className="revenue-info">
              <div className="revenue-potential" id="revenuePotential">
                +1.247₺
              </div>
              <div className="revenue-label">Aylık Gelir Potansiyeli</div>
            </div>
          </div>
          {/* <!-- AI IQ Badge - Enhanced --> */}
          <div className="ai-iq-badge" id="aiIqBadge">
            <i className="fas fa-brain ai-brain-icon"></i>
            <span className="ai-iq-score" id="aiIqScore">
              847
            </span>
            <div className="ai-iq-tooltip">
              AI Zekanız: Her veri girişi AI'yı daha akıllı yapıyor!
            </div>
          </div>
          <button type="button" className="theme-toggle">
            <i className="fas fa-moon" id="themeIcon"></i>
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
