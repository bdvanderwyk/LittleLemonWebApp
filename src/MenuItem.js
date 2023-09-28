import React from 'react';
import './MenuItem.css';

const MenuItem = ({ image, name, price, description }) => {
  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <h2 className="menu-item-name">{name}</h2>
      <p className="menu-item-price">${price.toFixed(2)}</p>
      <p className="menu-item-description">{description}</p>
    </div>
  );
};

export default MenuItem;
