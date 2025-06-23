import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import appStore from '../assets/42.png';
import googlePlay from '../assets/43.png';
import US from '../assets/34.jpg';
import brand from '../assets/1600w-bHiX_0QpJxE.webp';

function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-10 font-sans text-gray-800">
      <div className="px-8 py-6 bg-gray-100 ml-[310px] mr-[300px]"> {/* Added margin-left and margin-right */}
 <h2 className="text-3xl font-bold text-blue-700 mb-4 text-left">Suppliers by region</h2>
        <div className="flex flex-wrap justify-between gap-10 border-b border-gray-200 pb-4">
          <div className="flex-1 max-w-xs">
            <h2 className="text-2xl font-bold text-blue-700 flex items-center mb-2">
             <span className="mr-2 text-xl">
            <img src={brand} alt="Brand" width="75" height="75" />
             </span>
             <span className='text-4xl font-bold'>Brand</span>
            </h2>
            <p className="text-lg text-gray-600 mb-2">Best information about the company goes here but now lorem ipsum is</p>
            <div className="flex gap-3 text-2xl text-gray-700">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">About</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">Partnership</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">Information</h4>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Money Refund</li>
                <li>Shipping</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">For users</h4>
              <ul className="space-y-2">
                <li>Login</li>
                <li>Register</li>
                <li>Settings</li>
                <li>My Orders</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-2">Get app</h4>
              <img src={appStore} alt="App Store" className="w-32 h-12 cursor-pointer mb-3" />
              <img src={googlePlay} alt="Google Play" className="w-32 h-12 cursor-pointer" />
            </div>
          </div>
        </div>
  </div>
  <div className="flex justify-between items-center text-lg text-gray-500 mt-6">
    <p>© 2023 Ecommerce.</p>
    <div className="flex items-center gap-2 cursor-pointer">
      <img src={US} alt="US flag" className="w-5 h-3 object-cover" />
      <span>English</span>
      <span>▾</span>
    </div>
  </div>
</footer>
  )       
}

export default Footer;
