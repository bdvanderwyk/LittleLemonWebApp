import React from 'react';
import './Main.css'

function Main() {
  return (
    <main className='wrapper'>
<section className='hero'>
  <div className='hero1'>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p1>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p1>
  </div>
  <div className='hero2'>
  <img src="public/heroimage.png"alt='fish' height={300}/>
  </div>
</section>
<section className='highlights'>
  <h1>This week's specials!</h1>
  <article></article>
  <article></article>
  <article></article>
  <article></article>
  <article></article>
</section>
<section className='test'>
  <h1>Testimonials</h1>
</section>
<section className='about'>
  <h1> Little Lemon</h1>
  <h2>Chicago</h2>
  <p1></p1>
</section>
</main>
  );
}

export default Main;