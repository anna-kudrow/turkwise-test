import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
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
              <Link to="#" className="nav-item">
                <i className="fas fa-home"></i>
                Ana Sayfa
              </Link>
            </div>
            <div className="nav-section">
              <div className="nav-title">AI Yönetimi</div>
              <Link to="#" className="nav-item">
                <i className="fas fa-robot"></i>
                AI Yönetimi
              </Link>
              <Link to="#" className="nav-item active">
                <i className="fas fa-boxes"></i>
                Envanter
              </Link>
              <Link to="#" className="nav-item">
                <i className="fas fa-chart-bar"></i>
                Ürün Performansı
              </Link>
              <Link to="#" className="nav-item">
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
        <button className="mobile-menu-btn">
          <i className="fas fa-bars"></i>
        </button>
        {/* <!-- Main Content --> */}
        <main className="main-content">
          {/* <!-- Enhanced Header with Revenue Tracker & AI IQ Badge --> */}
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
                <button className="theme-toggle">
                  <i className="fas fa-moon" id="themeIcon"></i>
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-download"></i>
                  Dışa Aktar
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-upload"></i>
                  İçe Aktar
                </button>
                <button className="btn btn-primary">
                  <i className="fas fa-plus"></i>
                  Ürün Ekle
                </button>
              </div>
            </div>
          </header>
          {/* <!-- Enhanced Revenue Impact Banner - NEW --> */}
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
                potansiyelinizi hesaplıyor. Aşağıdaki bilgi türlerini
                tamamladığınızda müşteri deneyimi ve satış performansınız
                dramatik şekilde artacak!
              </p>
              <div className="revenue-impact-stats">
                <div className="revenue-impact-stat">
                  <div className="revenue-impact-stat-value">+234₺</div>
                  <div className="revenue-impact-stat-label">
                    Gelir Artışı Bilgileri
                  </div>
                </div>
                <div className="revenue-impact-stat">
                  <div className="revenue-impact-stat-value">-15%</div>
                  <div className="revenue-impact-stat-label">İade Azaltma</div>
                </div>
                <div className="revenue-impact-stat">
                  <div className="revenue-impact-stat-value">+67%</div>
                  <div className="revenue-impact-stat-label">
                    Sipariş Artışı
                  </div>
                </div>
                <div className="revenue-impact-stat">
                  <div className="revenue-impact-stat-value">24/7</div>
                  <div className="revenue-impact-stat-label">
                    AI Müşteri Desteği
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- AI Content Intelligence Section - Enhanced --> */}
          <section className="ai-content-section fade-in-up">
            <div className="ai-header">
              <div className="ai-title">
                <div className="ai-icon">
                  <i className="fas fa-brain"></i>
                </div>
                AI İçerik Zekası & Doluluk Analizi
              </div>
              <button className="btn btn-primary">
                <i className="fas fa-chart-pie"></i>
                Detaylı Rapor
              </button>
            </div>
            <div className="completion-stats">
              <div
                className="stat-item"
                onclick="openHelpModal('urun-aciklama')"
              >
                <div className="stat-help-icon">
                  <i className="fas fa-question"></i>
                </div>
                <div className="stat-label">Ürün Açıklaması Tamamlanma</div>
                <div className="stat-value">87%</div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-fill"
                    style={{ width: "87%" }}
                  ></div>
                </div>
                <div className="stat-change positive">
                  <i className="fas fa-arrow-up"></i>
                  +5.2% bu hafta
                </div>
              </div>
              <div
                className="stat-item"
                onclick="openHelpModal('gorsel-optimizasyon')"
              >
                <div className="stat-help-icon">
                  <i className="fas fa-question"></i>
                </div>
                <div className="stat-label">Görsel Optimizasyonu</div>
                <div className="stat-value">94%</div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-fill"
                    style={{ width: "94%" }}
                  ></div>
                </div>
                <div className="stat-change positive">
                  <i className="fas fa-arrow-up"></i>
                  +2.1% bu hafta
                </div>
              </div>
              <div
                className="stat-item"
                onclick="openHelpModal('seo-optimizasyon')"
              >
                <div className="stat-help-icon">
                  <i className="fas fa-question"></i>
                </div>
                <div className="stat-label">SEO Optimizasyonu</div>
                <div className="stat-value">76%</div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-fill"
                    style={{ width: "76%" }}
                  ></div>
                </div>
                <div className="stat-change positive">
                  <i className="fas fa-arrow-up"></i>
                  +8.3% bu hafta
                </div>
              </div>
              <div
                className="stat-item"
                onclick="openHelpModal('kategori-ozellikleri')"
              >
                <div className="stat-help-icon">
                  <i className="fas fa-question"></i>
                </div>
                <div className="stat-label">Kategori Özellikleri</div>
                <div className="stat-value">68%</div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-fill"
                    style={{ width: "68%" }}
                  ></div>
                </div>
                <div className="stat-change positive">
                  <i className="fas fa-arrow-up"></i>
                  +12.7% bu hafta
                </div>
              </div>
              <div
                className="stat-item"
                onclick="openHelpModal('fiyat-optimizasyon')"
              >
                <div className="stat-help-icon">
                  <i className="fas fa-question"></i>
                </div>
                <div className="stat-label">Fiyat Optimizasyonu</div>
                <div className="stat-value">91%</div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-fill"
                    style={{ width: "91%" }}
                  ></div>
                </div>
                <div className="stat-change positive">
                  <i className="fas fa-arrow-up"></i>
                  +3.4% bu hafta
                </div>
              </div>
              <div
                className="stat-item"
                onclick="openHelpModal('genel-ai-skor')"
              >
                <div className="stat-help-icon">
                  <i className="fas fa-question"></i>
                </div>
                <div className="stat-label">Genel AI Skoru</div>
                <div className="stat-value">84%</div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-fill"
                    style={{ width: "84%" }}
                  ></div>
                </div>
                <div className="stat-change positive">
                  <i className="fas fa-arrow-up"></i>
                  +6.8% bu hafta
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Advanced Filter System --> */}
          <section className="filter-system fade-in-up">
            <div className="filter-header">
              <div className="filter-title">
                <i className="fas fa-filter"></i>
                Gelişmiş Filtreleme Sistemi
              </div>
              <button className="filter-toggle" onclick="toggleFilters()">
                <i className="fas fa-chevron-up"></i>
              </button>
            </div>
            <div className="filter-content" id="filterContent">
              <div className="filter-grid">
                <div className="filter-group">
                  <label className="filter-label">Ürün Kategorisi</label>
                  <select className="filter-input" id="categoryFilter">
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
                <div className="filter-group">
                  <label className="filter-label">Gelir Potansiyeli</label>
                  <select className="filter-input" id="revenueFilter">
                    <option value="">Tümü</option>
                    <option value="high">Yüksek (+50₺/ay)</option>
                    <option value="medium">Orta (10-50₺/ay)</option>
                    <option value="low">Düşük (0-10₺/ay)</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label className="filter-label">Eksik Bilgi Durumu</label>
                  <select className="filter-input" id="missingInfoFilter">
                    <option value="">Tümü</option>
                    <option value="critical">Kritik Eksiklikler</option>
                    <option value="revenue">Gelir Etkileyen</option>
                    <option value="return">İade Etkileyen</option>
                    <option value="support">Destek Etkileyen</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label className="filter-label">Stok Durumu</label>
                  <select className="filter-input" id="stockFilter">
                    <option value="">Tümü</option>
                    <option value="high">Yüksek Stok (100+)</option>
                    <option value="medium">Orta Stok (10-99)</option>
                    <option value="low">Düşük Stok (1-9)</option>
                    <option value="out">Stokta Yok</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label className="filter-label">AI Optimizasyon Skoru</label>
                  <select className="filter-input" id="aiScoreFilter">
                    <option value="">Tümü</option>
                    <option value="excellent">Mükemmel (90-100%)</option>
                    <option value="good">İyi (70-89%)</option>
                    <option value="average">Orta (50-69%)</option>
                    <option value="poor">Düşük (0-49%)</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label className="filter-label">Son Güncelleme</label>
                  <select className="filter-input" id="updateFilter">
                    <option value="">Tümü</option>
                    <option value="today">Bugün</option>
                    <option value="week">Bu Hafta</option>
                    <option value="month">Bu Ay</option>
                    <option value="older">Daha Eski</option>
                  </select>
                </div>
              </div>
              <div className="marketplace-section">
                <div className="marketplace-grid">
                  <div className="marketplace-category">
                    <div className="category-title">
                      <i className="fas fa-store"></i>
                      Pazaryerleri
                    </div>
                    <div className="marketplace-options">
                      <label className="marketplace-option active">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
                          checked
                          data-marketplace="trendyol"
                        />
                        TY
                      </label>
                      <label className="marketplace-option coming-soon">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
                          disabled
                          data-marketplace="hepsiburada"
                        />
                        Hepsiburada
                      </label>
                      <label className="marketplace-option coming-soon">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
                          disabled
                          data-marketplace="amazon"
                        />
                        Amazon
                      </label>
                      <label className="marketplace-option coming-soon">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
                          disabled
                          data-marketplace="n11"
                        />
                        n11
                      </label>
                    </div>
                  </div>
                  <div className="marketplace-category">
                    <div className="category-title">
                      <i className="fas fa-globe"></i>
                      Web Site Sağlayıcıları
                    </div>
                    <div className="marketplace-options">
                      <label className="marketplace-option coming-soon">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
                          disabled
                          data-platform="shopify"
                        />
                        Shopify
                      </label>
                      <label className="marketplace-option coming-soon">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
                          disabled
                          data-platform="ikas"
                        />
                        İkAs
                      </label>
                      <label className="marketplace-option coming-soon">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
                          disabled
                          data-platform="ticimax"
                        />
                        Ticimax
                      </label>
                      <label className="marketplace-option coming-soon">
                        <input
                          type="checkbox"
                          className="marketplace-checkbox"
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
          {/* <!-- Enhanced Data Table with Revenue Indicators --> */}
          <section className="data-table-section fade-in-up">
            <div className="table-controls">
              <div className="table-left-controls">
                <div className="search-container">
                  <i className="fas fa-search search-icon"></i>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Ürün adı, SKU, barkod ile arama yapın..."
                    id="searchInput"
                  />
                  <div className="column-selector">
                    <button
                      className="column-btn"
                      onclick="toggleColumnSelector()"
                    >
                      <i className="fas fa-columns"></i>
                      Sütunları Özelleştir
                      <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className="column-dropdown" id="columnDropdown">
                      <div className="column-dropdown-header">
                        Görünür Sütunlar
                      </div>
                      <div className="column-options">
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="image"
                          />
                          Görsel
                        </label>
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="name"
                          />
                          Ürün Adı
                        </label>
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="category"
                          />
                          Kategori
                        </label>
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="price"
                          />
                          Fiyat
                        </label>
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="stock"
                          />
                          Stok
                        </label>
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="marketplace"
                          />
                          Satış Kanalları
                        </label>
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="ai-score"
                          />
                          AI Skoru
                        </label>
                        <label className="column-option">
                          <input
                            type="checkbox"
                            className="column-checkbox"
                            checked
                            data-column="revenue-potential"
                          />
                          Gelir Potansiyeli
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-right-controls">
                  <select className="filter-input">
                    <option>25 / sayfa</option>
                    <option>50 / sayfa</option>
                    <option>100 / sayfa</option>
                    <option>250 / sayfa</option>
                  </select>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table className="product-table">
                  <thead>
                    <tr>
                      <th data-column="image">Ürün</th>
                      <th data-column="category">Kategori</th>
                      <th data-column="price">Fiyat</th>
                      <th data-column="stock">Stok</th>
                      <th data-column="marketplace">Satış Kanalları</th>
                      <th data-column="revenue-potential">
                        💰 Gelir Potansiyeli
                      </th>
                      <th data-column="ai-score">AI Skoru</th>
                      <th>İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- Moda & Tekstil Ürünü - High Revenue Potential --> */}
                    <tr className="product-row revenue-opportunity">
                      <td data-column="image">
                        <div className="product-image-container">
                          <div className="missing-info-indicator"></div>
                          <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=64&h=64&fit=crop&crop=center"
                            alt="T-Shirt"
                            className="product-image"
                          />
                        </div>
                      </td>
                      <td data-column="category">
                        <span className="category-badge">
                          <i className="fas fa-tshirt"></i>
                          Moda & Tekstil
                        </span>
                      </td>
                      <td data-column="price">
                        <div className="price-container">
                          <div className="price-current">₺89.90</div>
                          <div className="price-old">₺119.90</div>
                        </div>
                      </td>
                      <td data-column="stock">
                        <div className="stock-container">
                          <div className="stock-indicator stock-high"></div>
                          <span className="stock-value">156</span>
                        </div>
                      </td>
                      <td data-column="marketplace">
                        <div className="marketplace-badges">
                          <span className="marketplace-badge badge-trendyol">
                            TY
                          </span>
                        </div>
                      </td>
                      <td data-column="revenue-potential">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
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
                          <div
                            style={{
                              fontSize: 11,
                              color: "var(--neutral-500)",
                            }}
                          >
                            3 eksik bilgi
                          </div>
                        </div>
                      </td>
                      <td data-column="ai-score">
                        <div className="ai-score-container">
                          <div className="ai-score-bar">
                            <div
                              className="ai-score-fill"
                              style={{ width: "87%" }}
                            ></div>
                          </div>
                          <span className="ai-score-value">87%</span>
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="action-btn btn-revenue-boost"
                            onclick="openRevenueBoostModal('TSH-OVR-001-WHT-L')"
                          >
                            <i className="fas fa-coins"></i>
                            <div className="action-tooltip">
                              +67₺ Gelir Artışı!
                            </div>
                          </button>
                          <button className="action-btn btn-view">
                            <i className="fas fa-eye"></i>
                            <div className="action-tooltip">
                              Ürünü Görüntüle
                            </div>
                          </button>
                          <button
                            className="action-btn btn-properties"
                            onclick="openPropertiesModal('moda', 'TSH-OVR-001-WHT-L')"
                          >
                            <i className="fas fa-cog"></i>
                            <div className="action-tooltip">
                              Ürün Özellikleri
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Product Variants Row */}
                    <tr className="product-variants" id="variants-product-1">
                      <td colspan="8">
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Elektronik Ürünü - Medium Revenue Potential --> */}
                    <tr className="product-row">
                      <td data-column="image">
                        <div className="product-image-container">
                          <img
                            src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=64&h=64&fit=crop&crop=center"
                            alt="iPhone"
                            className="product-image"
                          />
                        </div>
                      </td>
                      <td data-column="category">
                        <span
                          className="category-badge"
                          style={{
                            background:
                              "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          }}
                        >
                          <i className="fas fa-mobile-alt"></i>
                          Elektronik
                        </span>
                      </td>
                      <td data-column="price">
                        <div className="price-container">
                          <div className="price-current">₺54.999</div>
                        </div>
                      </td>
                      <td data-column="stock">
                        <div className="stock-container">
                          <div className="stock-indicator stock-medium"></div>
                          <span className="stock-value">8</span>
                        </div>
                      </td>
                      <td data-column="marketplace">
                        <div className="marketplace-badges">
                          <span className="marketplace-badge badge-trendyol">
                            TY
                          </span>
                        </div>
                      </td>
                      <td data-column="revenue-potential">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
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
                          <div
                            style={{
                              fontSize: 11,
                              color: "var(--neutral-500)",
                            }}
                          >
                            1 eksik bilgi
                          </div>
                        </div>
                      </td>
                      <td data-column="ai-score">
                        <div className="ai-score-container">
                          <div className="ai-score-bar">
                            <div
                              className="ai-score-fill"
                              style={{ width: "94%" }}
                            ></div>
                          </div>
                          <span className="ai-score-value">94%</span>
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="action-btn btn-revenue-boost"
                            onclick="openRevenueBoostModal('IPH-15PM-256-TIT')"
                          >
                            <i className="fas fa-coins"></i>
                            <div className="action-tooltip">
                              +23₺ Gelir Artışı!
                            </div>
                          </button>
                          <button className="action-btn btn-view">
                            <i className="fas fa-eye"></i>
                            <div className="action-tooltip">
                              Ürünü Görüntüle
                            </div>
                          </button>
                          <button
                            className="action-btn btn-properties"
                            onclick="openPropertiesModal('elektronik', 'IPH-15PM-256-TIT')"
                          >
                            <i className="fas fa-cog"></i>
                            <div className="action-tooltip">
                              Ürün Özellikleri
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Variants for iPhone --> */}
                    <tr className="product-variants" id="variants-product-2">
                      <td colspan="8">
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Kozmetik Ürünü - Critical Missing Info --> */}
                    <tr className="product-row missing-critical-info">
                      <td data-column="image">
                        <div className="product-image-container">
                          <div className="missing-info-indicator"></div>
                          <img
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=64&h=64&fit=crop&crop=center"
                            alt="Serum"
                            className="product-image"
                          />
                        </div>
                      </td>
                      <td data-column="category">
                        <span
                          className="category-badge"
                          style={{
                            background:
                              "linear-gradient(135deg, #ec4899, #f97316)",
                          }}
                        >
                          <i className="fas fa-heart"></i>
                          Kozmetik
                        </span>
                      </td>
                      <td data-column="price">
                        <div className="price-container">
                          <div className="price-current">₺189.90</div>
                          <div className="price-old">₺249.90</div>
                        </div>
                      </td>
                      <td data-column="stock">
                        <div className="stock-container">
                          <div className="stock-indicator stock-low"></div>
                          <span className="stock-value">3</span>
                        </div>
                      </td>
                      <td data-column="marketplace">
                        <div className="marketplace-badges">
                          <span className="marketplace-badge badge-trendyol">
                            TY
                          </span>
                        </div>
                      </td>
                      <td data-column="revenue-potential">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
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
                          <div
                            style={{
                              fontSize: 11,
                              color: "var(--error-color)",
                            }}
                          >
                            5 kritik eksik
                          </div>
                        </div>
                      </td>
                      <td data-column="ai-score">
                        <div className="ai-score-container">
                          <div className="ai-score-bar">
                            <div
                              className="ai-score-fill"
                              style={{ width: "76%" }}
                            ></div>
                          </div>
                          <span className="ai-score-value">76%</span>
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="action-btn btn-revenue-boost"
                            onclick="openRevenueBoostModal('COS-HYA-30-001')"
                            style={{ background: "var(--error-color)" }}
                          >
                            <i className="fas fa-exclamation-triangle"></i>
                            <div className="action-tooltip">
                              Kritik Bilgi Eksik!
                            </div>
                          </button>
                          <button className="action-btn btn-view">
                            <i className="fas fa-eye"></i>
                            <div className="action-tooltip">
                              Ürünü Görüntüle
                            </div>
                          </button>
                          <button
                            className="action-btn btn-properties"
                            onclick="openPropertiesModal('kozmetik', 'COS-HYA-30-001')"
                          >
                            <i className="fas fa-cog"></i>
                            <div className="action-tooltip">
                              Ürün Özellikleri
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Variants for Kozmetik --> */}
                    <tr className="product-variants" id="variants-product-3">
                      <td colspan="8">
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Spor & Outdoor Ürünü - Optimized --> */}
                    <tr className="product-row">
                      <td data-column="image">
                        <div className="product-image-container">
                          <img
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=64&h=64&fit=crop&crop=center"
                            alt="Yoga Mat"
                            className="product-image"
                          />
                        </div>
                      </td>
                      <td data-column="category">
                        <span
                          className="category-badge"
                          style={{
                            background:
                              "linear-gradient(135deg, #f59e0b, #d97706)",
                          }}
                        >
                          <i className="fas fa-dumbbell"></i>
                          Spor & Outdoor
                        </span>
                      </td>
                      <td data-column="price">
                        <div className="price-container">
                          <div className="price-current">₺149.90</div>
                          <div className="price-old">₺199.90</div>
                        </div>
                      </td>
                      <td data-column="stock">
                        <div className="stock-container">
                          <div className="stock-indicator stock-high"></div>
                          <span className="stock-value">67</span>
                        </div>
                      </td>
                      <td data-column="marketplace">
                        <div className="marketplace-badges">
                          <span className="marketplace-badge badge-trendyol">
                            TY
                          </span>
                        </div>
                      </td>
                      <td data-column="revenue-potential">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
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
                            style={{
                              fontSize: 11,
                              color: "var(--success-color)",
                            }}
                          >
                            Tam dolu
                          </div>
                        </div>
                      </td>
                      <td data-column="ai-score">
                        <div className="ai-score-container">
                          <div className="ai-score-bar">
                            <div
                              className="ai-score-fill"
                              style={{ width: "91%" }}
                            ></div>
                          </div>
                          <span className="ai-score-value">91%</span>
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn btn-view">
                            <i className="fas fa-eye"></i>
                            <div className="action-tooltip">
                              Ürünü Görüntüle
                            </div>
                          </button>
                          <button
                            className="action-btn btn-properties"
                            onclick="openPropertiesModal('spor', 'SPT-YG-MAT-6MM')"
                          >
                            <i className="fas fa-cog"></i>
                            <div className="action-tooltip">
                              Ürün Özellikleri
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Variants for Spor --> */}
                    <tr className="product-variants" id="variants-product-4">
                      <td colspan="8">
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                        <div className="variant-item">
                          <img
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=32&h=32&fit=crop&crop=center"
                            alt="Variant"
                            className="variant-image"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Enhanced Pagination --> */}
              <div className="pagination">
                <div className="pagination-info">
                  <strong>1-25</strong> arası gösteriliyor (toplam{" "}
                  <strong>2.847</strong> ürün)
                </div>
                <div className="pagination-controls">
                  <button className="page-btn" disabled>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">4</button>
                  <button className="page-btn">5</button>
                  <span
                    style={{ padding: "0 12px", color: "var(--neutral-400)" }}
                  >
                    ...
                  </span>
                  <button className="page-btn">114</button>
                  <button className="page-btn">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
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
          <button className="suggestion-reject">
            <i className="fas fa-times"></i> Hayır
          </button>
          <button className="suggestion-accept">
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
              {/* <!-- Dynamic content will be inserted here --> */}
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "flex-end",
              }}
            >
              <button className="btn btn-secondary">
                <i className="fas fa-times"></i>
                Şimdi Değil
              </button>
              <button className="btn btn-primary">
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
            <button className="modal-close">
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
      {/* <!-- Other modals remain the same as original --> */}
      <div id="helpModal" className="modal">
        <div className="modal-content help-tooltip-modal">
          <div className="modal-header">
            <h2 className="modal-title">
              <i className="fas fa-question-circle"></i>
              Yardım
            </h2>
            <button className="modal-close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="help-content" id="helpContent">
              {/* <!-- Content will be dynamically loaded --> */}
            </div>
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <button className="btn btn-primary">
                <i className="fas fa-check"></i>
                Anladım
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
