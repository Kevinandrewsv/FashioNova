import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Title Section */}
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className="my-12 flex flex-col md:flex-row gap-12 px-6 md:px-20">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            className="w-full md:max-w-[450px] rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            src={assets.about_img}
            alt="About Fashionova"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p className="leading-relaxed">
            At <b className="text-purple-700">Fashionova</b>, our story is one of passion, innovation, and
            commitment to redefining online shopping. Driven by the desire to
            blend convenience with quality, we embarked on this journey to
            curate products that enhance modern lifestyles.
          </p>
          <p className="leading-relaxed">
            From chic fashion to cutting-edge gadgets and home essentials, our
            collection is thoughtfully designed for discerning customers. Each
            item meets our highest standards, ensuring every purchase is
            extraordinary.
          </p>
          <b className="text-lg hover:text-purple-700 transition-colors duration-300 cursor-pointer">
            Our Mission
          </b>
          <p className="leading-relaxed">
            At Fashionova, our mission is to inspire and empower. We strive to
            make style, innovation, and value accessible while delivering a
            seamless shopping experience tailored to modern needs.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4 text-center">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-8 px-6 md:px-20">
        {/* Quality Assurance */}
        <div className="relative rounded-lg p-8 sm:p-16 flex flex-col gap-5 bg-gradient-to-b from-gray-50 to-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-2 text-purple-700">
            <FontAwesomeIcon icon={faStar} className="text-xl" />
            <b className="text-lg hover:text-purple-700 transition-colors duration-300 cursor-pointer">
              Unmatched Quality
            </b>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Every product undergoes meticulous screening to ensure it meets the
            highest quality standards, delivering excellence in every detail.
          </p>
        </div>

        {/* Convenience */}
        <div className="relative rounded-lg p-8 sm:p-16 flex flex-col gap-5 bg-gradient-to-b from-gray-50 to-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-2 text-purple-700">
            <FontAwesomeIcon icon={faTruck} className="text-xl" />
            <b className="text-lg hover:text-purple-700 transition-colors duration-300 cursor-pointer">
              Seamless Shopping
            </b>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our intuitive platform offers an effortless shopping experience, from
            browsing to checkout, making your journey smooth and enjoyable.
          </p>
        </div>

        {/* Customer Delight */}
        <div className="relative rounded-lg p-8 sm:p-16 flex flex-col gap-5 bg-gradient-to-b from-gray-50 to-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-2 text-purple-700">
            <FontAwesomeIcon icon={faHeadset} className="text-xl" />
            <b className="text-lg hover:text-purple-700 transition-colors duration-300 cursor-pointer">
              Exceptional Service
            </b>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our dedicated support team ensures your satisfaction at every step,
            providing assistance whenever you need it.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default About;
