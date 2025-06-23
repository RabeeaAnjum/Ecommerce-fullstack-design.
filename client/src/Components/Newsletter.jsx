import React from "react";

const NewsLetter = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-300 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
        Subscribe to our newsletter
      </h1>
      <p className="text-xl text-gray-600 text-center mb-6">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex gap-4 w-full max-w-xl">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md border-none cursor-pointer transition duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
