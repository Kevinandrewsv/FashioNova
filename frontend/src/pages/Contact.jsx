import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Details Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-4">
        {/* Image Section */}
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Information Section */}
        <div className="flex flex-col justify-center items-start gap-8">
          {/* Store Info */}
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-purple-600 text-3xl hover:text-purple-800 transition-colors duration-300"
            />
            <div>
              <p className="font-semibold text-xl text-gray-700">Our Store</p>
              <p className="text-gray-500">
                65, Sivan kovil Street <br /> Thiruvarur, Tamil Nadu - 613703
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-blue-600 text-3xl hover:text-blue-800 transition-colors duration-300"
            />
            <div>
              <p className="font-semibold text-xl text-gray-700">Contact Us</p>
              <p className="text-gray-500">
                Tel: + 91 9994053302<br /> Email: admin@fashionova.com
              </p>
            </div>
          </div>

          {/* Careers Info */}
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-green-600 text-3xl hover:text-green-800 transition-colors duration-300"
            />
            <div>
              <p className="font-semibold text-xl text-gray-700">Careers at FashioNova</p>
              <p className="text-gray-500">Learn more about our teams and job openings.</p>
            </div>
          </div>

          {/* Explore Jobs Button */}
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-md shadow-md">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
