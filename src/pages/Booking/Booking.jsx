import React, { useState } from 'react';
import Booking from './Booking';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleBooking = (center, date, time) => {
    setSelectedBooking({ center, date, time });
  };

  return (
    <div>
      {/* Other components */}
      {selectedBooking && (
        <Link to='/booking'>
          <Booking
            address={selectedBooking.center["Address"]}
            hospitalName={selectedBooking.center["Hospital Name"]}
            city={selectedBooking.center["City"]}
            state={selectedBooking.center["State"]}
            zipCode={selectedBooking.center["ZIP Code"]}
            selectedDate={selectedBooking.date}
            selectedTime={selectedBooking.time}
          />
        </Link>
      )}
    </div>
  );
};

export default SearchPage;