import React, { useState } from 'react';
import './BookingForm.css';
import ConfirmedBooking from './ConfirmedBooking';
import { Route, Routes,Link } from 'react-router-dom';


function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

  updateTimes(selectedDate);
  }

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a formData object with the form data
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };


  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
       <Routes>
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>} />
        </Routes>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time" value={time} onChange={handleTimeChange}>
       {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
       <option value="Birthday">Birthday</option>
       <option value="Anniversary">Anniversary</option>
    </select>
    <Link to='/ConfirmedBooking' className='ConfirmedBooking'/>

 </form>
  );
}

export default BookingForm;
