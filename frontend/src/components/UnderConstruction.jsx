// File: UnderConstruction.jsx

import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-100">
      <img
        src="https://imagizer.imageshack.com/img924/8493/thytjB.png" // <-- Replace this with your actual image URL
        alt="Under Construction"
        className="w-72 max-w-full mb-6"
      />
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oh no! We’re still not done here.
      </h2>
      <p className="text-gray-600 text-base md:text-lg">
        You need to wait for some time. Sorry for the inconvenience!
      </p>
    </div>
  );
};

export default UnderConstruction;
