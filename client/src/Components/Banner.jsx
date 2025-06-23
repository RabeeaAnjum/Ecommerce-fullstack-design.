import React from 'react';  
import banner from '../assets/banner.jpg'; 

function Banner() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-start gap-5 px-24 py-8 bg-gray-100 max-w-screen-2xl ml-[300px] mr-[260px] mb-[0]">
        
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-xl">
          <ul className="list-none p-0 m-0">
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Automobiles</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Clothes and wear</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Home interiors</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Computer and tech</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Tools, equipment</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Sports and outdoor</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Animal and pets</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">Machinery tools</li>
            <li className="py-2 border-b border-gray-200 cursor-pointer text-xl">More category</li>
          </ul>
        </div>

        {/* Center Banner */}
        <div
          className="relative flex justify-start items-center bg-cover bg-center px-5 text-white rounded-xl"
          style={{ 
            backgroundImage: `url(${banner})`, 
            height: '440px', 
            width: 'calc(100% - 2 * 20%)'  // This will increase the banner's width, keeping 25% for each sidebar
          }}
        >
          <div className="max-w-1/2">
            <h2 className="text-4xl">Latest trending Electronic items</h2>
            <button className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">Learn more</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 flex flex-col gap-5">
          <div className="bg-blue-100 p-4 rounded-xl text-center text-xl">
            <p><strong>Hi, user</strong><br />Let's get started</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg w-full">Join now</button>
            <button className="mt-4 px-6 py-2 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-lg w-full">Log in</button>
          </div>
          <div className="bg-orange-600 p-6 rounded-xl text-white font-bold text-md">
            <p>Get US $10 off<br /><span>with a new supplier</span></p>
          </div>
          <div className="bg-teal-600 p-6 rounded-xl text-white font-bold text-md">
            <p>Send quotes with<br /><span>supplier preferences</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
