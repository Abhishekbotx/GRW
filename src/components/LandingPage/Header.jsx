import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import logo from '../../Images/FooterLogo.png';

const Header = ({ 
  homeRef, 
  highlightsRef, 
  logoGridRef, 
  eventsRef, 
  grandAffairRef,
  testimonialRef,
  footerRef,
  setPendingSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (path) => {
    return currentPath === path ? 'underline-with-margin' : '';
  };

  const scrollToSection = (sectionRef, sectionName) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setCurrentSection(sectionName);
    } else {
      console.error(`scrollToSection: sectionRef for ${sectionName} is undefined or null`);
    }
  };

  const handleLinkClick = (event, sectionRef, sectionName, path) => {
    event.preventDefault();
    if (sectionRef && sectionRef.current) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setPendingSection({ sectionRef, sectionName });
      } else {
        scrollToSection(sectionRef, sectionName);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-20 ${isScrolled ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}>
      <nav className="flex justify-between items-center px-4 py-2 md:px-8">
        <a href="/" className="mt-4 ml-4 block cursor-pointer">
          <img src={logo} alt="GRW Logo" className="h-7 md:h-8 invert" />
        </a>

        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex space-x-2 font-bold">
            {/* <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, homeRef, 'home')} 
              className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
              Home
            </a> */}
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, highlightsRef, 'highlights')} 
              className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
              Participants
            </a>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, logoGridRef, 'logoGrid')} 
              className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
              Partners
            </a>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, eventsRef, 'events')} 
              className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
              Event Details
            </a>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, grandAffairRef, 'grandAffair')} 
              className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
              How To Attend
            </a>
            <a 
              href="/model-hunt" 
              onClick={(e) => handleLinkClick(e, null, null, '/model-hunt')} 
              className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
            <a 
              href="/about-us" 
              onClick={(e) => handleLinkClick(e, null, null, '/about-us')} 
              className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
          </div>
        </div>

        <div className="md:flex lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none mt-4 mr-4">
            {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <a href="https://www.instagram.com/goaresortweek/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-2 mt-4 mb-2 items-center bg-opacity-60 backdrop-filter backdrop-blur-lg font-bold z-20 text-xl">
          <div className="flex flex-col space-y-2 font-bold text-center">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, homeRef, 'home')} 
              className={`block py-2 px-4 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
              Home
            </a>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, highlightsRef, 'highlights')} 
              className={`block py-2 px-4 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
              Participants
            </a>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, logoGridRef, 'logoGrid')} 
              className={`block py-2 px-4 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
              Partners
            </a>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, eventsRef, 'events')} 
              className={`block py-2 px-4 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
              Event Details
            </a>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, grandAffairRef, 'grandAffair')} 
              className={`block py-2 px-4 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
              How To Attend
            </a>
            <a 
              href="/model-hunt" 
              onClick={(e) => handleLinkClick(e, null, null, '/model-hunt')} 
              className={`block py-2 px-4 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
            <a 
              href="/about-us" 
              onClick={(e) => handleLinkClick(e, null, null, '/about-us')} 
              className={`block py-2 px-4 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
          </div>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="https://www.instagram.com/goaresortweek/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faYoutube, faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import logo from '../../Images/FooterLogo.png';

// const Header = ({ 
//   homeRef, 
//   highlightsRef, 
//   logoGridRef, 
//   eventsRef, 
//   grandAffairRef,
//   testimonialRef,
//   footerRef,
//   setPendingSection,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [currentSection, setCurrentSection] = useState(null);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > window.innerHeight);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const getLinkClass = (path) => {
//     return currentPath === path ? 'underline-with-margin' : '';
//   };

//   const scrollToSection = (sectionRef, sectionName) => {
//     if (sectionRef && sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//       setCurrentSection(sectionName);
//     } else {
//       console.error(`scrollToSection: sectionRef for ${sectionName} is undefined or null`);
//     }
//   };

//   const handleLinkClick = (event, sectionRef, sectionName, path) => {
//     event.preventDefault();
//     if (sectionRef && sectionRef.current) {
//       if (window.location.pathname !== '/') {
//         navigate('/');
//         setPendingSection({ sectionRef, sectionName });
//       } else {
//         scrollToSection(sectionRef, sectionName);
//       }
//     } else {
//       navigate(path);
//     }
//   };

//   return (
//     <div className={`fixed top-0 left-0 w-full z-20 ${isScrolled ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}>
//       <nav className="flex justify-between items-center px-4 py-2 md:px-8">
//         <a href="/" className="mt-4 ml-4 block cursor-pointer">
//           <img src={logo} alt="GRW Logo" className="h-7 md:h-8 invert" />
//         </a>

//         <div className="hidden lg:flex flex-1 justify-center">
//           <div className="flex space-x-2 font-bold">
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, homeRef, 'home')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
//               Home
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, highlightsRef, 'highlights')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
//               Participants
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, logoGridRef, 'logoGrid')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
//               Partners
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, eventsRef, 'events')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
//               Event Details
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, grandAffairRef, 'grandAffair')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
//               How To Attend
//             </a>
//             <a 
//               href="/model-hunt" 
//               onClick={(e) => handleLinkClick(e, null, null, '/model-hunt')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a 
//               href="/about-us" 
//               onClick={(e) => handleLinkClick(e, null, null, '/about-us')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//         </div>

