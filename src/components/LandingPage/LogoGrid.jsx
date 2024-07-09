import React from "react";
import image1 from '../../Images/p1.jpeg'
import image2 from '../../Images/p2.jpeg'
import image3 from '../../Images/p3.jpeg'
import image4 from '../../Images/p4.jpeg'
import image5 from '../../Images/p5.png'
import image6 from '../../Images/p6.jpeg'
import image7 from '../../Images/p7.jpeg'
import image8 from '../../Images/logo8.png'
// import image8 from '../../Images/p8.jpg'

// Logo data
const logoData = [
  {
    src: image1,
    alt: "Adidas",
  },
  {
    src: image2,
    alt: "Puma",
  },
  {
    src: image3,
    alt: "Nike",
  },
  {
    src: image4,
    alt: "Under Armour",
  },
  {
    src: image5,
    alt: "Reebok",
  },
  {
    src: image6,
    alt: "Gucci",
  },
  {
    src: image7,
    alt: "Armani",
  },
  {
    src: image8,
    alt: "Deesan Group",
  },
  // {
  //   src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png",
  //   alt: "Adidas",
  // },
  // {
  //   src: image8,
  //   alt: "Puma",
  // },
];
const LogoGrid = () => {
  return (
    <div className="py-8">
      <h1 className="text-center text-2xl md:text-4xl mb-4 md:mt-12 md:mb-8">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-center px-4">
        {/* Layout for small screens */}
        <div className="md:hidden">
          <div className="border-t border-gray-600 w-full mb-8"></div>
          <div className="grid grid-cols-2 gap-10 items-center mb-8">
            {logoData.map((logo, index) => (
              <div key={index} className="relative flex flex-col items-center p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-20 object-contain mb-4 mx-auto"
                />
                {/* Vertical line */}
                {index % 2 === 0 && (
                  <div className="absolute top-0 right-0 h-full border-r border-gray-300"></div>
                )}
                {/* Horizontal line */}
                {index < logoData.length - 2 && (
                  <div className="absolute bottom-0 left-0 w-full border-t border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Layout for tablet and large screens */}
        <div className="hidden md:block w-full">
          <div className="py-8">
            <div className="flex flex-col items-center px-4">
              <div className="border-t border-gray-600 w-full mb-8"></div>
              <div className="flex flex-wrap justify-center items-center space-x-8 lg:space-x-20 mb-8">
                {logoData.slice(0, 4).map((logo, index) => (
                  <React.Fragment key={index}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-20 w-20 object-contain mb-4"
                    />
                    {index < 3 && (
                      <div className="h-20 border-r border-gray-300 mx-4"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="border-t border-gray-300 w-full mb-8"></div>
              <div className="flex flex-wrap justify-center items-center space-x-8 lg:space-x-20 mt-8 mb-8">
                {logoData.slice(4).map((logo, index) => (
                  <React.Fragment key={index}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-20 w-20 object-contain mb-4"
                    />
                    {index < 3 && (
                      <div className="h-20 border-r border-gray-300 mx-4"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="border-t border-gray-600 w-full mb-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;


 