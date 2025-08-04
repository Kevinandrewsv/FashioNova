import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faUndo, faHeadset } from '@fortawesome/free-solid-svg-icons';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-around gap-12 sm:gap-6 text-center py-12 sm:py-20 px-6 sm:px-0">
      {/* Easy Exchange Policy */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faExchangeAlt} className="text-indigo-600 text-4xl mb-4 sm:mb-5" />
        <p className="font-semibold text-sm sm:text-base">Flexible Exchange Policy</p>
        <p className="text-gray-400 text-xs sm:text-sm">Easily exchange items without any hassle.</p>
      </div>

      {/* Return Policy */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faUndo} className="text-purple-600 text-4xl mb-4 sm:mb-5" />
        <p className="font-semibold text-sm sm:text-base">7-Day Free Returns</p>
        <p className="text-gray-400 text-xs sm:text-sm">Return your purchases within 7 days.</p>
      </div>

      {/* Customer Support */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHeadset} className="text-pink-600 text-4xl mb-4 sm:mb-5" />
        <p className="font-semibold text-sm sm:text-base">24/7 Customer Support</p>
        <p className="text-gray-400 text-xs sm:text-sm">We're here for you around the clock.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
