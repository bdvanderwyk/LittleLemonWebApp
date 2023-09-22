import React from 'react';
import './Nav.css'

function Nav() {
  return (
<header className='header'>
    <nav className= 'navbar'>
<ul className='nav-list'>
  <li><img src="LogoHeader.png" alt='Logo' height={'0px'}/></li>
  <li><a href="#Home">Home</a></li>
  <li><a href= "#About">About</a></li>
  <li><a href= "#Menu">Menu</a></li>
  <li><a href= "#Reservations">Reservations</a></li>
  <li><a href= "#OrderOnline">Order Online</a></li>
  <li><a href= "#Login">Login</a></li>
</ul>
  </nav>
</header>)}

export default Nav;