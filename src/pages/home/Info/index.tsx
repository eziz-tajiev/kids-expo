import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './info.module.css'
import clsx from 'clsx'

export const InfoSection = () => {
  return (
    <div className={styles.container}>
      <div className="page-max-width">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className={styles.swiper}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <h4>{item.title}</h4>
              <p className="bodyMedium">{item.description}</p>
              <button className={clsx(styles.button, 'bodyMedium bold')}>
                <img src="/icons/download.svg" />
                {item.buttonText}
              </button>

              <img src={item.image} className={styles.bgImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

const cards = [
  {
    title: 'Гостиницы, трансфер, визы',
    description:
      'По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки',
    buttonText: 'Скачать',
    image: '/images/infoBg.png',
  },
  {
    title: 'Ознакомьтесь с планом выставки Kids Expo 2025',
    description:
      'Как выбрать лучшее место на выставке? Вы всегда должны помнить, что удачное расположение выставочной экспозиции повышает Ваши шансы привлечь внимание Ваших потенциальных клиентов',
    buttonText: 'Скачать',
    image: '/images/infoBg2.png',
  },
  {
    title: 'Регистрация участников',
    description:
      'Зарегистрируйтесь как участник выставки Kids Expo 2025 и получите доступ ко всем возможностям и преимуществам для экспонентов',
    buttonText: 'Скачать',
    image: '/images/infoBg2.png',
  },
]
