 
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '../LandingPage/Header.jsx';
import Footer from '../LandingPage/Footer';

const ReusableSlideshow = ({ slides, additionalContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    if (isAutoSliding) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(autoSlideInterval.current);
  }, [slides.length, isAutoSliding]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setIsAutoSliding(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoSliding(false);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-screen bg-cover bg-center border border-4 border-black"
        style={{ backgroundImage: `url(${slides[currentIndex]})`, opacity: 0.7 }}
      ></div>

      {/* Header with higher z-index */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative h-full">
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <div className="flex-grow" />
          {additionalContent}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4">
            <button
              onClick={handlePrevClick}
              className="bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700"
            >
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
            <button
              onClick={handleNextClick}
              className="bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="bg-white">
        {additionalContent}
        <Footer />
      </div>
    </div>
  );
};

export default ReusableSlideshow;
