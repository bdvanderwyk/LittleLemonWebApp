import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className='wrapper'>
      <section className='hero'>
        <div className='hero1'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='about'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='hero2'>
          <img className='herologo'src="/heroimage.png" alt='fish' height={300} />
        </div>
      </section>
      <section className='highlights'>
        <h1 className='highhead'>This week's specials!</h1>
        {/* Add your articles here */}
      </section>
      <section className='test'>
        <h1 className='testhead'>Testimonials</h1>
      </section>
      <section className='aboutsection'>
        <div className='aboutsec1'>
          <h1 className='abouthead1'>Little Lemon</h1>
          <h2 className='abouthead2'>Chicago</h2>
          <p className='about'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        </div>
        <div className='aboutsec2'>
          <img src='/founder1.jpg' alt='founder1' />
          <img src='/founder2.jpg' alt='founder2' />
        </div>
      </section>
    </main>
  );
}

export default Main;
