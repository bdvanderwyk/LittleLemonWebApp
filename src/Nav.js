import React from 'react';
import './Nav.css'
import { Route, Routes, Link } from 'react-router-dom';
import Booking from './Booking.js';

function Nav() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li><img src="LogoHeader.png" alt='Logo' height={'0px'} /></li>
          <li><Link to='/' className='nav-item'>Home</Link></li>
          <li><Link to='/About' className='nav-item'>About</Link></li>
          <li><Link to='/Menu' className='nav-item'>Menu</Link></li>
          <li><Link to='/OrderOnline' className='nav-item'>Order Online</Link></li>
          <li><Link to='/Login' className='nav-item'>Login</Link></li>
          <li><Link to='/Reservations' className='nav-item'>Reservations</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Reservations" element={<Booking />} />
      </Routes>
    </header>
  );
}

export default Nav;