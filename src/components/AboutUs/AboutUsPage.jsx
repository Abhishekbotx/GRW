import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import backgroundImage1 from '../../Images/background1.png';
import backgroundImage2 from '../../Images/background2.jpeg';
import backgroundImage3 from '../../Images/background3.png';
import Header from '../LandingPage/Header.jsx';
import Footer from '../LandingPage/Footer';
import SeenByWorld from './SeenByWorld.jsx';
import GoaResortWeek from './GoaResortWeek.jsx';
import OurTeam from './OurTeam.jsx';
import OurDesigners from './OurDesigners.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';

const AboutUsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
  ];
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    if (isAutoSliding) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 5000);
    }
    return () => clearInterval(autoSlideInterval.current);
  }, [imageUrls.length, isAutoSliding]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    setIsAutoSliding(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    setIsAutoSliding(false);
  };

  const handleSeenByWorldClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    setIsAutoSliding(false);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-screen bg-cover bg-center border border-4 border-black"
        style={{ backgroundImage: `url(${imageUrls[currentIndex]})`, opacity: 0.7 }}
      ></div>

      {/* Header with higher z-index */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative h-full">
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <div className="flex-grow" />
          <SeenByWorld onClick={handleSeenByWorldClick} />
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
        <GoaResortWeek />
        <OurTeam />
        <OurDesigners />
        <UpcomingEvents />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;



// import React, { useState, useEffect, useRef } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import backgroundImage1 from '../../Images/background1.png';
// import backgroundImage2 from '../../Images/background2.jpeg';
// import backgroundImage3 from '../../Images/background3.png';
// import Header from '../LandingPage/Header.jsx';
// import Footer from '../LandingPage/Footer';
// import SeenByWorld from './SeenByWorld.jsx';
// import GoaResortWeek from './GoaResortWeek.jsx';
// import OurTeam from './OurTeam.jsx';
// import OurDesigners from './OurDesigners.jsx';
// import UpcomingEvents from './UpcomingEvents.jsx';

// const AboutUsPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageUrls, setImageUrls] = useState([
//     backgroundImage1,
//     backgroundImage2,
//     backgroundImage3,
//   ]);
//   const [isAutoSliding, setIsAutoSliding] = useState(true);
//   const autoSlideInterval = useRef(null);

//   useEffect(() => {
//     if (isAutoSliding) {
//       autoSlideInterval.current = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//       }, 5000);
//     }
//     return () => clearInterval(autoSlideInterval.current);
//   }, [imageUrls, isAutoSliding]);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
//     setIsAutoSliding(false);
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     setIsAutoSliding(false);
//   };

//   const handleSeenByWorldClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     setIsAutoSliding(false);
//   };

//   return (
//     <div className="relative h-screen">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center h-screen bg-cover bg-center border border-4 border-black"
//         style={{ backgroundImage: `url(${imageUrls[currentIndex]})`, opacity: 0.7 }}
//       ></div>

//       {/* Header with higher z-index */}
//       <div className="relative z-20">
//         <Header />
//       </div>

//       {/* Main Content */}
//       <div className="relative h-full">
//         <div className="flex flex-col justify-center items-center h-full relative z-10">
//           <div className="flex-grow" />
//           <SeenByWorld onClick={handleSeenByWorldClick} />
//           <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4">
//             <button
//               onClick={handlePrevClick}
//               className="bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700"
//             >
//               <FaChevronLeft />
//             </button>
//           </div>
//           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
//             <button
//               onClick={handleNextClick}
//               className="bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Additional Content */}
//       <div className="bg-white">
//       <GoaResortWeek />
//         <OurTeam />
//         <OurDesigners />
//         <UpcomingEvents />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;


 