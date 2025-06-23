import React from 'react';
import profileIcon from '../assets/download.png';
import MessegeIcon from '../assets/d3455a22af5f3ed7565fb5fb71bb8d43-send-message-icon.webp';
import ordersIcon from '../assets/download (1).png';
import MyCart from '../assets/download (2).png';
import brand from '../assets/1600w-bHiX_0QpJxE.webp';

function Header() {
  return (
    <header className="bg-white border-b border-gray-300 shadow-md w-full p-5 mb-5">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center ml-48">
          <img src={brand} alt="Brand Logo" className="w-32 h-32 mr-2" />
          <span className="text-4xl font-bold text-[#03071f]">Brand</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-36 py-6 border-3 border-gray-300 rounded-lg text-xl font-bold ml-12"
          />
          <select className="px-5 py-6 border-3 border-gray-300 rounded-lg text-xl font-bold">
            <option value="all">All category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
          <button className="px-5 py-6 bg-blue-600 text-white border-3 rounded-lg text-xl font-bold cursor-pointer">
            Search
          </button>
        </div>

        {/* Right Navigation */}
        <div>
          <ul className="flex items-center gap-8 list-none p-0 m-11">
            <li className="flex flex-col items-center text-xl text-gray-700">
              <img src={profileIcon} alt="Profile Icon" className="w-10 h-10 mb-1" />
              <span>Profile</span>
            </li>
            <li className="flex flex-col items-center text-xl text-gray-700">
              <img src={MessegeIcon} alt="Message Icon" className="w-10 h-10 mb-1" />
              <span>Message</span>
            </li>
            <li className="flex flex-col items-center text-xl text-gray-700">
              <img src={ordersIcon} alt="Orders Icon" className="w-10 h-10 mb-1" />
              <span>Orders</span>
            </li>
            <li className="flex flex-col items-center text-xl text-gray-700">
              <img src={MyCart} alt="My Cart" className="w-10 h-10 mb-1" />
              <span>My Cart</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
