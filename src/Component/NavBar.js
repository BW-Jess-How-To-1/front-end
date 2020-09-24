import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='nav-wrapper'>
        <nav>
          <Link className='nav-logo-logged-in' to='/'>
            HOW TO
          </Link>
          <div className='menu'>
            <NavLink exact to ='/features' className='menu-links' activeClassName='active'>
              Features
            </NavLink>
            <NavLink exact to='/team' className='menu-links' activeClassName='active'>
              Team
            </NavLink>
            <NavLink exact to='/account' className='menu-links' activeClassName='active'>
              Account
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;