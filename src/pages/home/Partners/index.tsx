import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './partners.module.css'

export const PartnersSection = () => {
  return (
    <section>
      <div className={'page-max-width'}>
        <h3 className={styles.title}>Партнёры</h3>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className={styles.swiper}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <img src="/dev/partner.png" alt={String(index)} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
