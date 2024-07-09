import React from 'react';
import Image1 from '../../Images/G1.jpg'
import Image2 from '../../Images/G2.jpg'
import Image3 from '../../Images/G3.jpg'
import Image4 from '../../Images/G4.jpg'
import Image5 from '../../Images/G5.jpg'
import Image6 from '../../Images/G6.jpg'

const GoaResortWeekHighlights = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 text-center mt-4 md:mt-8">Goa Resort Week Highlights</h1>
      <p className="text-base md:text-lg mb-6 md:mb-8 text-center px-2 md:px-0">
        Welcome to the epitome of coastal couture – Goa Resort Week, an immersive celebration of sun, sea, and style. Born from the fusion of high fashion and beachside allure, Goa Resort Week stands as a beacon of glamour against the backdrop of the sun-drenched shores.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <img
            src={Image1}
            alt="Designers"
            className="w-full h-48 md:h-64 mb-4 object-cover"
          />
          <h2 className="text-lg md:text-xl font-bold mb-2">Designers</h2>
          <p className="text-gray-600 mb-4">
            We have 20+ designers who are highly trained in their work, creating really cool designs.
          </p>
          <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
            More Information About Our Designers
          </button>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <img
            src={Image2}
            alt="Exhibitions & Showcase"
            className="w-full h-48 md:h-64 mb-4 object-top object-cover"
          />
          <h2 className="text-lg md:text-xl font-bold mb-2">Exhibitions & Showcase</h2>
          <p className="text-gray-600 mb-4">
            We have 20+ designers who are highly trained in their work, creating really cool designs.
          </p>
          <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
            More Information About Our Designers
          </button>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1 md:mx-auto tablet-max-w-sm">
          <img
            src={Image3}
            alt="Supporting Organisations"
            className="w-full h-48 md:h-64 mb-4 object-cover"
          />
          <h2 className="text-lg md:text-xl font-bold mb-2">Supporting Organisations</h2>
          <p className="text-gray-600 mb-4">
            We have 20+ designers who are highly trained in their work, creating really cool designs.
          </p>
          <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
            More Information About Our Designers
          </button>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1 md:mx-auto tablet-max-w-sm">
          <img
            src={Image6}
            alt="Supporting Organisations"
            className="w-full h-48 md:h-64 mb-4 object-top object-cover"
          />
          <h2 className="text-lg md:text-xl font-bold mb-2">Supporting Organisations</h2>
          <p className="text-gray-600 mb-4">
            We have 20+ designers who are highly trained in their work, creating really cool designs.
          </p>
          <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
            More Information About Our Designers
          </button>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1 md:mx-auto tablet-max-w-sm">
          <img
            src={Image4}
            alt="Supporting Organisations"
            className="w-full h-48 md:h-64 mb-4 object-top object-cover"
          />
          <h2 className="text-lg md:text-xl font-bold mb-2">Supporting Organisations</h2>
          <p className="text-gray-600 mb-4">
            We have 20+ designers who are highly trained in their work, creating really cool designs.
          </p>
          <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
            More Information About Our Designers
          </button>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1 md:mx-auto tablet-max-w-sm">
          <img
            src={Image5}
            alt="Supporting Organisations"
            className="w-full h-48 md:h-64 mb-4 object-cover"
          />
          <h2 className="text-lg md:text-xl font-bold mb-2">Supporting Organisations</h2>
          <p className="text-gray-600 mb-4">
            We have 20+ designers who are highly trained in their work, creating really cool designs.
          </p>
          <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
            More Information About Our Designers
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoaResortWeekHighlights;



// import React from 'react';

