import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='nav-wrapper'>
        <nav>
          <div className='menu'>
            <NavLink exact to ='/tutorials' className='menu-links' activeClassName='active'>
              Tutorials
            </NavLink>
            <NavLink exact to='https://how-to-marketing.netlify.app/about' className='menu-links' activeClassName='active'>
              Team
            </NavLink>
            <NavLink exact to='/login' className='menu-links' activeClassName='active'>
              Login
            </NavLink>
            <NavLink exact to='/login' className='menu-links' activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;