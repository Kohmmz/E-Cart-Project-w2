import React from 'react';
import cartimg from '../img/cartimg.png';

function Navbar({ cartSize }) {
  return (
    <div>
      <nav className="navbar">
        <h1>E-Cart</h1>
        <img src={cartimg} alt="Cart Icon" />
        <p className="size">{cartSize} </p> 
      </nav>
    </div>
  );
}

export default Navbar;
