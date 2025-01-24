import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from '../context/LanguageContext';
import 'swiper/css';

const talents = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    name: 'Sarah Anderson',
    followers: '1.2M',
    tiktok: '@sarah.anderson'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    name: 'David Chen',
    followers: '950K',
    tiktok: '@david.chen'
  },
  {
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3',
    name: 'Michael Kim',
    followers: '875K',
    tiktok: '@michael.kim'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
    name: 'Emma Watson',
    followers: '820K',
    tiktok: '@emma.watson'
  },
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3',
    name: 'Jessica Lee',
    followers: '780K',
    tiktok: '@jessica.lee'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3',
    name: 'Alex Martinez',
    followers: '750K',
    tiktok: '@alex.martinez'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
    name: 'Sophie Turner',
    followers: '720K',
    tiktok: '@sophie.turner'
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3',
    name: 'James Wilson',
    followers: '690K',
    tiktok: '@james.wilson'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
    name: 'Olivia Park',
    followers: '650K',
    tiktok: '@olivia.park'
  },
  {
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3',
    name: 'Daniel Brown',
    followers: '620K',
    tiktok: '@daniel.brown'
  }
];

export default function TopTalents() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary-900" id="talents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">{t('talents.title')}</h2>
          <p className="text-primary-500 max-w-2xl mx-auto">
            {t('talents.subtitle')}
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="talents-swiper"
        >
          {talents.map((talent, index) => (
            <SwiperSlide key={index}>
              <a
                href={`https://tiktok.com/${talent.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-primary-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="relative pb-[100%]">
                    <img
                      src={talent.image}
                      alt={talent.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-white font-semibold mb-2">{talent.name}</h3>
                    <p className="text-primary-600 text-sm">{talent.followers} {t('talents.followers')}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}