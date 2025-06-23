import React, { useState } from 'react';
import A from '../assets/20.jpg';
import B from '../assets/18.jpg';
import C from '../assets/19.jpg';
import D from '../assets/21.jpg';
import E from '../assets/22.jpg';
const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-gray-100">
    <div className="flex justify-between items-start gap-5  py-8 bg-gray-100 max-w-screen-2xl ml-[300px] mr-[260px] ">
    <div className=" w-2/3 bg-white  border-2 border-gray-300 ">
    <div>
      <div className="flex border-b">
        <button
          className={`py-2 px-4 text-blue-600 ${activeTab === 'description' ? 'border-b-2 border-blue-600' : ''}`}
          onClick={() => handleTabClick('description')}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 text-blue-600 ${activeTab === 'reviews' ? 'border-b-2 border-blue-600' : ''}`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews
        </button>
        <button
          className={`py-2 px-4 text-blue-600 ${activeTab === 'shipping' ? 'border-b-2 border-blue-600' : ''}`}
          onClick={() => handleTabClick('shipping')}
        >
          Shipping
        </button>
        <button
          className={`py-2 px-4 text-blue-600 ${activeTab === 'aboutSeller' ? 'border-b-2 border-blue-600' : ''}`}
          onClick={() => handleTabClick('aboutSeller')}
        >
          About seller
        </button>
      </div>
    </div>

      <div className="space-y-4 mt-6 ml-6">
        {/* Product Title and Description */}
        <div className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </div>

        {/* Table for Product Details */}
      <div className="max-w-md border border-gray-300 p-6 bg-gray-200 ml-6">
  <div className="space-y-4">
    <div className="flex justify-between border-b border-gray-300 pb-2">
      <span className="font-semibold text-gray-700">Model:</span>
      <span className="text-gray-600">#8788687</span>
    </div>
    <div className="flex justify-between border-b border-gray-300 pb-2">
      <span className="font-semibold text-gray-700">Style:</span>
      <span className="text-gray-600">Classic style</span>
    </div>
    <div className="flex justify-between border-b border-gray-300 pb-2">
      <span className="font-semibold text-gray-700">Certificate:</span>
      <span className="text-gray-600">ISO-898921212</span>
    </div>
    <div className="flex justify-between border-b border-gray-300 pb-2">
      <span className="font-semibold text-gray-700">Size:</span>
      <span className="text-gray-600">34mm x 450mm x 19mm</span>
    </div>
    <div className="flex justify-between border-b border-gray-300 pb-2">
      <span className="font-semibold text-gray-700">Memory:</span>
      <span className="text-gray-600">36GB RAM</span>
    </div>
  </div>
</div>

        {/* Features Section */}
        <div className="space-y-2 mt-6 ml-6">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <span className="ml-2 text-gray-600">Some great feature name here</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <span className="ml-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <span className="ml-2 text-gray-600">Duis aute irure dolor in reprehenderit</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <span className="ml-2 text-gray-600">Some great feature name here</span>
          </div>
        </div>
      </div>
    </div>

    <div className="w-1/3 h-164 bg-white border-2 border-gray-300">
      <h3 className="text-xl font-bold text-gray-800 mt-4 mb-4 ml-4"> You may like</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-26 h-26 object-cover rounded-md mr-4" src={A} alt="Men Blazers Sets" />
            <div>
              <p className="text-md font-semibold text-gray-700">Men jacket Elegant Formal</p>
              <p className="text-xs text-gray-500">$7.00 - $39.50</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-26 h-26 object-cover  mr-4" src={B} alt="Men Shirt Sleeve Polo Contrast" />
            <div>
              <p className="text-md font-semibold text-gray-700">Men Shirt Sleeve Polo Contrast</p>
              <p className="text-xs text-gray-500">$7.00 - $39.50</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-26 h-26 object-cover rounded-md mr-4" src={C} alt="Apple Watch Series Space Gray" />
            <div>
              <p className="text-md font-semibold text-gray-700">Brown Coat for Winter Season</p>
              <p className="text-xs text-gray-500">$7.00 - $39.50</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-26 h-26 object-cover rounded-md mr-4" src={D} alt="Basketball Crew Socks Long Stuff" />
            <div>
              <p className="text-md font-semibold text-gray-700">Men's Wallet</p>
              <p className="text-xs text-gray-500">$7.00 - $39.50</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-26 h-26 object-cover rounded-md mr-4" src={E} alt="New Summer Men's Castrol T-Shirts" />
            <div>
              <p className="text-md font-semibold text-gray-700">Leather Bags For women</p>
              <p className="text-xs text-gray-500">$7.00 - $39.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ProductDescription;
