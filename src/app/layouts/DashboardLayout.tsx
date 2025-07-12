import { Link } from "react-router-dom";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container">
      {/* <!-- Enhanced Sidebar with Achievement Badges --> */}
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <i className="fas fa-brain"></i>
            Turkwise
          </div>
        </div>
        {/* <!-- Achievement Badges - Compact --> */}
        <div className="achievements-compact">
          <div className="achievements-title">Rozetler</div>
          <div className="badges-row">
            <div className="badge-mini earned">
              🏆<div className="badge-tooltip">Ürün Uzmanı (5/5)</div>
            </div>
            <div className="badge-mini earned">
              💎<div className="badge-tooltip">AI Antrenörü (10/10)</div>
            </div>
            <div className="badge-mini locked">
              🎯<div className="badge-tooltip">Satış Demiri (2/25)</div>
            </div>
            <div className="badge-mini locked">
              🚀<div className="badge-tooltip">Büyüme Hackeri (0/100)</div>
            </div>
            <div className="badge-mini locked">
              👑<div className="badge-tooltip">Satış Sultanı (0/500)</div>
            </div>
          </div>
        </div>
        <nav>
          <div className="nav-section">
            <div className="nav-title">Ana Menü</div>
            <Link to="/" className="nav-item">
              <i className="fas fa-home"></i>
              Ana Sayfa
            </Link>
          </div>
          <div className="nav-section">
            <div className="nav-title">AI Yönetimi</div>
            <Link to="/ai-management" className="nav-item">
              <i className="fas fa-robot"></i>
              AI Yönetimi
            </Link>
            <Link to="/inventory" className="nav-item active">
              <i className="fas fa-boxes"></i>
              Envanter
            </Link>
            <Link to="/performance" className="nav-item">
              <i className="fas fa-chart-bar"></i>
              Ürün Performansı
            </Link>
            <Link to="/optimization" className="nav-item">
              <i className="fas fa-cog"></i>
              AI Optimizasyon
            </Link>
          </div>
          <div className="nav-section">
            <div className="nav-title">Analiz</div>
            <Link to="#" className="nav-item">
              <i className="fas fa-chart-line"></i>
              Analiz
            </Link>
          </div>
          <div className="nav-section">
            <div className="nav-title">Topluluk</div>
            <Link to="#" className="nav-item">
              <i className="fas fa-users"></i>
              Topluluk
            </Link>
          </div>
          <div className="nav-section">
            <Link to="#" className="nav-item">
              <i className="fas fa-cog"></i>
              Ayarlar
            </Link>
            <Link to="#" className="nav-item">
              <i className="fas fa-question-circle"></i>
              Yardım ve Destek
            </Link>
          </div>
        </nav>
      </aside>
      {/* <!-- Mobile Menu Button --> */}
      <button className="mobile-menu-btn" type="button">
        <i className="fas fa-bars"></i>
      </button>
      {children}
    </div>
  );
}

export default DashboardLayout;
