import React from 'react';
import MenuItem from './MenuItem';
import './Specials.css';

const Specials = () => {
  const menuItems = [
    {
      image: './greeksalad.png',
      name: 'Greek Salad',
      price: 9.99,
      description: 'A refreshing blend of crisp cucumbers, ripe tomatoes, feta cheese, Kalamata olives, and zesty dressing.',
    },
    {
      image: './veggiepasta.png',
      name: 'Veggie Pasta',
      price: 12.99,
      description: 'Al dente pasta tossed with a colorful assortment of fresh vegetables and fragrant herbs, all in a luscious tomato-based sauce.',
    },
    {
        image: './grilledfish.png',
        name: 'Grilled Fish',
        price: 14.99,
        description: 'Expertly seasoned and cooked to perfection, served with a side of vibrant Mediterranean-inspired accompaniments.',
      },
      {
        image: './metaTagImg.png',
        name: 'Bruschetta',
        price: 9.99,
        description: 'freshly diced tomatoes, fragrant basil, and garlic atop toasted artisanal bread.',
      }
    // Add more menu item objects as needed
  ];

  return (
    <div className="specials">
      <h1 className="Specialshead">This week's specials!</h1>
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
