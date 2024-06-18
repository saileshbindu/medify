import React from 'react';
import styles from './Booking.module.css';
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import hospitalImg from '../../assets/images/hospital.png';
import { FaThumbsUp } from "react-icons/fa6";
import freeAppImg from '../../assets/images/freeAppointment.png';
import HospitalSearch from '../../Components/HospitalSearch/HospitalSearch';
import Footer from '../../Components/Footer/Footer';






const Booking = ({slot, selectedDate, address, hospitalName, city, state, zipCode}) => {


  console.log(slot, selectedDate, address, hospitalName, city, state, zipCode)
  return (
    <div className={styles.bookingMain}>
      <Header />
      <div className={styles.navBarBg}>
        <NavBar />
      </div>
      <div className={styles.bookingBg}>
      <h3>My Bookings</h3>
        <div className={styles.inner}>
          
          <HospitalSearch />
        </div>
      </div>
      <div className={styles.bookingBody}>
        <div className={styles.bookingLeft}>
       
          <div className={styles.bookingData}>
            <div className={styles.bookingDataInner}>
              <img src={hospitalImg} alt="Hospital" />
              <div className={styles.middle}>
                <h4>Fortis Hospital Richmond Road</h4>
                <h5>Banglore, Karnataka</h5>
                <p>Smilessence Center for Advanced Dentistry + 1 more</p>
                <hr />
                <div className={styles.thumb}>
                  <FaThumbsUp /> 5
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.time}>
                  7:30 PM
                </div>
                <div className={styles.time2}>
                  {selectedDate}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.bookingRight}>
          <img src={freeAppImg} alt="Free Appointment" />
        </div>
      </div>
      <Footer />
    </div>
   
  )
}

export default Booking
