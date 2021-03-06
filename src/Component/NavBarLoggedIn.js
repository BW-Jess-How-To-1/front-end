import React from 'react';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

const NavBarLoggedIn = () => {
  return (
    <>
      <div className='nav-wrapper'>
        <nav>
          <Link className='nav-logo-logged-in' to='/'>
            HOW TO
          </Link>
          <div className='menu'>
            <NavLink
              to='/creatorDashboard'
              className='menu-links'
              activeClassName='active'>
                Explore
            </NavLink>
            <NavLink
              to='/profile'
              className='menu-links'
              activeClassName='active'>
                Profile
            </NavLink>
            <NavLink
              to='/account'
              className='menu-links'
              activeClassName='active'>
                Logout
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBarLoggedIn;