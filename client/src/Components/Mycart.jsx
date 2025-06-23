import { useState } from 'react';
import A from '../assets/53.jpg';
import B from '../assets/22.jpg';
import C from '../assets/26.jpg';
import F from '../assets/56.png';
import G from '../assets/57.png';
import H from '../assets/58.png';
import I from '../assets/59.jpg';
import J from '../assets/60.png';

const Mycart = () => {
  // Initializing the state as an object to hold quantity for each item
  const [quantities, setQuantities] = useState({
    1: 9, // Item 1
    2: 9, // Item 2
    3: 9, // Item 3
  });

  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Ensures quantity doesn't go below 1
    }));
  };

  const handleRemove = (id) => {
    // Logic for removing an item based on its id
    console.log('Item removed');
  };

  const handleSaveForLater = (id) => {
    // Mark the item as saved for later
    console.log('Item saved for later');
  };
  const [coupon, setCoupon] = useState('');

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  };

  const handleApplyCoupon = () => {
    // Add your apply coupon logic here
    console.log('Coupon applied:', coupon);
  };

  return (
    <div className='bg-gray-100 pt-8'>
      <div className='flex justify-between items-start gap-2 px-24 py-8  max-w-screen-2xl ml-[300px] mr-[260px] '>
      
        <div className="w-3/4 bg-white flex flex-col space-y-4">
        {/* Vertical Flex Container for Items */}
        <div className=" border-2 border-gray-300 flex flex-col space-y-4">
        
          {/* Item 1 */}
          <div className="flex justify-between items-center bg-white p-4 border-b-2 border-gray-300 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-35 h-30 border-2 border-gray-300">
                <img src={A} alt="T-shirt" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">T-shirts with multiple colors, for men and lady</p>
                <p className="text-sm text-gray-600">Size: medium, Color: blue, Material: Plastic</p>
                <div className="flex space-x-2">
                  <button 
                    className="bg-red-500 text-white p-2 rounded-md" 
                    onClick={() => handleRemove(1)}>
                    Remove
                  </button>
                  <button 
                    className="bg-gray-300 p-2 rounded-md" 
                    onClick={() => handleSaveForLater(1)}>
                    Save for later
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xl font-bold">$78.99</p>
            </div>
            <div className="flex items-end space-x-4">
              <button
                className="bg-gray-200 p-2 rounded-md text-xl ml-2"
                onClick={() => decrement(1)}
              >
                -
              </button>
              <div className="flex items-center justify-center w-16 h-10 border-2 border-gray-300 rounded-md">
                <span className="text-lg">{quantities[1]}</span>
              </div>
              <button
                className="bg-gray-200 p-2 rounded-md text-xl"
                onClick={() => increment(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex justify-between items-center bg-white p-4 border-b-2 border-gray-300 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-35 h-30 border-2 border-gray-300">
                <img src={B} alt="T-shirt" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">T-shirts with multiple colors, for men and lady</p>
                <p className="text-sm text-gray-600">Size: medium, Color: blue, Material: Plastic</p>
                <div className="flex space-x-2">
                  <button 
                    className="bg-red-500 text-white p-2 rounded-md" 
                    onClick={() => handleRemove(2)}>
                    Remove
                  </button>
                  <button 
                    className="bg-gray-300 p-2 rounded-md" 
                    onClick={() => handleSaveForLater(2)}>
                    Save for later
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xl font-bold">$78.99</p>
            </div>
            <div className="flex items-end space-x-4">
              <button
                className="bg-gray-200 p-2 rounded-md text-xl ml-2"
                onClick={() => decrement(2)}
              >
                -
              </button>
              <div className="flex items-center justify-center w-16 h-10 border-2 border-gray-300 rounded-md">
                <span className="text-lg">{quantities[2]}</span>
              </div>
              <button
                className="bg-gray-200 p-2 rounded-md text-xl"
                onClick={() => increment(2)}
              >
                +
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex justify-between items-center bg-white p-4 border-b-2 border-gray-300 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-35 h-30 border-2 border-gray-300">
                <img src={C} alt="T-shirt" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">T-shirts with multiple colors, for men and lady</p>
                <p className="text-sm text-gray-600">Size: medium, Color: blue, Material: Plastic</p>
                <div className="flex space-x-2">
                  <button 
                    className="bg-red-500 text-white p-2 rounded-md" 
                    onClick={() => handleRemove(3)}>
                    Remove
                  </button>
                  <button 
                    className="bg-gray-300 p-2 rounded-md" 
                    onClick={() => handleSaveForLater(3)}>
                    Save for later
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xl font-bold">$78.99</p>
            </div>
            <div className="flex items-end space-x-4">
              <button
                className="bg-gray-200 p-2 rounded-md text-xl ml-2"
                onClick={() => decrement(3)}
              >
                -
              </button>
              <div className="flex items-center justify-center w-16 h-10 border-2 border-gray-300 rounded-md">
                <span className="text-lg">{quantities[3]}</span>
              </div>
              <button
                className="bg-gray-200 p-2 rounded-md text-xl"
                onClick={() => increment(3)}
              >
                +
              </button>
            </div>
          </div>
        <div className="flex justify-between items-center p-4">
  <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
    <span className="mr-2">&larr;</span> Back to shop
  </button>
  <button className="bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50">
    Remove all
  </button>
</div> 
        </div>
</div>


        <div className="w-1/4  flex flex-col space-y-4">

         <div className="flex flex-col items-start space-y-3 bg-white border-2 border-gray-300 mx-4">
      <span className="text-gray-700 text-lg ml-2">Have a coupon?</span>
      <input
        type="text"
        value={coupon}
        onChange={handleCouponChange}
        placeholder="Add coupon"
        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-60 ml-2"
      />
      <button
        onClick={handleApplyCoupon}
        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 focus:outline-none w-60 ml-2 mb-4"
      >
        Apply
      </button>
    </div> 

<div className="max-w-md  bg-white border-2 border-gray-300 p-6 mt-4 mx-4">
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Subtotal:</p>
          <p className="text-gray-900">$1403.97</p>
        </div>
        <div className="flex justify-between text-red-500">
          <p className="font-medium">Discount:</p>
          <p>- $60.00</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Tax:</p>
          <p className="text-gray-900">+ $14.00</p>
        </div>
        <div className="flex justify-between border-t-2 pt-4">
          <p className="font-semibold text-gray-900">Total:</p>
          <p className="font-semibold text-gray-900">$1357.97</p>
        </div>
      </div>
      <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-6 hover:bg-green-600">
        Checkout
      </button>
      <div className="flex justify-center mt-4 space-x-4">
    <div className="w-10 h-10 flex justify-center">
      <img src={F} alt="American Express" className="w-full h-full object-contain" />
    </div>
    <div className="w-10 h-10 flex justify-center">
      <img src={G} alt="MasterCard" className="w-full h-full object-contain" />
    </div>
    <div className="w-10 h-10 flex justify-center">
      <img src={H} alt="Visa" className="w-full h-full object-contain" />
    </div>
    <div className="w-10 h-10 flex justify-center">
      <img src={I} alt="PayPal" className="w-full h-full object-contain" />
    </div>
    <div className="w-10 h-10 flex justify-center">
      <img src={J} alt="Apple Pay" className="w-full h-full object-contain" />
    </div>
  </div>
    </div>

        </div>


      </div>
    </div>
  );
}

export default Mycart;
