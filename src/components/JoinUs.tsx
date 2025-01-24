import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function JoinUs() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const requirements = [
    t('join.requirements.age'),
    t('join.requirements.creative'),
    t('join.requirements.communication'),
    t('join.requirements.learn'),
    t('join.requirements.commitment')
  ];

  return (
    <section className="py-20 bg-primary-900" id="join">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">{t('join.title')}</h2>
          <p className="text-primary-500 max-w-2xl mx-auto">
            {t('join.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{t('join.requirements.title')}</h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center text-primary-500">
                  <CheckCircle className="h-5 w-5 mr-3 text-primary-600" />
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{t('join.cta.title')}</h3>
            <p className="text-primary-500 mb-8">
              {t('join.cta.subtitle')}
            </p>
            <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-300">
              {t('join.cta.button')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}