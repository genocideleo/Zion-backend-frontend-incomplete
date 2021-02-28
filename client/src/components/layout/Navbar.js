// import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { logout } from '../../actions/auth';

// const Navbar = ({ auth: { isAuthenticated }, logout }) => {
//   const authLinks = (
//     <ul>
//       <li>
//         <Link to='/stores'> Stores</Link>
//       </li>
//       <li>
//         <Link to='/malls'>Malls</Link>
//       </li>
//       <li>
//         <Link to='/service'>Service</Link>
//       </li>
//       <li>
//         <Link to='/explore'>Explore</Link>
//       </li>
//       <li>
//         <Link to='/myprofile'>MyProfile</Link>
//       </li>
//       <li>
//         <a onClick={logout} href='#!'>
//           <i className='fas fa-sign-out-alt' />{' '}
//           <span className='hide-sm'>Logout</span>
//         </a>
//       </li>
//     </ul>
//   ); /* ^above ....... profiles = dashboard */

//   const guestLinks = (
//     <ul>
//       <li>
//         <Link to='/stores'> Stores</Link>
//       </li>
//       <li>
//         <Link to='/malls'>Malls</Link>
//       </li>
//       <li>
//         <Link to='/service'>Service</Link>
//       </li>
//       <li>
//         <Link to='/explore'>Explore</Link>
//       </li>
//       <li>
//         <Link to='/signup'>Signup</Link>
//       </li>
//       <li>
//         <Link to='/login'>Login</Link>
//       </li>
//     </ul>
//   );

//   return (
//     <nav className='navbar bg-dark'>
//       <h1>
//         <Link to='/home'>
//           <i className='fas fa-code' />
//           Zion
//         </Link>
//       </h1>
//       <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
//     </nav>
//   );
// };
