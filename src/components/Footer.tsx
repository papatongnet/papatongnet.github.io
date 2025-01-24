import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-900 text-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">MORA Agency</span>
            </div>
            <p className="mb-4">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@mora-agency.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition duration-300">{t('nav.home')}</a></li>
              <li><a href="#about" className="hover:text-white transition duration-300">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300">{t('nav.services')}</a></li>
              <li><a href="#join" className="hover:text-white transition duration-300">{t('nav.joinUs')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MORA Agency. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}