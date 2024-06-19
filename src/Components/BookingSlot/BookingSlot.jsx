import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BookingSlot.css';

const generateWeekDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  return dates;
};

const generateSlotsForDate = (date) => {
  return [
    { time: '11:30 AM', period: 'Morning' },
    { time: '12:00 PM', period: 'Afternoon' },
    { time: '12:30 PM', period: 'Afternoon' },
    { time: '01:30 PM', period: 'Afternoon' },
    { time: '02:00 PM', period: 'Afternoon' },
    { time: '02:30 PM', period: 'Afternoon' },
    { time: '06:00 PM', period: 'Evening' },
    { time: '06:30 PM', period: 'Evening' },
    { time: '07:00 PM', period: 'Evening' },
    { time: '07:30 PM', period: 'Evening' },
  ];
};

const formatDateString = (date) => {
  return date.toLocaleDateString('en-CA');
};

const BookingSlot = ({ center, onBook }) => {
  const [selectedDate, setSelectedDate] = useState(formatDateString(new Date()));
  const weekDates = generateWeekDates();

  const slots = weekDates.reduce((acc, date) => {
    const dateString = formatDateString(date);
    acc[dateString] = generateSlotsForDate(date);
    return acc;
  }, {});

  const getDateLabel = (date, index) => {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    return date.toDateString();
  };

  const handleBooking = (time) => {
    onBook(center, selectedDate, time);
    
  };

  return (
    <div className="bookingInterface">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        {weekDates.map((date, index) => (
          <div key={index} className="dateButtonContainer">
            <button
              className={`dateButton ${selectedDate === formatDateString(date) ? 'active' : ''}`}
              onClick={() => setSelectedDate(formatDateString(date))}
            >
              {getDateLabel(date, index)}
              <p>10 slots available</p>
            </button>
          </div>
        ))}
      </Carousel>
      <TimeSlotList slots={slots[selectedDate] || []} handleBooking={handleBooking} />
    </div>
  );
};

const TimeSlotList = ({ slots, handleBooking }) => {
  const periods = ['Morning', 'Afternoon', 'Evening'];

  return (
    <div className="time-slot-list">
      {periods.map((period) => (
        <div key={period}>
          <h2>{period}</h2>
          <div className="time-slots">
            {slots.filter(slot => slot.period === period).map(slot => (
              <TimeSlot key={slot.time} time={slot.time} handleBooking={handleBooking} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const TimeSlot = ({ time, handleBooking }) => {
  return (
    <button className="time-slot" onClick={() => handleBooking(time)}>
      {time}
    </button>
  );
};

export default BookingSlot;
