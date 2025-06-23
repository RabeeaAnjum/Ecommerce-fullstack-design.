import React from 'react';
import A from '../assets/45.jpg';
import B from '../assets/48.jpg';
import C from '../assets/4.jpg';
import D from '../assets/46.jpg';

const SavedForLater = () => {
  const items = [
    {
      id: 1,
      image: A, // Use imported image A
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: '$99.50',
    },
    {
      id: 2,
      image: B, // Use imported image B
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: '$99.50',
    },
    {
      id: 3,
      image: C, // Use imported image C
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: '$99.50',
    },
    {
      id: 4,
      image: D, // Use imported image D
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: '$99.50',
    }
  ];

  return (
    <div className='bg-gray-100 pt-8'>
      <div className="bg-white p-4 border-2 border-gray-300 max-w-screen-2xl ml-98 mr-92">
        <h2 className="text-xl font-semibold mb-4">Saved for later</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
              <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg mb-3" />
              <p className="text-sm font-medium text-gray-700 mb-2">{item.name}</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">{item.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Move to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedForLater;