//         <div className="md:flex lg:hidden mt-4 mr-4">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
//           </button>
//         </div>

//         <div className="hidden lg:flex space-x-4">
//           <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//           <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </a>
//         </div>
//       </nav>

//       {isOpen && (
//         <div className="lg:hidden flex flex-col space-y-2 mt-4 mb-2 items-center bg-opacity-60 backdrop-filter backdrop-blur-lg font-bold z-20 text-xl">
//           <div className="flex flex-col space-y-2 font-bold text-center">
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, homeRef, 'home')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
//               Home
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, highlightsRef, 'highlights')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
//               Participants
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, logoGridRef, 'logoGrid')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
//               Partners
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, eventsRef, 'events')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
//               Event Details
//             </a>
//             <a 
//               href="/" 
//               onClick={(e) => handleLinkClick(e, grandAffairRef, 'grandAffair')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
//               How To Attend
//             </a>
//             <a 
//               href="/model-hunt" 
//               onClick={(e) => handleLinkClick(e, null, null, '/model-hunt')} 
//               className={`block py-2 px-4 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a 
//               href="/about-us" 
//               onClick={(e) => handleLinkClick(e, null, null, '/about-us')} 
//               className={`block py-2 px-4 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//           <div className="flex justify-center space-x-8 mt-4">
//             <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faYoutube} />
//             </a>
//             <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faYoutube, faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import logo from '../../Images/FooterLogo.png';

