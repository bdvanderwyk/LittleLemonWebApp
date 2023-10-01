
    import React from 'react';
    import './Footer.css';

    function Footer() {
      return (
        <footer className='footer'>
      <img src="LogoHeader.png" alt='Logo'/>
      <article className='doormat'>
        <h1>Doormat Navigation</h1>
        <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href= "#About">About</a></li>
            <li><a href= "#Menu">Menu</a></li>
            <li><a href= "#Reservations">Reservations</a></li>
            <li><a href= "#OrderOnline">Order Online</a></li>
            <li><a href= "#Login">Login</a></li>
        </ul>
      </article>
      <article className='contacts'>
        <h1>Contact Information</h1>
        <ul>
            <li><a href="#Address">Address</a></li>
            <li><a href= "#Phone">Email</a></li>
            <li><a href= "#Email">Email</a></li>
        </ul>
      </article>
      <article className='social'>
        <h1>Social Media Links</h1>
        <ul>
            <li><a href="#Facebook">Facebook</a></li>
            <li><a href= "#Instagram">Instagram</a></li>
            <li><a href= "#Yelp">Yelp</a></li>
        </ul>
      </article>
    </footer>
      );
    }
     export default Footer;