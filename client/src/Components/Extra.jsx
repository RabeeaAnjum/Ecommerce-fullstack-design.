import React from 'react';
import industryhub from '../assets/28.jpg';
import products from '../assets/29.jpg';
import air from '../assets/30.jpg';
import monitor from '../assets/31.jpg';

const ExtraServices = () => {
  return (
    <div className="p-5 bg-gray-100">
      <div className="p-5 bg-gray-100 mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">Our extra services</h2>
        <div className="flex justify-between gap-5">
          {/* Service Item 1 */}
          <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
            <img src={industryhub} alt="Source from Industry Hubs" className="w-full h-48 object-cover rounded-lg" />
            <div className="flex items-center mt-3">
              <span className="text-3xl mr-3">🔍</span>
              <h3 className="text-xl font-semibold">Source from Industry Hubs</h3>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
            <img src={products} alt="Customize Your Products" className="w-full h-48 object-cover rounded-lg" />
            <div className="flex items-center mt-3">
              <span className="text-3xl mr-3">📦</span>
              <h3 className="text-xl font-semibold">Customize Your Products</h3>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
            <img src={air} alt="Fast, reliable shipping by ocean or air" className="w-full h-48 object-cover rounded-lg" />
            <div className="flex items-center mt-3">
              <span className="text-3xl mr-3">✈️</span>
              <h3 className="text-xl font-semibold">Fast, reliable shipping by ocean or air</h3>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
            <img src={monitor} alt="Product monitoring and inspection" className="w-full h-48 object-cover rounded-lg" />
            <div className="flex items-center mt-3">
              <span className="text-3xl mr-3">🔒</span>
              <h3 className="text-xl font-semibold">Product monitoring and inspection</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
