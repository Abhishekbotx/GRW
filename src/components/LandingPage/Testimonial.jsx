import React from 'react';
import Slider from 'react-slick';
import testimonials from './data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconImage from '../../Images/Testimonial.png'; 

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide uppercase text-gray-900">Testimonial</h1>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-md h-96 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {Array(testimonial.rating).fill().map((_, i) => (
                          <div key={i} className="text-yellow-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        ))}
                      </div>
                      <img src={iconImage} alt="Icon" className="h-5 w-30 ml-2" /> 
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <img src={testimonial.author.imageUrl} alt={testimonial.author.name} className="h-10 w-10 rounded-full" />
                    <div className="ml-3">
                      <h3 className="text-gray-900 font-semibold">{testimonial.author.name}</h3>
                      <p className="text-gray-600">{testimonial.author.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;


 