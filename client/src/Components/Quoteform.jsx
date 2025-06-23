import React from "react";
import bg from '../assets/17.jpg';

function QuoteForm() {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div
        className="bg-cover bg-center p-8 rounded-lg text-white max-w-screen-xl w-full h-[645px] ml-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="mb-8">
      <h1 className="text-4xl mb-3 text-left text-white">An easy way to send requests to all suppliers</h1>
      <p className="text-2xl text-left text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
    </div>

  <div className="flex flex-col items-end">
    <div className="bg-white p-5 mb-5 rounded-lg w-[491px] text-center">
      <h2 className="text-3xl text-left text-gray-900 mb-5">Send quote to suppliers</h2>

      <form>
  <div className="mb-4 w-[450px]">
    <input
      type="text"
      id="item-name"
      name="item-name"
      placeholder="What item you need?"
      className="w-full p-2 text-lg rounded-md border border-gray-300 text-black"
    />
  </div>

  <div className="mb-4 w-[450px]">
    <textarea
      id="details"
      name="details"
      placeholder="Type more details"
      rows="4"
      className="w-full p-2 text-lg rounded-md border border-gray-300 resize-none text-black"
    />
  </div>

  <div className="mb-4 w-[450px]">
    <input
      type="text"
      id="quantity"
      name="quantity"
      placeholder="Quantity"
      className="w-full p-2 text-lg rounded-md border border-gray-300 text-black"
    />
  </div>

  <div className="mb-4 w-[450px]">
    <select
      id="pcs"
      name="pcs"
      className="w-full p-2 text-lg rounded-md border border-gray-300 text-black"
    >
      <option value="pcs">Pcs</option>
      <option value="Laptop">Laptops</option>
      <option value="Tablets">Tablets</option>
    </select>
  </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white text-lg rounded-md cursor-pointer hover:bg-blue-700"
        >
          Send Inquiry
        </button>
      </form>
    </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
