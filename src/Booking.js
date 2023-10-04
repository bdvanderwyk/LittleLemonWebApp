import React from 'react';
import BookingForm from './BookingForm.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import './BookingForm.css';

function Booking() {
  return (
  <>
    <Nav/>
    < div className='BookingForm'>
      <BookingForm/>
    </div>
    <Footer/>
  </>)}

export default Booking;