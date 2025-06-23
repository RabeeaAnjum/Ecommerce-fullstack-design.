import React from "react";
import softchairs from '../assets/11.jpg';
import sofa from '../assets/2.jpg';
import kitchendishes from '../assets/3.jpg';
import smartwatches from '../assets/4.jpg';
import kitchenmixer from '../assets/5.jpg';
import blenders from '../assets/6.webp';
import homeappliances from '../assets/7.webp';
import coffeemaker from '../assets/8.jpg';
import leftPanelBg from '../assets/12.jpg'; 

function Products() {
  return (
    <div className="flex p-5 bg-gray-100">
    <div className="flex p-5 bg-gray-100 ml-[355px]  mr-[90px]">
      {/* Left Section */}
      <div
        className="flex-1 max-w-xs flex flex-col justify-center bg-cover bg-center bg-gray-200 p-5 rounded-lg"
        style={{ backgroundImage: `url(${leftPanelBg})` }}
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Home and outdoor</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">Source now</button>
      </div>

      {/* Right Section */}
      <div className="flex-3 grid grid-cols-4 gap-0  mr-56">
        {/* Product Items */}
        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={softchairs} alt="Soft chairs" className="w-64 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Soft chairs - USD 19</p>
        </div>

        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={sofa} alt="Sofa & chair" className="w-44 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Sofa & chair - USD 19</p>
        </div>

        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={kitchendishes} alt="Kitchen dishes" className="w-44 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Kitchen dishes - USD 19</p>
        </div>

        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={smartwatches} alt="Smart watches" className="w-44 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Smart watches - USD 19</p>
        </div>

        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={kitchenmixer} alt="Kitchen mixer" className="w-44 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Kitchen mixer - USD 19</p>
        </div>

        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={blenders} alt="Blenders" className="w-44 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Blenders - USD 19</p>
        </div>

        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={homeappliances} alt="Home appliance" className="w-44 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Home appliance - USD 19</p>
        </div>

        <div className="border border-gray-200 text-center bg-white rounded-lg">
          <img src={coffeemaker} alt="Coffee maker" className="w-44 h-44 object-contain mx-auto mt-4 mb-2" />
          <p className="font-semibold text-lg">Coffee maker - USD 19</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Products;
