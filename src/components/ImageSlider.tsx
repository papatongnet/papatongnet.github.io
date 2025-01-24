import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useLanguage } from '../context/LanguageContext';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3'
];

export default function ImageSlider() {
  const { t } = useLanguage();

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-[500px] md:h-[600px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="w-full h-full bg-primary-900/50 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('hero.title')}</h2>
                <p className="text-lg md:text-xl">{t('hero.subtitle')}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}