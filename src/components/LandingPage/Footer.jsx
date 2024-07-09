import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import logo from '../../Images/FooterLogo.png';  
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:ml-12 lg:mr-12">
          <div className="mb-8 lg:mb-0">
            {/* Logo image */}
            <img src={logo} alt="GRW Logo" className="h-10 lg:h-14" />
            <p className="text-sm text-gray-400 max-w-md mt-4 lg:mt-8">
              At Goa Resort Week, our success is a testament to the collaborative efforts and exceptional talent of our dedicated team. Comprising visionaries, creatives, and industry experts, our team is the driving force behind the magic of each event.
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-auto w-full lg:w-auto">
            <div className="flex flex-col items-start lg:items-end">
              <h4 className="text-xl text-gray-200 mb-2 text-left lg:text-right">Socials</h4>
              <ul className="flex space-x-4 mb-4">
                <li>
                  <a href="https://www.instagram.com/goaresortweek/" className="text-gray-200 hover:text-white">
                    <FaInstagram size={24} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" className="text-gray-200 hover:text-white">
                    <FaYoutube size={24} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" className="text-gray-200 hover:text-white">
                    <FaFacebook size={24} />
                  </a>
                </li>
                
              </ul>
            </div>
            <hr className="border-gray-600 w-full mt-4 mb-4" />
            <div className="flex flex-col lg:flex-row lg:space-x-20">
              <div className="flex flex-col mb-4 lg:mb-0">
                <NavLink to="/privacy" className="text-xl text-gray-200 hover:text-white mb-2">
                  Privacy & Policy
                </NavLink>
                <NavLink to="/tc" className="text-xl text-gray-200 hover:text-white">
                  Terms & Conditions
                </NavLink>
              </div>
              <div className="flex flex-col">
                <a href="/contact-us" className="text-xl text-gray-200 hover:text-white mb-2">
                  Contact Us
                </a>
                <a href="/about-us" className="text-xl text-gray-200 hover:text-white mb-2">
                  About Us
                </a>
                <a href="/model-hunt" className="text-xl text-gray-200 hover:text-white">
                  Model Hunt
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 w-full mt-8" />
        <div className="mt-4 text-left text-gray-400 lg:ml-12">
          <p>&copy; 2024 GRW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import React from 'react';
// import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
// import logo from '../../Images/FooterLogo.png';  

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:ml-12 md:mr-12">
//           <div className="mb-8 md:mb-0">
//             {/* Logo image */}
//             <img src={logo} alt="GRW Logo" className="h-10 md:h-14" />
//             <p className="text-sm text-gray-400 max-w-md mt-4 md:mt-8">
//               At Goa Resort Week, our success is a testament to the collaborative efforts and exceptional talent of our dedicated team. Comprising visionaries, creatives, and industry experts, our team is the driving force behind the magic of each event.
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0 md:ml-auto">
//             <div className="flex flex-col items-start md:items-end">
//               <h4 className="text-xl text-gray-200 mb-2 text-left md:text-right">Socials</h4>
//               <ul className="flex space-x-4 mb-4">
//                 <li>
//                   <a href="https://www.instagram.com/" className="text-gray-200 hover:text-white">
//                     <FaInstagram size={24} />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.facebook.com/" className="text-gray-200 hover:text-white">
//                     <FaFacebook size={24} />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.linkedin.com/" className="text-gray-200 hover:text-white">
//                     <FaLinkedin size={24} />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <hr className="border-gray-600 w-full mt-4 mb-4" />
//             <div className="flex flex-col md:flex-row md:space-x-20">
//               <div className="flex flex-col mb-4 md:mb-0">
//                 <a href="/privacy-policy" className="text-xl text-gray-200 hover:text-white mb-2">
//                   Privacy & Policy
//                 </a>
//                 <a href="/terms-conditions" className="text-xl text-gray-200 hover:text-white">
//                   Terms & Conditions
//                 </a>
//               </div>
//               <div className="flex flex-col">
//                 <a href="/contact-us" className="text-xl text-gray-200 hover:text-white mb-2">
//                   Contact Us
//                 </a>
//                 <a href="/about-us" className="text-xl text-gray-200 hover:text-white mb-2">
//                   About Us
//                 </a>
//                 <a href="/model-hunt" className="text-xl text-gray-200 hover:text-white">
//                   Model Hunt
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr className="border-gray-600 w-full mt-8" />
//         <div className="mt-4 text-left text-gray-400 md:ml-12">
//           <p>&copy; 2024 GRW. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



 