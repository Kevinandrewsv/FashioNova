import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 tracking-wide">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
          {text1}
        </span>{' '}
        <span className="text-gray-700">{text2}</span>
      </h2>
      <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default Title;
