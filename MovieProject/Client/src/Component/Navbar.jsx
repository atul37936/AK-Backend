import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg " style={{width:"90%",margin:"auto"}}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center container" style={{display:"flex",justifyContent:"space-around"}}>
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          <h2 className='text-red'>Movies</h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white text-base font-medium justify-between" style={{ width: '70%' ,display:"flex",justifyContent:"space-between"}}>
          <li>
            <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
          </li>
         
          <li>
            <Link to="/add-movie" className="hover:text-gray-200 transition-colors">Add Movie</Link>
          </li>
          <li>
            <Link to="/movies" className="hover:text-gray-200 transition-colors">All Movie</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200 transition-colors">Login</Link>
          </li>
           <li>
            <Link to="/register" className="hover:text-gray-200 transition-colors">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
