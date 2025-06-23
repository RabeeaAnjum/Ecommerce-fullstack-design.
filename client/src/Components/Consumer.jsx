import React from "react";
import picture from '../assets/13.webp';
import smartwatch from '../assets/images.jpg';
import laptop from '../assets/images (1).jpg';
import camera from '../assets/camera_12_05.png';
import headphone from '../assets/images (2).jpg';
import smartphone from '../assets/download.jpg';
import kettle from '../assets/14.jpg';
import Gamingset from '../assets/15.jpg';
import stove from '../assets/16.jpg';

function Consumer() {
  return (
    <div className="flex p-5 bg-gray-100 ">
    <div className="flex p-5 bg-gray-100 ml-[355px]  mr-[90px] ">
  {/* Left Section */}
<div 
  className="flex-1 max-w-xs h-[490px] flex flex-col justify-center bg-cover bg-center p-5 rounded-lg"
  style={{ backgroundImage: `url(${picture})` }}
>
  <h3 className="text-4xl font-bold text-gray-900 mb-5">Consumer Electronics and Gadgets</h3>
  <button className="px-6 py-2 bg-blue-600 text-white rounded-md cursor-pointer mt-12 hover:bg-blue-700">
    Source Now
  </button>
</div>

{/* Right Section */}
<div className="flex-3 grid grid-cols-4 gap-0 mr-56">
  {/* Product Items */}
  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={smartwatch} alt="Smartwatch" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Smart Watches</p>
    <p className="text-base text-gray-800">From USD 19</p>
  </div>

  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={camera} alt="Camera" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Cameras</p>
    <p className="text-base text-gray-800">From USD 89</p>
  </div>

  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={headphone} alt="Headphones" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Headphones</p>
    <p className="text-base text-gray-800">From USD 10</p>
  </div>

  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={kettle} alt="Electric Kettle" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Electric Kettle</p>
    <p className="text-base text-gray-800">From USD 240</p>
  </div>

  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={smartphone} alt="Smartphone" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Smartphone</p>
    <p className="text-base text-gray-800">From USD 240</p>
  </div>

  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={laptop} alt="Laptop" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Laptop</p>
    <p className="text-base text-gray-800">From USD 240</p>
  </div>

  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={Gamingset} alt="Gaming Set" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Gaming Set</p>
    <p className="text-base text-gray-800">From USD 240</p>
  </div>

  <div className="border border-gray-200 text-center bg-white rounded-lg">
    <img src={stove} alt="Electric Stove" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
    <p className="font-semibold text-sm">Electric Stove</p>
    <p className="text-base text-gray-800">From USD 240</p>
  </div>
</div>

    </div>
    </div>
  );
}

export default Consumer;
