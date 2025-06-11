
/////working 

import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import './Navbar.css';
import img from './img/blank-profile-picture.webp';

const Navbar = ({ setSearchQuery, setStatusFilter }) => {
  const [activeFilter, setActiveFilter] = useState(""); // Store current filter

  const handleFilterClick = (filter) => {
    if (activeFilter === filter) {
      setStatusFilter(""); // If same filter clicked again, show all posts
      setActiveFilter(""); // Reset active filter
    } else {
      setStatusFilter(filter); // Apply new filter
      setActiveFilter(filter); // Update active filter
    }
  };

  return (
    <div className='navbar'>
      <div className='lfbtn'>
        <button 
          className={`lost-btn ${activeFilter === "Lost" ? 'active' : ''}`} 
          onClick={() => handleFilterClick("Lost")}
        >
          Lost Item
        </button>
        <button 
          className={`found-btn ${activeFilter === "Found" ? 'active' : ''}`} 
          onClick={() => handleFilterClick("Found")}
        >
          Found Item
        </button>
      </div>

      <div className='search-bar'>
        <input 
          type='text' 
          placeholder='Search...' 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>

      <div className='nav-icons'>
        <FaBell className='notification-icon' />
        <img src={img} alt='Profile' className='profile-pics' />
      </div>
    </div>
  );
};

export default Navbar;
