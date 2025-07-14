export interface HelpModalData {
  icon: string;
  title: string;
  description: string;
}

export type HelpModalType =
  | "urun-aciklama"
  | "gorsel-optimizasyon"
  | "seo-optimizasyon"
  | "kategori-ozellikleri"
  | "fiyat-optimizasyon"
  | "genel-ai-skor";

export interface HelpModalProps {
  isOpen: boolean;
  type: HelpModalType | null;
  onClose: () => void;
}
