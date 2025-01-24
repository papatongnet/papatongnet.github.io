import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.joinUs': 'Gabung',
    
    // Hero
    'hero.title': 'Temukan Potensimu',
    'hero.subtitle': 'Bergabung dengan MORA Agency dan bentuk masa depan hiburan',
    
    // Features
    'features.title': 'Mengapa Memilih Kami',
    'features.subtitle': 'Bergabung dengan MORA Agency dan rasakan perpaduan sempurna antara edukasi dan hiburan',
    'features.training.title': 'Pelatihan Profesional',
    'features.training.desc': 'Program pelatihan yang dipimpin oleh para ahli di bidang hiburan dan edukasi',
    'features.network.title': 'Jaringan Industri',
    'features.network.desc': 'Akses langsung ke TikTok dan para profesional industri',
    'features.career.title': 'Pengembangan Karir',
    'features.career.desc': 'Jalur yang jelas untuk kemajuan dan pengembangan karir',
    'features.creative.title': 'Kebebasan Berkreasi',
    'features.creative.desc': 'Platform untuk mengekspresikan dan mengembangkan visi artistik Anda',
    
    // Join Us
    'join.title': 'Bergabung dengan Tim Kami',
    'join.subtitle': 'Ambil langkah pertama menuju karir yang menarik di bidang hiburan dan edukasi',
    'join.requirements.title': 'Persyaratan',
    'join.requirements.age': 'Usia 18-35 tahun',
    'join.requirements.creative': 'Kreatif dan memiliki passion di bidang hiburan',
    'join.requirements.communication': 'Kemampuan komunikasi yang baik',
    'join.requirements.learn': 'Bersedia untuk belajar dan berkembang',
    'join.requirements.commitment': 'Tersedia untuk komitmen penuh waktu',
    'join.cta.title': 'Siap Memulai?',
    'join.cta.subtitle': 'Kirim lamaran Anda sekarang dan mulai perjalanan Anda bersama MORA Agency',
    'join.cta.button': 'Daftar Sekarang',
    
    // Footer
    'footer.description': 'Memberdayakan talenta melalui edukasi dan hiburan, bermitra dengan TikTok',
    'footer.contact': 'Hubungi Kami',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.rights': 'Hak Cipta Dilindungi',
    
    // Talents Section
    'talents.title': 'Host Talent Terbaik Kami',
    'talents.subtitle': 'Temui para kreator konten berbakat yang telah mencapai kesuksesan bersama MORA Agency',
    'talents.followers': 'Pengikut'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.joinUs': 'Join Us',
    
    // Hero
    'hero.title': 'Discover Your Potential',
    'hero.subtitle': 'Join MORA Agency and shape the future of entertainment',
    
    // Features
    'features.title': 'Why Choose Us',
    'features.subtitle': 'Join MORA Agency and experience the perfect blend of education and entertainment',
    'features.training.title': 'Professional Training',
    'features.training.desc': 'Expert-led training programs in entertainment and education',
    'features.network.title': 'Industry Network',
    'features.network.desc': 'Direct access to TikTok and industry professionals',
    'features.career.title': 'Career Growth',
    'features.career.desc': 'Clear path for career advancement and development',
    'features.creative.title': 'Creative Freedom',
    'features.creative.desc': 'Platform to express and develop your artistic vision',
    
    // Join Us
    'join.title': 'Join Our Team',
    'join.subtitle': 'Take the first step towards an exciting career in entertainment and education',
    'join.requirements.title': 'Requirements',
    'join.requirements.age': 'Age 18-35 years old',
    'join.requirements.creative': 'Creative and passionate about entertainment',
    'join.requirements.communication': 'Strong communication skills',
    'join.requirements.learn': 'Willing to learn and grow',
    'join.requirements.commitment': 'Available for full-time commitment',
    'join.cta.title': 'Ready to Start?',
    'join.cta.subtitle': 'Submit your application now and begin your journey with MORA Agency',
    'join.cta.button': 'Apply Now',
    
    // Footer
    'footer.description': 'Empowering talents through education and entertainment, in partnership with TikTok',
    'footer.contact': 'Contact Us',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved',
    
    // Talents Section
    'talents.title': 'Our Top Host Talents',
    'talents.subtitle': 'Meet our talented content creators who have achieved success with MORA Agency',
    'talents.followers': 'Followers'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}