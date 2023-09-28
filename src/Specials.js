import React from 'react';
import MenuItem from './MenuItem';
import './Specials.css';

const Specials = () => {
  const menuItems = [
    {
      image: '/dish1.jpg',
      name: 'Deluxe Burger',
      price: 9.99,
      description: 'A delicious burger with all the toppings.',
    },
    {
      image: '/dish2.jpg',
      name: 'Veggie Pizza',
      price: 12.99,
      description: 'Fresh vegetables on a crispy crust.',
    },
    {
        image: '/dish1.jpg',
        name: 'Deluxe Burger',
        price: 9.99,
        description: 'A delicious burger with all the toppings.',
      },
      {
        image: '/dish2.jpg',
        name: 'Veggie Pizza',
        price: 12.99,
        description: 'Fresh vegetables on a crispy crust.',
      }
    // Add more menu item objects as needed
  ];

  return (
    <div className="specials">
      <h1>This week's specials!</h1>
      <div className="menu-list-container"> 
      <div className="menu-list">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Specials;
