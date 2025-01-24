import { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-primary-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold text-white">MORA Agency</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-4">
              <a href="#home" className="text-primary-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('nav.home')}</a>
              <a href="#about" className="text-primary-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('nav.about')}</a>
              <a href="#services" className="text-primary-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('nav.services')}</a>
              <a href="#join" className="text-primary-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{t('nav.joinUs')}</a>
            </div>
            <LanguageToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-500 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-primary-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('nav.home')}</a>
              <a href="#about" className="text-primary-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('nav.about')}</a>
              <a href="#services" className="text-primary-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('nav.services')}</a>
              <a href="#join" className="text-primary-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{t('nav.joinUs')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}