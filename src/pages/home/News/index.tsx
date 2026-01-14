import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './news.module.css'
import { NewsCard } from '../../../components/NewsCard'

export const NewsSection = () => {
  return (
    <section>
      <div className={'page-max-width'}>
        <div className={styles.header}>
          <h3>Новости</h3>

          <a href="/news" className={styles.all}>
            все <span>›</span>
          </a>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiper}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

const news = [
  {
    id: 1,
    image: '/dev/news-card.png',
    date: '12.02.2025',
    title:
      'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее',
  },
  {
    id: 2,
    image: '/dev/news-card.png',
    date: '12.02.2025',
    title: 'В Ашхабаде пройдёт Международная выставка текстиля и моды «Turkmentextile Expo-2025»',
  },
  {
    id: 3,
    image: '/dev/news-card.png',
    date: '06.02.2024',
    title: 'Популярные товары и новинки – в Ашхабаде проходит выставка торгового комплекса',
  },
  {
    id: 4,
    image: '/dev/news-card.png',
    date: '12.02.2025',
    title:
      'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее',
  },
  {
    id: 5,
    image: '/dev/news-card.png',
    date: '12.02.2025',
    title: 'В Ашхабаде пройдёт Международная выставка текстиля и моды «Turkmentextile Expo-2025»',
  },
  {
    id: 6,
    image: '/dev/news-card.png',
    date: '06.02.2024',
    title: 'Популярные товары и новинки – в Ашхабаде проходит выставка торгового комплекса',
  },
]
