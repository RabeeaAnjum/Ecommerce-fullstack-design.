import React, { useState } from 'react';
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
  const [selectedSortOption, setSelectedSortOption] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // Added state to toggle between grid and list views

  // Toggle functions
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleBrands = () => setIsBrandsOpen(!isBrandsOpen);
  const toggleFeatures = () => setIsFeaturesOpen(!isFeaturesOpen);
  const togglePriceRange = () => setIsPriceRangeOpen(!isPriceRangeOpen);
  const toggleCondition = () => setIsConditionOpen(!isConditionOpen);
  const toggleRatings = () => setIsRatingsOpen(!isRatingsOpen);

  // Toggle between grid and list view
  const toggleView = () => setViewMode(viewMode === 'grid' ? 'list' : 'grid');

  // Handle sort option change
  const handleSortChange = (e) => setSelectedSortOption(e.target.value);

  // Pagination functions
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  // Handle verified checkbox toggle
  const handleVerifiedChange = () => setIsVerifiedOnly(!isVerifiedOnly);

  // Items for both views (with extra items added only for grid view)
  const items = [A, B, C, D, E];
  const extraItems = [F, G, H,I]; // Additional items to be shown in grid view only

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
                    <input type="checkbox" className="mr-2" /> Mobile accessory
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Electronics
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Smartphones
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Modern tech
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
                    <input type="checkbox" className="mr-2" /> Samsung
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Apple
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Huawei
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Poco
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Lenovo
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

          {/* Product List Section */}
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
                <button
                  onClick={toggleView}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Toggle View
                </button>
              </div>
            </div>

            {/* Product Listings */}
           <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col'}>
  {/* Mapping over original items */}
  {items.map((image, index) => (
    <div key={index} className={`w-full ${viewMode === 'grid' ? 'flex-col' : 'flex-row'} mb-4`}>
      <div
        className={`flex items-center justify-between bg-white p-4 shadow-md rounded-lg relative ${viewMode === 'grid' ? 'flex-col' : 'flex-row'}`}
      >
        {/* Grid View: Image above the text */}
        {viewMode === 'grid' && (
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt="Product"
              className="w-32 h-32 object-cover rounded"
            />
          </div>
        )}
        
        {/* List View: Image beside the text */}
        {viewMode === 'list' && (
          <div className="flex-shrink-0">
            <img
              src={image}
              alt="Product"
              className="w-32 h-32 object-cover rounded"
            />
          </div>
        )}

        {/* Product Text */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">Canon Camera EOS 2000, Black 10x zoom</h2>
          <p className="text-md font-semibold text-gray-600">Lorem ipsum dolor sit amet</p>
          <p className="text-md font-semibold text-gray-600">tempor incididunt ut labore</p>
          <div className="flex flex-col items-start">
            <p className="text-xl font-bold text-gray-900">$998.00</p>
            <p className="text-sm text-green-500">Free Shipping</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-500">(154 orders)</span>
            </div>
            <button className="mt-2 py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              View details
            </button>
          </div>
        </div>
        
        <button
          className="absolute top-2 right-2 p-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 focus:outline-none"
          onClick={() => alert('Favorite clicked!')}
        >
          <AiOutlineHeart className="w-6 h-6 text-gray-600 hover:text-red-500" />
        </button>
      </div>
    </div>
  ))}

  {/* Conditionally map over extra items in grid view */}
  {viewMode === 'grid' &&
    extraItems.map((image, index) => (
      <div key={index} className={`w-full ${viewMode === 'grid' ? 'flex-col' : 'flex-row'} mb-4`}>
        <div
          className={`flex items-center justify-between bg-white p-4 shadow-md rounded-lg relative ${viewMode === 'grid' ? 'flex-col' : 'flex-row'}`}
        >
          {/* Grid View: Image above the text */}
          {viewMode === 'grid' && (
            <div className="flex justify-center mb-4">
              <img
                src={image}
                alt="Product"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
          
          {/* List View: Image beside the text */}
          {viewMode === 'list' && (
            <div className="flex-shrink-0">
              <img
                src={image}
                alt="Product"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}

          {/* Product Text */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">Canon Camera EOS 2000, Black 10x zoom </h2>
            <p className="text-md font-semibold text-gray-600">Lorem ipsum dolor sit amet</p>
          <p className="text-md font-semibold text-gray-600">tempor incididunt ut labore</p>
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold text-gray-900">$199.00</p>
              <p className="text-sm text-green-500">Free Shipping</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-500">(50 orders)</span>
              </div>
              <button className="mt-2 py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                View details
              </button>
            </div>
          </div>
          
          <button
            className="absolute top-2 right-2 p-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 focus:outline-none"
            onClick={() => alert('Favorite clicked!')}
          >
            <AiOutlineHeart className="w-6 h-6 text-gray-600 hover:text-red-500" />
          </button>
        </div>
      </div>
    ))}
</div>


            {/* Pagination */}
            <div className="relative bottom-5 right-5 flex items-end space-x-3 bg-gray-100">
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
      </div>
    </div>
  );
}

export default ProductList;
