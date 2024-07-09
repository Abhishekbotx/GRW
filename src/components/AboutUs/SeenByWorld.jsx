import React from 'react';
import { Link } from 'react-router-dom';

const GoaResortWeek = ({ onClick }) => (
  <div 
    className="text-black flex flex-col items-center py-12 px-4 cursor-pointer sm:px-6 md:px-8 lg:px-10 xl:px-12"
    onClick={onClick}
  >
    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-8 text-center leading-tight sm:leading-snug">
      DO YOU WANT TO BE SEEN <br className="hidden sm:block" /> BY THE WORLD?
    </h1>
    <div className="border-t border-black w-full mt-6"></div>
    <div className="flex flex-col items-center mt-4 text-xl space-y-2 md:space-y-0 md:flex-row md:space-x-2 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <span>We Are Looking For</span>
        <span className="font-semibold mx-1">12 Magnificent Faces For The Calendar Shoot</span>
      </div>
    </div>
    <Link to="/create-account">
      <button className="bg-black text-white px-6 py-2 rounded mt-6 text-sm md:text-base lg:text-lg lg:px-12 hover:bg-gray-800">
        Join Now
      </button>
    </Link>
  </div>
);

export default GoaResortWeek;




// import React from 'react';
// import { Link } from 'react-router-dom';
 
// const GoaResortWeek = ({ onClick }) => (
//   <div className="text-black flex flex-col items-center py-12 px-4 cursor-pointer" onClick={onClick}>
//     <h1 className="text-4xl md:text-5xl lg:text-6xl mt-8 text-center">DO YOU WANT BE SEEN <br/> BY THE WORLD ?</h1>
//     <div className="border-t border-black w-full mt-6"></div>
//     <div className="flex items-center mt-4 text-2xl space-x-2">
//       <div className="flex items-center">
//          <span>We Are Looking For </span> <span className="font-semibold"> 12 Magnificent Faces For The Calender Shoot</span>
//       </div>
//     </div>
//     <Link to="/create-account">
//       <button className="bg-black text-white px-6 py-2 rounded mt-6 mb-8 lg:px-12 text-sm md:text-base lg:text-lg">
//         Join Now
//       </button>
//     </Link>
//   </div>
// );

// export default GoaResortWeek;



 