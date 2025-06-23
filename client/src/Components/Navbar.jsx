import { useState } from "react";
import {
  Heart,
  MenuIcon,
  MessageSquareText,
  ShoppingCart,
  User,
} from "lucide-react";
function Navbar() {

const [selectedCountry, setSelectedCountry] = useState("Germany");
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    { name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { name: "China", flag: "https://flagcdn.com/cn.svg" },
    { name: "Denmark", flag: "https://flagcdn.com/dk.svg" },
    { name: "France", flag: "https://flagcdn.com/fr.svg" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { name: "Italy", flag: "https://flagcdn.com/it.svg" },
    { name: "Russia", flag: "https://flagcdn.com/ru.svg" },
    { name: "United States", flag: "https://flagcdn.com/us.svg" },
  ];

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-gray-100 border-t border-b border-gray-300 text-xl font-bold">
      {/* Left Menu */}
      <div className="flex items-center gap-5">
        <div className="flex gap-5 p-0 m-0 list-none">
          <div className="flex flex-row">
              <MenuIcon className="size-5 mr-1" />
              <div className="flex items-center justify-between gap-1 md:gap-5 text-md ">
                <a href="/listing">All category</a>
                <a href="/listing">Hot offers</a>
                <a href="/listing">Gift boxes</a>
                <a href="/listing">Projects</a>
                <a href="/listing">Menu item</a>
                <select name="" id="" className="outline-none">
                  <option value="">Help</option>
                  <option value="dog">Help 1</option>
                  <option value="cat">Help 2</option>
                </select>
              </div>
            </div>
           
        </div>
      </div>

      {/* Right Menu */}
    <div className="flex items-center justify-end gap-2">
      {/* Select Dropdown */}
      <select
        name=""
        id=""
        className="outline-none p-2 "
      >
        <option value="">English, USD</option>
        <option value="">Spanish, EUR</option>
        <option value="">United States, USD</option>
        <option value="">French, EUR</option>
        <option value="">New York, EST</option>
      </select>
      <div className="relative inline-block">
        <div
          className="cursor-pointer p-2 flex items-center justify-between "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedCountry}</span>
          <img
            src={countries.find((country) => country.name === selectedCountry)?.flag}
            alt={selectedCountry}
            width={25}
          />
        </div>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {countries.map((country) => (
              <li
                key={country.name}
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedCountry(country.name);
                  setIsOpen(false);
                }}
              >
                <img src={country.flag} alt={country.name} width={20} />
                {country.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>

      
  );
}

export default Navbar;
