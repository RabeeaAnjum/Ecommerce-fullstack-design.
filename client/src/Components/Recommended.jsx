import React from "react";
import Tshirt from '../assets/18.jpg';
import browncoat from '../assets/19.jpg';
import coat from '../assets/20.jpg';
import wallet from '../assets/21.jpg';
import bag from '../assets/22.jpg';
import jeansshort from '../assets/23.jpg';
import headset from '../assets/24.jpg';
import smartwatch from '../assets/25.jpg';
import claypot from '../assets/26.jpg';
import kettle from '../assets/27.jpg';

function RecommendedItems() {
  return (
    <div className="p-5 bg-gray-100">
      <div className="p-5 bg-gray-100 mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-bold mb-5">Recommended items</h2>
        <div className="grid grid-cols-5 gap-5">
          {/* Product Items */}
          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={Tshirt} alt="T-shirt" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>T-shirts with multiple colors, for men</p>
            <p><h3 className="text-xl font-semibold">$10.30</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={browncoat} alt="Browncoat" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Brown winter coat, medium size</p>
            <p><h3 className="text-xl font-semibold">$10.30</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={coat} alt="coat" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Blue jacket for men, medium size</p>
            <p><h3 className="text-xl font-semibold">$12.50</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={wallet} alt="wallet" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Leather Wallet</p>
            <p><h3 className="text-xl font-semibold">$12.50</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={bag} alt="bag" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Jeans bag for travel for men</p>
            <p><h3 className="text-xl font-semibold">$34.00</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={jeansshort} alt="jeansshort" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Jeans short for men, blue color</p>
            <p><h3 className="text-xl font-semibold">$99.00</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={headset} alt="headset" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Headset for gaming with mic</p>
            <p><h3 className="text-xl font-semibold">$9.99</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={smartwatch} alt="smartwatch" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Smartwatch, silver color Modern</p>
            <p><h3 className="text-xl font-semibold">$8.99</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={claypot} alt="Clay pot" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Clay pot</p>
            <p><h3 className="text-xl font-semibold">$80.95</h3></p>
          </div>

          <div className="bg-white border border-gray-300 p-4 text-center">
            <img src={kettle} alt="kettle" className="w-48 h-48 object-contain mx-auto mb-4" />
            <p>Electric kettle</p>
            <p><h3 className="text-xl font-semibold">$10.30</h3></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedItems;
