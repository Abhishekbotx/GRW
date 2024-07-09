import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp, IoCalendarSharp } from 'react-icons/io5';

const GoaResortWeek = ({ onClick }) => (
  <div className="text-black flex flex-col items-center py-12 px-4 cursor-pointer" onClick={onClick}>
    <h1 className="text-3xl md:text-4xl lg:text-5xl mt-8 text-center">Goa Resort Week</h1>
    <div className="border-t border-black w-full mt-6"></div>
    <p className="max-w-3xl text-center mt-2 text-sm md:text-base lg:text-sm">
      Discover the convergence of tradition and style as we showcase the latest trends in bridal fashion. BBW goes beyond the runway, aiming to provide a sensorial experience that transcends the visual to capture the essence of every stitch, embellishment, and cultural nuance.
    </p>
    <div className="flex flex-col sm:flex-row items-center mt-4 text-lg md:text-lg lg:text-xl space-y-4 sm:space-y-0 sm:space-x-8">
      <div className="flex items-center">
        <IoCalendarSharp className="mr-2" />
        <span>15 August 2024</span>
      </div>
      <div className="flex items-center">
        <IoLocationSharp className="mr-2" />
        <span>Mumbai </span>
      </div>
    </div>
    <Link to="/login">
      <button className="bg-black text-white px-6 py-2 rounded mt-4 text-sm md:text-base lg:text-lg lg:px-12">
        Join Now
      </button>
    </Link>
  </div>
);

export default GoaResortWeek;

 