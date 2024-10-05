import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div>
          <h1 id="logo">FashionHaul</h1>
        </div>
        <div>
          <ol id="order">
            {/* Use NavLink for navigation without custom active class */}
            <li className="list">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list">
              <NavLink to="/Product">Products</NavLink>
            </li>
            <li className="list">
              <NavLink to="/">About</NavLink>
            </li>
            <li className="list">
              <NavLink to="/">Contact</NavLink>
            </li>
          </ol>
        </div>
        <div id="button">
          {/* Use NavLink for Login, Register, and Cart */}
          <NavLink to="/login" className="but">
            Login
          </NavLink>
          <NavLink to="/register" className="but">
            Register
          </NavLink>
          <NavLink to="/cart" className="but">
            Cart
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
