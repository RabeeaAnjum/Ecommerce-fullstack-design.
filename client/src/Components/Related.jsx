import React from 'react';
import A from '../assets/21.jpg';
import B from '../assets/48.jpg';
import C from '../assets/24.jpg';
import D from '../assets/23.jpg';
import E from '../assets/27.jpg';
import F from '../assets/44.jpg';
const RelatedProducts = () => {
  return (
    <div className="bg-gray-100">
    <div className="flex justify-between items-start py-8 bg-white max-w-screen-2xl ml-75 mr-65 border-2 border-gray-300">
    <div className=" ml-6 py-8">
      <h2 className="text-xl font-bold mb-4">Related Products</h2>
      <div className="flex space-x-6 overflow-x-auto">
        <div className="flex-shrink-0">
          <img src={A} alt="Product 1" className="w-55 h-52 object-cover rounded-md" />
          <p className="text-sm text-center mt-2">leather wallet</p>
          <p className="text-sm text-center text-gray-500">$32.00 - $40.00</p>
        </div>
        <div className="flex-shrink-0">
          <img src={B} alt="Product 2" className="w-55 h-52 object-cover rounded-md" />
          <p className="text-sm text-center mt-2">Xiaomi Redmi 8 Original</p>
          <p className="text-sm text-center text-gray-500">$32.00 - $40.00</p>
        </div>
        <div className="flex-shrink-0">
          <img src={C} alt="Product 3" className="w-55 h-52 object-cover rounded-md" />
          <p className="text-sm text-center mt-2">Headphones</p>
          <p className="text-sm text-center text-gray-500">$32.00 - $40.00</p>
        </div>
        <div className="flex-shrink-0">
          <img src={D} alt="Product 4" className="w-55 h-52 object-cover rounded-md" />
          <p className="text-sm text-center mt-2">Jeans Shorts</p>
          <p className="text-sm text-center text-gray-500">$32.00 - $40.00</p>
        </div>
        <div className="flex-shrink-0">
          <img src={E} alt="Product 5" className="w-55 h-52 object-cover rounded-md" />
          <p className="text-sm text-center mt-2">Electric Kettle</p>
          <p className="text-sm text-center text-gray-500">$32.00 - $40.00</p>
        </div>
        <div className="flex-shrink-0">
          <img src={F} alt="Product 6" className="w-55 h-52 object-cover rounded-md" />
          <p className="text-sm text-center mt-2">Xiaomi Redmi 8 Original</p>
          <p className="text-sm text-center text-gray-500">$32.00 - $40.00</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RelatedProducts;
