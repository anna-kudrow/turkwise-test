/** biome-ignore-all lint/a11y/noLabelWithoutControl: a label is used without an input */
import AIContentBanner from "../../widgets/aiContentBanner/aiContentBanner/AIContentBanner";
import FilterSystemWidget from "../../widgets/filterSystemWidget/FilterSystemWidget";
import Header from "../../widgets/header/Header";
import ProductsTable from "../../widgets/productsTable/ProductsTable";
import RevenueImpactBanner from "../../widgets/revenueImpactBanner/revenueImpactBanner/RevenueImpactBanner";
import styles from "./InventoryPage.module.css";

function InventoryPage() {
  return (
    <main className={styles["main-content"]}>
      <Header />
      <RevenueImpactBanner />
      <AIContentBanner />
      <FilterSystemWidget />
      <ProductsTable />
    </main>
  );
}

export default InventoryPage;
