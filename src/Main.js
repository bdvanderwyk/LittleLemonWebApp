import React, { useReducer, useEffect } from 'react';
import './Main.css';
import Reviews from './Reviews';
import Specials from './Specials';
import BookingForm from './BookingForm';
import { Route, Routes, useNavigate } from 'react-router-dom';

const SET_AVAILABLE_TIMES = 'SET_AVAILABLE_TIMES';
const RESET_AVAILABLE_TIMES = 'RESET_AVAILABLE_TIMES';

function availableTimesReducer(state, action) {
  switch (action.type) {
    case SET_AVAILABLE_TIMES:
      return action.payload;
    case RESET_AVAILABLE_TIMES:
      return [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' // Reset to initial values
      ];
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' // Initialize with available times
  ]);

  // Function to update available times based on selected date
  function updateTimes(selectedDate) {
    // Make an API request here to fetch the available times based on selectedDate
    // Dispatch the times using SET_AVAILABLE_TIMES action
    fetch(`YOUR_API_ENDPOINT_HERE?date=${selectedDate}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the data structure matches what you expect
        const times = data.availableTimes;
        // Dispatch the available times to update the state
        dispatch({ type: SET_AVAILABLE_TIMES, payload: times });
      })
      .catch((error) => {
        console.error('Error fetching available times:', error);
        // Handle the error as needed
      });
  }

  // Function to initialize available times
  function initializeTimes() {
    dispatch({ type: RESET_AVAILABLE_TIMES });
  }

  // Initialize available times when the component mounts
  useEffect(() => {
    initializeTimes();
  }, []);

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      // Call the submitAPI function with the form data
      const success = await submitAPI(formData);

      if (success) {
        // If submission is successful, navigate to the booking confirmed page
        navigate('/booking-confirmed'); // Use navigate to change the route
      } else {
        // Handle submission failure if needed
        console.error('Form submission failed.');
      }
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <main className='wrapper'>
        <Routes>
          <Route
            path="/reservations"
            element={<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />}
          />
        </Routes>
        <section className='hero'>
          <div className='hero1'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className='about1'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div className='hero2'>
            <img className='herologo' src="/heroimage.png" alt='fish' />
          </div>
        </section>
        <section className='highlights'>
          <Specials />
        </section>
        <section className='test'>
          <Reviews />
        </section>
        <section className='aboutsection'>
          <div className='aboutsec1'>
            <h1 className='abouthead1'>About Us</h1>
            <h2 className='abouthead2'>Our Story</h2>
            <p className='about'>We are a family-owned Mediterranean restaurant, dedicated to preserving the timeless culinary traditions of our ancestors while infusing them with a contemporary twist. Our journey began in the heart of Chicago, where we set out to create a space where our guests can savor the rich flavors and aromas of the Mediterranean in every bite.</p>
          </div>
          <div className='aboutsec2'>
            <img src='/founder1.png' alt='Founder 1' />
            <img src='/founder2.png' alt='Founder 2' />
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
