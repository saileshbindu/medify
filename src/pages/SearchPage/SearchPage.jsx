import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import Search from "../../Components/Search/Search";
import styles from "./SearchPage.module.css";
import AskedQuestions from "../../Components/AskedQuestions/AskedQuestions";
import Footer from "../../Components/Footer/Footer";
import freeAppImg from "../../assets/images/freeAppointment.png";
import { SiTicktick } from "react-icons/si";
import hospitalImg from "../../assets/images/hospital.png";
import { FaThumbsUp } from "react-icons/fa";
import axios from "axios";
import BookingSlot from "../../Components/BookingSlot/BookingSlot";

const SearchPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [medicalCenter, setMedicalCenter] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const state = queryParams.get("state");
  const city = queryParams.get("city");

  useEffect(() => {
    axios
      .get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
      .then((res) => {
        setMedicalCenter(res.data);
      })
      .catch((err) => console.log("Error while fetching medical center", err));
  }, [state, city]);

  const bookingFun = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBooking = (center, date, time) => {
    const booking = { center, date, time };
    setSelectedBooking(booking);

    let prevBookings = localStorage.getItem("selectedBooking");
    prevBookings = prevBookings ? JSON.parse(prevBookings) : [];
    if (!Array.isArray(prevBookings)) {
      prevBookings = [];
    }

    prevBookings.push(booking);
    localStorage.setItem("selectedBooking", JSON.stringify(prevBookings));
    setOpenIndex(null);
  };

  useEffect(() => {
    const storedBooking = localStorage.getItem("selectedBooking");
    if (storedBooking) {
      const bookings = JSON.parse(storedBooking);
      if (Array.isArray(bookings) && bookings.length > 0) {
        setSelectedBooking(bookings[bookings.length - 1]);
      }
    }
  }, []);

  return (
    <div className={styles.searchMain}>
      <Header />
      <div className={styles.navBarBg}>
        <NavBar />
      </div>
      <div className={styles.searchBg}>
        <div className={styles.inner}>
          <Search />
        </div>
      </div>
      <div className={styles.searchBody}>
        <div className={styles.searchLeft}>
          <div>
            <h3>
              {medicalCenter.length} medical centers available in {state}
            </h3>
            <p>
              <span>
                <SiTicktick />
              </span>{" "}
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
          {medicalCenter.map((center, index) => (
            <div key={index} className={styles.searchData}>
              <div className={styles.searchDataInner}>
                <img src={hospitalImg} alt="Hospital" />
                <div className={styles.middle}>
                  <h4>{center["Hospital Name"]}</h4>
                  <h5>{center["Address"]}</h5>
                  <p>
                    {center["City"]}, {center["State"]}, {center["ZIP Code"]}
                  </p>
                  <h6>
                    <span>FREE</span> <strike>₹500</strike> Consultation fee at
                    clinic
                  </h6>
                  <hr />
                  <div className={styles.thumb}>
                    <FaThumbsUp /> {center["Hospital overall rating"]}
                  </div>
                </div>
                <div className={styles.right}>
                  <p>Available Today</p>
                  <button
                    className="bluebtn"
                    onClick={() => bookingFun(index)}
                  >
                    Book FREE Center Visit
                  </button>
                </div>
              </div>
              <div className={styles.searchLeftSec}>
                {openIndex === index && (
                  <BookingSlot center={center} onBook={handleBooking} />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.searchRight}>
          <img src={freeAppImg} alt="Free Appointment" />
        </div>
      </div>
      <div className={styles.askedQue}>
        <AskedQuestions />
      </div>
      <Footer />
      {selectedBooking && selectedBooking.center && (
        <Link
          to="/booking"
          state={{
            address: selectedBooking.center["Address"],
            hospitalName: selectedBooking.center["Hospital Name"],
            city: selectedBooking.center["City"],
            state: selectedBooking.center["State"],
            zipCode: selectedBooking.center["ZIP Code"],
            selectedDate: selectedBooking.date,
            selectedTime: selectedBooking.time,
          }}
        >
         
        </Link>
      )}
    </div>
  );
};

export default SearchPage;
