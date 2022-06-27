import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
 return ( <nav className="navbar">
  <Link className='link' to='/'>Home</Link> 
  <Link className='link' to='About'>About</Link>
  <Link className='link' to='Contact'>Contact</Link>
  <Link  className='link'to='Info'>Info</Link>
 </nav>)
}


export default Navbar; 