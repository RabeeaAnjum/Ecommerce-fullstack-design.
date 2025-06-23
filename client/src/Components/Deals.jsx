import React from 'react';
import smartwatch from '../assets/images.jpg';
import laptop from '../assets/images (1).jpg';
import camera from '../assets/camera_12_05.png';
import headphone from '../assets/images (2).jpg';
import smartphone from '../assets/download.jpg';

function Deals() {
  return (
   <div className="py-12 bg-gray-100 ">
  <div className="bg-gray-100 ml-[340px] px-14 py-0 max-w-screen-2xl mr-[80px]"> 
    <div className="flex items-center justify-start gap-0 ">
      <div className="bg-white p-6 rounded-lg text-left max-w-xs h-74">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Deals and offers</h1>
        <h3 className="text-3xl text-gray-800 mb-2">Hygiene equipment</h3>
        <div className="flex gap-2">
          <div className="bg-gray-700 p-3 rounded-lg text-center shadow-sm w-16">
            <span className="text-xl text-white block">04</span>
            <small className="text-sm text-white">Days</small>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center shadow-sm w-16">
            <span className="text-xl text-white block">13</span>
            <small className="text-sm text-white">Hour</small>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center shadow-sm w-16">
            <span className="text-xl text-white block">34</span>
            <small className="text-sm text-white">Min</small>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center shadow-sm w-16">
            <span className="text-xl text-white block">56</span>
            <small className="text-sm text-white">Sec</small>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-74 text-center transition-transform duration-200 hover:translate-y-[-5px]">
  <img src={smartwatch} alt="smartwatch" className="w-42 h-40 object-contain mb-3" />
  <p className="text-lg font-bold text-gray-800">Smart Watches -25%</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm w-48 h-74 text-center transition-transform duration-200 hover:translate-y-[-5px]">
  <img src={laptop} alt="laptop" className="w-42 h-40 object-contain mb-3" />
  <p className="text-lg font-bold text-gray-800">Laptops -15%</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm w-48 h-74 text-center transition-transform duration-200 hover:translate-y-[-5px]">
  <img src={camera} alt="camera" className="w-42 h-38 object-contain mb-3" />
  <p className="text-lg font-bold text-gray-800">GoPro Cameras -40%</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm w-48 h-74 text-center transition-transform duration-200 hover:translate-y-[-5px]">
  <img src={headphone} alt="headphones" className="w-42 h-40 object-contain mb-3" />
  <p className="text-lg font-bold text-gray-800">Headphones -25%</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm w-46 h-74 text-center transition-transform duration-200 hover:translate-y-[-5px]">
  <img src={smartphone} alt="smartphone" className="w-42 h-40 object-contain mb-3" />
  <p className="text-lg font-bold text-gray-800">Smartphones -25%</p>
</div>

    </div>
  </div>
</div>

  );
}

export default Deals;
