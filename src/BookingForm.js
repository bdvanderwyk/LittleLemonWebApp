import React, { useState, useReducer } from 'react';
import './BookingForm.css';

// Define a reducer function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_TIME':
      // Filter out the selected time
      return state.filter((timeOption) => timeOption !== action.payload);
    default:
      return state;
  }
};

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Initialize availableTimes using useReducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;

    // Dispatch an action to remove the selected time
    dispatch({ type: 'REMOVE_TIME', payload: selectedTime });

    // Set the time in the BookingForm component
    setTime(selectedTime);
  };

  return (
    <form className='form' style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange} // Call handleTimeChange when the select value changes
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input className='button' type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
