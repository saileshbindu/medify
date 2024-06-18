import React from 'react';
import styles from './Offer.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import offerImg1 from '../../assets/images/offer1.png';
import offerImg2 from '../../assets/images/offer2.png';
import offerImg3 from '../../assets/images/offer3.png';

const Offer = () => {
  return (
    <div className={styles.offerMain}>
 <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true}}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
    >
      <SwiperSlide>
        <img src={offerImg1} alt="Offer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={offerImg2} alt="Offer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={offerImg3} alt="Offer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={offerImg1} alt="Offer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={offerImg2} alt="Offer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={offerImg3} alt="Offer" />
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Offer