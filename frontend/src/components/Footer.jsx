import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10">
      {/* Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-10 my-6 px-6 sm:px-10 lg:px-20">
        {/* About Section */}
        <div className="flex flex-col items-start justify-end">
          <img src={assets.logo} className="mb-2 w-20" alt="Company Logo" /> {/* Logo resized */}
          <h3 className="text-lg font-semibold text-gray-700">
            FashioNova
          </h3>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-semibold mb-5">Quick Links</p>
          <ul className="flex flex-col gap-3">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Delivery Information</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xl font-semibold mb-5">Contact Us</p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-indigo-500" />
              +91 9994053302
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-indigo-500" />
              fashinova@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="bg-gray-100 py-6">
        <div className="flex justify-center gap-5 mb-4">
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
        <hr className="border-gray-300" />
        <p className="py-4 text-center text-sm text-gray-500">
          © 2024 FashioNova All rights reserved. Designed with ❤️ for your style.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
