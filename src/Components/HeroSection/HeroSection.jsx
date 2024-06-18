import React from 'react';
import styles from './HeroSection.module.css'
import heroImg from '../../assets/images/herosection.png';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
        <div>
                <p className={styles.skipText}>Skip the travel! Find Online</p>
                <h3 className={styles.medicalText}>Medical <span>Centers</span></h3>
                <p className={styles.connectText}>Connect instantly with a 24x7 specialist or choose to <br /> video visit a particular doctor.</p>
                <button className='bluebtn'>Find Center</button>
        </div>
        <img src={heroImg} alt='medify' />

    </div>
  )
}

export default HeroSection