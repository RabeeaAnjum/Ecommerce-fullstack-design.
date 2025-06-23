import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faHeadset, faTruck } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className='bg-gray-100 '>
        <div className='flex justify-between items-start max-w-screen-2xl ml-[380px] mr-[260px] '>
    <div className=" flex justify-center space-x-8 py-4 ">
      <div className="w-1/3 flex flex-col items-center ml-10 mr-30">
        <div className="w-22 h-22 bg-gray-200 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faLock} className="text-3xl text-gray-700" />
        </div>
        <p className="text-lg text-gray-500 mt-2">Secure payment</p>
        <p className="text-md text-gray-400">Have you ever finally just</p>
      </div>

      <div className="w-1/3 flex flex-col items-center mr-30">
        <div className="w-22 h-22 bg-gray-200 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faHeadset} className="text-3xl text-gray-700" />
        </div>
        <p className="text-lg text-gray-500 mt-2">Customer support</p>
        <p className="text-md text-gray-400">Have you ever finally just</p>
      </div>

      <div className="w-1/3 flex flex-col items-center">
        <div className="w-22 h-22 bg-gray-200 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faTruck} className="text-3xl text-gray-700" />
        </div>
        <p className="text-lg text-gray-500 mt-2">Free delivery</p>
        <p className="text-md text-gray-400">Have you ever finally just</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
