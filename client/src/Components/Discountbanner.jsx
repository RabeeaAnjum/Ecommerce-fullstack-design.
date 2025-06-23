import React from 'react';

const DiscountBanner = () => {
  return (
    <div className='bg-gray-100 pt-8'> 
      <div className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between max-w-screen-2xl ml-75 mr-65">
        <div>
          <h2 className="text-xl font-semibold">Super discount on more than 100 USD</h2>
          <p className="text-sm mt-1">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-400 transition duration-300">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
