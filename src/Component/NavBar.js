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
            <NavLink exact to='/post' className='menu-links' activeClassName='active' >
              Post
            </NavLink>
            <NavLink exact to ='/features' className='menu-links' activeClassName='active'>
              Features
            </NavLink>
            <NavLink exact to='/team' className='menu-links' activeClassName='active'>
              Team
            </NavLink>
            <NavLink exact to='/login' className='menu-links' activeClassName='active'>
              Login
            </NavLink>
            <NavLink exact to='/signup' className='menu-links' activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;