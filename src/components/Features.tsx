import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, TrendingUp, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Award,
      title: t('features.training.title'),
      description: t('features.training.desc')
    },
    {
      icon: Users,
      title: t('features.network.title'),
      description: t('features.network.desc')
    },
    {
      icon: TrendingUp,
      title: t('features.career.title'),
      description: t('features.career.desc')
    },
    {
      icon: Star,
      title: t('features.creative.title'),
      description: t('features.creative.desc')
    }
  ];

  return (
    <section className="py-20 bg-primary-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">{t('features.title')}</h2>
          <p className="text-primary-500 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-900 p-6 rounded-lg"
            >
              <feature.icon className="h-12 w-12 text-primary-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-primary-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}