import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Booking.module.css';
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import hospitalImg from '../../assets/images/hospital.png';
import { FaThumbsUp } from "react-icons/fa6";
import freeAppImg from '../../assets/images/freeAppointment.png';
import HospitalSearch from '../../Components/HospitalSearch/HospitalSearch';
import Footer from '../../Components/Footer/Footer';

const Booking = ({ slot, selectedDate, address, hospitalName, city, state, zipCode }) => {
  const [selectedBooking, setSelectedBooking] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const storedBooking = localStorage.getItem('selectedBooking');
    if (storedBooking) {
      setSelectedBooking(JSON.parse(storedBooking));
    } else if (location.state) {
      setSelectedBooking(location.state);
    }
  }, [location.state, location]);

  console.log(selectedBooking);

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
        
          {selectedBooking.length > 0 ? selectedBooking.map((booking, index) => (
            <div className={styles.bookingData} key={index}>
              <div className={styles.bookingDataInner}>
                <img src={hospitalImg} alt="Hospital" />
                <div className={styles.middle}>
                  <h4>{booking.center["Hospital Name"]}</h4>
                  <h5>{booking.center["Address"]}</h5>
                  <p>{booking.center["City"]}, {booking.center["State"]}, {booking.center["ZIP Code"]}</p>
                  <hr />
                  <div className={styles.thumb}>
                    <FaThumbsUp /> {booking.center["Hospital overall rating"]}
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.time}>
                    {booking.time}
                  </div>
                  <div className={styles.time2}>
                  {new Date(booking.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>
          )) : <p>No bookings available.</p>}
        </div>
        <div className={styles.bookingRight}>
          <img src={freeAppImg} alt="Free Appointment" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;