import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { AiOutlineHeart } from 'react-icons/ai';
import A from '../assets/44.jpg';
import B from '../assets/45.jpg';
import C from '../assets/46.jpg';
import D from '../assets/25.jpg';
import E from '../assets/24.jpg';
import F from '../assets/47.jpg';
import G from '../assets/48.jpg';
import H from '../assets/49.jpg';
import I from '../assets/50.jpg';
function ProductList() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);
  const [isConditionOpen, setIsConditionOpen] = useState(true);
  const [isRatingsOpen, setIsRatingsOpen] = useState(true);
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(true);
  const [selectedSortOption, setSelectedSortOption] = useState('Featured')
  const handleVerifiedChange = () => setIsVerifiedOnly(!isVerifiedOnly);
  const handleSortChange = (e) => setSelectedSortOption(e.target.value);
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  // Toggle functions for each filter section
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleBrands = () => setIsBrandsOpen(!isBrandsOpen);
  const toggleFeatures = () => setIsFeaturesOpen(!isFeaturesOpen);
  const togglePriceRange = () => setIsPriceRangeOpen(!isPriceRangeOpen);
  const toggleCondition = () => setIsConditionOpen(!isConditionOpen);
  const toggleRatings = () => setIsRatingsOpen(!isRatingsOpen);

  return (
     <div className="bg-gray-100">
    <div className="flex justify-center">
      <div className="flex w-3/4">
        {/* Filter Section */}
        <div className="w-1/4 px-6 py-4 border-r bg-gray-100">
          {/* Category Dropdown */}
          <div>
            <button
              onClick={toggleCategory}
              className="w-full text-left text-lg font-semibold py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
            >
              Category
            </button>
            {isCategoryOpen && (
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Mobile accessory
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Electronics
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Smartphones
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Modern tech
                </li>
                <li className="text-blue-500">
                  <a href="/all-categories">See all</a>
                </li>
              </ul>
            )}
          </div>

          {/* Brands Dropdown */}
          <div>
            <button
              onClick={toggleBrands}
              className="w-full text-left text-lg font-semibold py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
            >
              Brands
            </button>
            {isBrandsOpen && (
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Samsung
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Apple
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Huawei
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Poco
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Lenovo
                </li>
                <li className="text-blue-500">
                  <a href="/all-brands">See all</a>
                </li>
              </ul>
            )}
          </div>
        {/* Features Dropdown */}
        <div>
          <button
            onClick={toggleFeatures}
            className="w-full text-left text-lg font-semibold py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
          >
            Features
          </button>
          {isFeaturesOpen && (
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Metallic
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Plastic cover
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                8GB Ram
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Super power
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Large Memory
              </li>
              <li className="text-blue-500">
                <a href="/all-features">See all</a>
              </li>
            </ul>
          )}
        </div>

        {/* Price Range Dropdown */}
        <div>
          <button
            onClick={togglePriceRange}
            className="w-full text-left text-lg font-semibold py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
          >
            Price Range
          </button>
          {isPriceRangeOpen && (
            <div className="mt-2 space-y-2">
              <input type="range" min="0" max="999999" className="w-full" />
              <div className="flex justify-between text-sm">
                <span>Min</span>
                <span>Max</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 mt-2 rounded-md">Apply</button>
            </div>
          )}
        </div>

        {/* Condition Dropdown */}
        <div>
          <button
            onClick={toggleCondition}
            className="w-full text-left text-lg font-semibold py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
          >
            Condition
          </button>
          {isConditionOpen && (
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <input type="radio" name="condition" className="mr-2" />
                Any
              </li>
              <li className="flex items-center">
                <input type="radio" name="condition" className="mr-2" />
                Refurbished
              </li>
              <li className="flex items-center">
                <input type="radio" name="condition" className="mr-2" />
                Brand new
              </li>
              <li className="flex items-center">
                <input type="radio" name="condition" className="mr-2" />
                Old items
              </li>
            </ul>
          )}
        </div>

        {/* Ratings Dropdown */}
        <div>
          <button
            onClick={toggleRatings}
            className="w-full text-left text-lg font-semibold py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
          >
            Ratings
          </button>
          {isRatingsOpen && (
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>★★★★★</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>★★★★☆</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>★★★☆☆</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>★★☆☆☆</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>★☆☆☆☆</span>
              </li>
            </ul>
          )}
        </div>
</div>

        {/* Product List */}
        <div className="w-3/4 px-6 py-4 bg-gray-100">
          <div className="w-full flex justify-between items-center p-4 bg-white shadow-md rounded-lg border-b">
            <div className="text-xl font-medium text-gray-700">
              12,911 Items in Mobile Accessory
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isVerifiedOnly}
                  onChange={handleVerifiedChange}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">Verified only</span>
              </div>
              <div>
                <select
                  value={selectedSortOption}
                  onChange={handleSortChange}
                  className="bg-white border border-gray-300 rounded-lg p-2 text-sm text-gray-600"
                >
                  <option value="Featured">Featured</option>
                  <option value="Newest">Newest</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              </div>
              <div className="cursor-pointer">
                <button className="text-gray-600 p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 7h14M5 11h14M5 15h14"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Listings */}
          <div className="flex flex-wrap justify-between">
        <div className="w-1/3 px-2 py-2">
  <div className="w-75 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={A}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>

<div className="w-1/3 px-2 py-2">
  <div className="w-75 h-103 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={B}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>

<div className="w-1/3 px-2 py-2">
  <div className="w-75 h-103 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={C}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>
<div className="w-1/3 px-2 py-2">
  <div className="w-75 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={D}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>

<div className="w-1/3 px-2 py-2">
  <div className="w-75 h-116 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={E}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>

<div className="w-1/3 px-2 py-2">
  <div className="w-75 h-116 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={A}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>

<div className="w-1/3 px-2 py-2">
  <div className="w-75 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={G}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>
<div className="w-1/3 px-2 py-2">
  <div className="w-75 h-103 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={H}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>

<div className="w-1/3 px-2 py-2">
  <div className="w-75 h-103 border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition-all bg-white relative">
    <img
      src={I}
      alt="Product"
      className="rounded-md"
    />

    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">$99.50</div>
        <div className="text-sm line-through text-gray-400">$1128.00</div>
      </div>

      <div className="flex items-center mt-1 space-x-1 text-sm">
        <div className="text-yellow-500">★ ★ ★ ★ ★</div>
        <div className="text-orange-500 font-semibold ml-1">7.5</div>
      </div>

      <p className="text-gray-700 font-bold text-md mt-1">
        GoPro HERO6 4K Action Camera - Black
      </p>
    </div>

    <div className="absolute top-2 right-2">
      <button className="bg-white border border-gray-300 rounded-full p-1">
        <Heart size={16} className="text-red-500" />
      </button>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
        <div className="relative bottom-5 right-5 flex items-end space-x-3 bg-gray-100 ">
      <button
        onClick={prevPage}
        className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
        disabled={currentPage === 1}
      >
        &#60;
      </button>
      <span className="text-lg font-semibold">{currentPage}</span>
      <button
        onClick={nextPage}
        className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
      >
        &#62;
      </button>
    </div>
      </div>
    </div>
  );
}

export default ProductList;