// const Header = ({ 
//   homeRef, 
//   highlightsRef, 
//   logoGridRef, 
//   eventsRef, 
//   grandAffairRef,
//   testimonialRef,
//   footerRef
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [currentSection, setCurrentSection] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > window.innerHeight);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const getLinkClass = (path) => {
//     return currentPath === path ? 'underline-with-margin' : '';
//   };

//   const scrollToSection = (sectionRef, sectionName) => {
//     if (sectionRef && sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//       setCurrentSection(sectionName);
//     } else {
//       console.error(`scrollToSection: sectionRef for ${sectionName} is undefined or null`);
//     }
//   };

//   return (
//     <div className={`fixed top-0 left-0 w-full z-20 ${isScrolled ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}>
//       <nav className="flex justify-between items-center px-4 py-2 md:px-8">
//         <a href="/" className="mt-4 ml-4 block cursor-pointer">
//           <img src={logo} alt="GRW Logo" className="h-7 md:h-8 invert" />
//         </a>

//         <div className="hidden lg:flex flex-1 justify-center">
//           <div className="flex space-x-2 font-bold">
//             <button 
//               onClick={() => scrollToSection(homeRef, 'home')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
//               Home
//             </button>
//             <button 
//               onClick={() => scrollToSection(highlightsRef, 'highlights')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
//               Participants
//             </button>
//             <button 
//               onClick={() => scrollToSection(logoGridRef, 'logoGrid')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
//               Partners
//             </button>
//             <button 
//               onClick={() => scrollToSection(eventsRef, 'events')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
//               Event Details
//             </button>
//             <button 
//               onClick={() => scrollToSection(grandAffairRef, 'grandAffair')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
//               How To Attend
//             </button>
//             <a href="/model-hunt" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a href="/about-us" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//         </div>

//         <div className="md:flex lg:hidden mt-4 mr-4">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
//           </button>
//         </div>

//         <div className="hidden lg:flex space-x-4">
//           <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//           <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </a>
//         </div>
//       </nav>

//       {isOpen && (
//         <div className="lg:hidden flex flex-col space-y-2 mt-4 mb-2 items-center bg-opacity-60 backdrop-filter backdrop-blur-lg font-bold z-20 text-xl">
//           <div className="flex flex-col space-y-2 font-bold text-center">
//             <button 
//               onClick={() => scrollToSection(homeRef, 'home')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
//               Home
//             </button>
//             <button 
//               onClick={() => scrollToSection(highlightsRef, 'highlights')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
//               Participants
//             </button>
//             <button 
//               onClick={() => scrollToSection(logoGridRef, 'logoGrid')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
//               Partners
//             </button>
//             <button 
//               onClick={() => scrollToSection(eventsRef, 'events')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
//               Event Details
//             </button>
//             <button 
//               onClick={() => scrollToSection(grandAffairRef, 'grandAffair')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
//               How To Attend
//             </button>
//             <a href="/model-hunt" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a href="/about-us" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//           <div className="flex justify-center space-x-8 mt-4">
//             <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faYoutube} />
//             </a>
//             <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;




// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faYoutube, faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import logo from '../../Images/FooterLogo.png';

// const Header = ({ 
//   homeRef, 
//   highlightsRef, 
//   logoGridRef, 
//   eventsRef, 
//   grandAffairRef,
//   testimonialRef,
//   footerRef
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [currentSection, setCurrentSection] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > window.innerHeight);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const getLinkClass = (path) => {
//     return currentPath === path ? 'underline-with-margin' : '';
//   };

//   const scrollToSection = (sectionRef, sectionName) => {
//     if (sectionRef && sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//       setCurrentSection(sectionName);
//     } else {
//       console.error(`scrollToSection: sectionRef for ${sectionName} is undefined or null`);
//     }
//   };

//   return (
//     <div className={`fixed top-0 left-0 w-full z-10 ${isScrolled ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}>
//       <nav className="flex justify-between items-center px-4 py-2 md:px-8">
//         <a href="/" className="mt-4 ml-4 block cursor-pointer">
//           <img src={logo} alt="GRW Logo" className="h-7 md:h-8 invert" />
//         </a>

//         <div className="hidden lg:flex flex-1 justify-center">
//           <div className="flex space-x-2 font-bold">
//             <button 
//               onClick={() => scrollToSection(homeRef, 'home')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
//               Home
//             </button>
//             <button 
//               onClick={() => scrollToSection(highlightsRef, 'highlights')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
//               Participants
//             </button>
//             <button 
//               onClick={() => scrollToSection(logoGridRef, 'logoGrid')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
//               Partners
//             </button>
//             <button 
//               onClick={() => scrollToSection(eventsRef, 'events')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
//               Event Details
//             </button>
//             <button 
//               onClick={() => scrollToSection(grandAffairRef, 'grandAffair')} 
//               className={`block py-2 px-4 md:py-0 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
//               How To Attend
//             </button>
//             <a href="/model-hunt" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a href="/about-us" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//         </div>

//         <div className="md:flex lg:hidden mt-4 mr-4">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
//           </button>
//         </div>

//         <div className="hidden lg:flex space-x-4">
//           <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//           <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </a>
//         </div>
//       </nav>

//       {isOpen && (
//         <div className="lg:hidden flex flex-col space-y-2 mt-4 mb-2 items-center bg-opacity-60 backdrop-filter backdrop-blur-lg font-bold z-20 text-xl">
//           <div className="flex flex-col space-y-2 font-bold text-center">
//             <button 
//               onClick={() => scrollToSection(homeRef, 'home')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'home' ? 'underline-with-margin' : ''}`}>
//               Home
//             </button>
//             <button 
//               onClick={() => scrollToSection(highlightsRef, 'highlights')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'highlights' ? 'underline-with-margin' : ''}`}>
//               Participants
//             </button>
//             <button 
//               onClick={() => scrollToSection(logoGridRef, 'logoGrid')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'logoGrid' ? 'underline-with-margin' : ''}`}>
//               Partners
//             </button>
//             <button 
//               onClick={() => scrollToSection(eventsRef, 'events')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'events' ? 'underline-with-margin' : ''}`}>
//               Event Details
//             </button>
//             <button 
//               onClick={() => scrollToSection(grandAffairRef, 'grandAffair')} 
//               className={`block py-2 px-4 cursor-pointer ${currentSection === 'grandAffair' ? 'underline-with-margin' : ''}`}>
//               How To Attend
//             </button>
//             <a href="/model-hunt" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a href="/about-us" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//           <div className="flex justify-center space-x-8 mt-4">
//             <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faYoutube} />
//             </a>
//             <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faYoutube, faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import logo from '../../Images/FooterLogo.png';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > window.innerHeight);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const getLinkClass = (path) => {
//     return currentPath === path ? 'underline-with-margin' : '';
//   };

//   return (
//     <div className={`fixed top-0 left-0 w-full z-10 ${isScrolled ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}>
//       <nav className="flex justify-between items-center px-4 py-2 md:px-8">
//         {/* Logo on the left side */}
//         <a href="/" className="mt-4 ml-4 block cursor-pointer">
//           <img src={logo} alt="GRW Logo" className="h-7 md:h-8 invert" />
//         </a>

//         {/* Centered navigation links */}
//         <div className="hidden lg:flex flex-1 justify-center">
//           <div className="flex space-x-2 font-bold">
//             <a href="/" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/')}`}>Home</a>
//             <a href="/participants" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/participants')}`}>Participants</a>
//             <a href="/partners" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/partners')}`}>Partners</a>
//             <a href="/event-details" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/event-details')}`}>Event Details</a>
//             <a href="/how-to-attend" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/how-to-attend')}`}>How To Attend</a>
//             <a href="/model-hunt" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a href="/about-us" className={`block py-2 px-4 md:py-0 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//         </div>

//         {/* Hamburger menu for mobile and tablet */}
//         <div className="md:flex lg:hidden mt-4 mr-4">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isOpen ? (
//               <FaTimes className="text-3xl" />
//             ) : (
//               <FaBars className="text-3xl" />
//             )}
//           </button>
//         </div>

//         {/* Social media icons on the right side for desktop */}
//         <div className="mt-2 mr-8 hidden lg:flex space-x-4">
//           <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//           <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-xl md:text-2xl cursor-pointer">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </a>
//         </div>
//       </nav>

//       {/* Dropdown menu for mobile and tablet */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-opacity-60 backdrop-filter backdrop-blur-lg font-bold z-20 text-xl">
//           <div className="flex flex-col space-y-2 py-4 ml-4">
//             <a href="/" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/')}`}>Home</a>
//             <a href="/participants" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/participants')}`}>Participants</a>
//             <a href="/partners" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/partners')}`}>Partners</a>
//             <a href="/event-details" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/event-details')}`}>Event Details</a>
//             <a href="/how-to-attend" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/how-to-attend')}`}>How To Attend</a>
//             <a href="/model-hunt" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/model-hunt')}`}>Model Hunt</a>
//             <a href="/about-us" className={`block py-2 px-4 cursor-pointer ${getLinkClass('/about-us')}`}>About</a>
//           </div>
//           <div className="flex justify-center space-x-8 mt-4">
//             <a href="https://www.instagram.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="https://www.youtube.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faYoutube} />
//             </a>
//             <a href="https://www.facebook.com/" className="text-black hover:text-gray-400 text-2xl cursor-pointer">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


 