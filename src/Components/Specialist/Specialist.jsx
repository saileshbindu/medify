import React from 'react';
import styles from './Specialist.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import doctor1 from '../../assets/images/doctor1.png';
import doctor2 from '../../assets/images/doctor2.png';
import doctor3 from '../../assets/images/doctor3.png';

const Specialist = () => {
  return (
    <div className={styles.specialistMain}>
      <h1>Our Medical Specialist</h1>
 <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true}}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
    >
      <SwiperSlide className={styles.swperSlide} >
        <div className={styles.doctorName}>
        <img src={doctor1} alt="Doctor Specialist" />
        </div>
        <h4 className={styles.headtext}>Dr. Heena Sachdeva</h4>
        <p className={styles.para}> Orthopadics</p>
      </SwiperSlide>
      <SwiperSlide >
        <div className={styles.doctorName}>
        <img src={doctor2} alt="Doctor Specialist" />
        </div>
        <h4 className={styles.headtext}>Dr. Ankur Sharma</h4>
        <p className={styles.para}> Medicine</p>
      </SwiperSlide>
      <SwiperSlide >
        <div className={styles.doctorName}>
        <img src={doctor3} alt="Doctor Specialist" />
        </div>
        <h4 className={styles.headtext}>Dr. Ahmad Khan</h4>
        <p className={styles.para}> Neurologist</p>
      </SwiperSlide>
      <SwiperSlide className={styles.swperSlide} >
        <div className={styles.doctorName}>
        <img src={doctor1} alt="Doctor Specialist" />
        </div>
        <h4 className={styles.headtext}>Dr. Heena Sachdeva</h4>
        <p className={styles.para}> Orthopadics</p>
      </SwiperSlide>
      <SwiperSlide >
        <div className={styles.doctorName}>
        <img src={doctor2} alt="Doctor Specialist" />
        </div>
        <h4 className={styles.headtext}>Dr. Ankur Sharma</h4>
        <p className={styles.para}> Medicine</p>
      </SwiperSlide>
      <SwiperSlide >
        <div className={styles.doctorName}>
        <img src={doctor3} alt="Doctor Specialist" />
        </div>
        <h4 className={styles.headtext}>Dr. Ahmad Khan</h4>
        <p className={styles.para}> Neurologist</p>
      </SwiperSlide>
   
    </Swiper>
    </div>
  )
}

export default Specialist