import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
      className="flex items-center space-x-1 text-primary-500 hover:text-white transition-colors duration-300"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
}