// const GoaResortWeekHighlights = () => {
//   return (
//     <div className="bg-gray-100 p-4 md:p-8">
//       <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 text-center mt-4 md:mt-8">Goa Resort Week Highlights</h1>
//       <p className="text-base md:text-lg mb-6 md:mb-8 text-center px-2 md:px-0">
//         Welcome to the epitome of coastal couture – Goa Resort Week, an immersive celebration of sun, sea, and style. Born from the fusion of high fashion and beachside allure, Goa Resort Week stands as a beacon of glamour against the backdrop of the sun-drenched shores.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//           <img
//             src="https://media.istockphoto.com/id/1283021188/photo/adapting-a-brand-strategy-to-suit-her-companys-target-market.jpg?s=612x612&w=0&k=20&c=t75XtvpO3_pbjxuXc9m3fW28f5sIYEufw87Vmm6tDqc="
//             alt="Designers"
//             className="w-full h-48 md:h-64 mb-4 object-cover"
//           />
//           <h2 className="text-lg md:text-xl font-bold mb-2">Designers</h2>
//           <p className="text-gray-600 mb-4">
//             We have 20+ designers who are highly trained in their work, creating really cool designs.
//           </p>
//           <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
//             More Information About Our Designers
//           </button>
//         </div>
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//           <img
//             src="https://romcompany.com/wp-content/uploads/2019/11/SPOTLIGHT-289-of-453.jpg"
//             alt="Exhibitions & Showcase"
//             className="w-full h-48 md:h-64 mb-4 object-cover"
//           />
//           <h2 className="text-lg md:text-xl font-bold mb-2">Exhibitions & Showcase</h2>
//           <p className="text-gray-600 mb-4">
//             We have 20+ designers who are highly trained in their work, creating really cool designs.
//           </p>
//           <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
//             More Information About Our Designers
//           </button>
//         </div>
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-sm">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGoIZkUUjnvqJAblEm1wYsmpxZqrDcfeyVA&s"
//             alt="Supporting Organisations"
//             className="w-full h-48 md:h-64 mb-4 object-cover"
//           />
//           <h2 className="text-lg md:text-xl font-bold mb-2">Supporting Organisations</h2>
//           <p className="text-gray-600 mb-4">
//             We have 20+ designers who are highly trained in their work, creating really cool designs.
//           </p>
//           <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
//             More Information About Our Designers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoaResortWeekHighlights;



// import React from 'react';

// const GoaResortWeekHighlights = () => {
//   return (
//     <div className="bg-gray-100 p-4 md:p-8">
//       <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 text-center mt-4 md:mt-8">Goa Resort Week Highlights</h1>
//       <p className="text-base md:text-lg mb-6 md:mb-8 text-center px-2 md:px-0">
//         Welcome to the epitome of coastal couture – Goa Resort Week, an immersive celebration of sun, sea, and style. Born from the fusion of high fashion and beachside allure, Goa Resort Week stands as a beacon of glamour against the backdrop of the sun-drenched shores.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//           <img
//             src="https://media.istockphoto.com/id/1283021188/photo/adapting-a-brand-strategy-to-suit-her-companys-target-market.jpg?s=612x612&w=0&k=20&c=t75XtvpO3_pbjxuXc9m3fW28f5sIYEufw87Vmm6tDqc="
//             alt="Designers"
//             className="w-full h-48 md:h-64 mb-4 object-cover"
//           />
//           <h2 className="text-lg md:text-xl font-bold mb-2">Designers</h2>
//           <p className="text-gray-600 mb-4">
//             We have 20+ designers who are highly trained in their work, creating really cool designs.
//           </p>
//           <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
//             More Information About Our Designers
//           </button>
//         </div>
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//           <img
//             src="https://romcompany.com/wp-content/uploads/2019/11/SPOTLIGHT-289-of-453.jpg"
//             alt="Exhibitions & Showcase"
//             className="w-full h-48 md:h-64 mb-4 object-cover"
//           />
//           <h2 className="text-lg md:text-xl font-bold mb-2">Exhibitions & Showcase</h2>
//           <p className="text-gray-600 mb-4">
//             We have 20+ designers who are highly trained in their work, creating really cool designs.
//           </p>
//           <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
//             More Information About Our Designers
//           </button>
//         </div>
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGoIZkUUjnvqJAblEm1wYsmpxZqrDcfeyVA&s"
//             alt="Supporting Organisations"
//             className="w-full h-48 md:h-64 mb-4 object-cover"
//           />
//           <h2 className="text-lg md:text-xl font-bold mb-2">Supporting Organisations</h2>
//           <p className="text-gray-600 mb-4">
//             We have 20+ designers who are highly trained in their work, creating really cool designs.
//           </p>
//           <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
//             More Information About Our Designers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoaResortWeekHighlights;

 