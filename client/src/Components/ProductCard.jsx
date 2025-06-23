import React, { useState } from "react";
import { FaStar, FaComment, FaShoppingCart,FaStarHalfAlt,  FaCheckCircle, FaGlobeAmericas,FaHeart } from 'react-icons/fa';
import A from '../assets/51.jpg';
import B from '../assets/52.jpg';
import C from '../assets/53.jpg';
import D from '../assets/54.jpg';
import E from '../assets/18.jpg';
import R from '../assets/55.pNg';

const ProductCard = () => {
    const [mainImage, setMainImage] = useState("/path/to/main/image.jpg");

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  }
  return (
    <div className="bg-gray-100 pt-8">
    <div className="flex justify-between items-start gap-5 px-24 py-8 bg-white max-w-screen-2xl ml-[300px] mr-[260px] border-2 border-gray-300">
    <div className="flex flex-col items-center">
      {/* Main Image Display */}
      <div className="w-85 h-100 mb-4 border-2 border-gray-300">
        <img src={C} alt="Product" className="w-full h-full object-contain" />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex space-x-4">
        <img
          src={B}
          alt="Thumbnail 1"
          className="w-20 h-20 cursor-pointer border-2 border-gray-300 p-1 rounded"
          onClick={() => handleThumbnailClick("/path/to/thumbnail1.jpg")}
        />
        <img
          src={A}
          alt="Thumbnail 2"
          className="w-20 h-20 cursor-pointer border-2 border-gray-300 p-1 rounded"
          onClick={() => handleThumbnailClick("/path/to/thumbnail2.jpg")}
        />
        <img
          src={D}
          alt="Thumbnail 3"
          className="w-20 h-20 cursor-pointer border-2 border-gray-300 p-1 rounded"
          onClick={() => handleThumbnailClick("/path/to/thumbnail3.jpg")}
        />
        <img
          src={E}
          alt="Thumbnail 4"
          className="w-20 h-20 cursor-pointer border-2 border-gray-300 p-1 rounded"
          onClick={() => handleThumbnailClick("/path/to/thumbnail4.jpg")}
        />
      </div>
    </div>
     <div className="bg-white  p-6 ml-5 h-126">
      <div className="flex justify-between items-center">
        <span className="text-green-500 text-2xl">In stock</span>
      </div>
      <h2 className="text-2xl font-semibold mt-2">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
      <div className="flex items-center space-x-3">
    <div className="flex items-center space-x-1">
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStarHalfAlt className="text-yellow-500" />
    <span className="text-gray-500 ml-2">9.3</span>
  </div>
  <div className="flex items-center space-x-1 text-gray-500">
    <FaComment />
    <span>32 reviews</span>
  </div>
  <div className="flex items-center space-x-1 text-gray-500">
    <FaShoppingCart />
    <span>154 sold</span>
  </div>
</div>

     <div className="flex justify-between items-center mt-3 bg-red-200">
  <div className="flex flex-col items-center border-r-2 border-gray-300 pr-4">
    <p className="text-gray-600 font-bold text-lg ">${98.00}</p>
    <p className="text-gray-500 text-sm">50-100 pcs</p>
  </div>
  <div className="flex flex-col items-center border-r-2 border-gray-300 px-4">
    <p className="text-gray-700 font-bold text-lg ">${90.00}</p>
    <p className="text-gray-500 text-sm">100-700 pcs</p>
  </div>
  <div className="flex flex-col items-center pl-4">
    <p className="text-gray-700 font-bold text-lg ">${78.00}</p>
    <p className="text-gray-500 text-sm">700+ pcs</p>
  </div>
</div>

      <div className="mt-4">
        <p className="text-gray-700 mb-3 text-xl">Price: <span className="font-semibold">Negotiable</span></p>
        <p className="text-gray-700 mt-3 mb-3 border-t-2 border-gray-300 text-xl">Type: <span className="font-semibold">Classic Shoes</span></p>
        <p className="text-gray-700 mb-3 text-xl">Material: <span className="font-semibold">Plastic Material</span></p>
        <p className="text-gray-700 mb-3 text-xl">Design: <span className="font-semibold">Modern Nice</span></p>
        <p className="text-gray-700 mt-3 mb-3 border-t-2 border-gray-300 text-xl">Customization: <span className="font-semibold">Customized logo and design custom packages</span></p>
        <p className="text-gray-700 mb-3 text-xl">Protection: <span className="font-semibold">Refund Policy</span></p>
        <p className="text-gray-700 mb-3 border-b-2 border-gray-300 text-xl">Warranty: <span className="font-semibold">2 years full warranty</span></p>
      </div>
        </div>

<div className=" bg-white  ">
<div className=" bg-white border-2 border-gray-300 p-6 mb-6 mr-0">
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center space-x-3">
  <img src={R}  alt="R icon" className="w-13 h-13 " />
  <div className="flex flex-col">
    <span className="text-md font-semibold text-gray-800">Supplier</span>
    <span className="text-lg font-bold text-gray-900">Guanjoi Trading LLC</span>
  </div>
</div>
</div>
      <div className="flex items-center border-t-2 border-gray-300 mt-4 space-x-2">
         <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" alt="Germany Flag" className="w-8 h-6"/>
        <span className="text-lg text-gray-600 mt-4">🇩🇪 Germany, Berlin</span>
      </div>
      <div className="mt-4 flex items-center space-x-2">
         <FaCheckCircle className="text-green-500 " />
        <span className="text-lg text-gray-600">Verified Seller</span>
       </div>
      <div className="mt-4 flex items-center space-x-2">
        <FaGlobeAmericas className="text-blue-500" />
        <span className="text-lg text-gray-600">Worldwide shipping</span>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Send inquiry
        </button>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-blue-600 border-2 border-blue-300">
          Seller's Profile
        </button>
      </div>
    </div>
    <button className="flex items-center text-blue-500 hover:text-blue-700">
      <FaHeart className="mr-2" /> 
      Save for later
    </button>
</div>

      </div>
      </div>
  );
};

export default ProductCard;
