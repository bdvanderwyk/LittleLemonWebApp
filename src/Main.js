import React from 'react';
import './Main.css';
import Reviews from './Reviews';
import Specials from './Specials';

function Main() {
  return (
  <>
    <main className='wrapper'>
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
        {<Specials/>}
      </section>
      <section className='test'>
        {<Reviews/>}
      </section>
      <section className='aboutsection'>
        <div className='aboutsec1'>
          <h1 className='abouthead1'>Little Lemon</h1>
          <h2 className='abouthead2'>Chicago</h2>
          <p className='about'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='aboutsec2'>
          <img src='/founder1.png' alt='founder1' />
          <img src='/founder2.png' alt='founder2' />
        </div>
      </section>
    </main>
  </>);
}
export default Main;

