import React from 'react';
import iram from '../../Images/iram.jpeg'
import neha from '../../Images/neha.jpeg'
import beeresh from '../../Images/beeresh.jpeg'
import nicole from '../../Images/nicole.jpeg'
import simna from '../../Images/simna.jpeg'
const OurTeam = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">Our Team</h2>
        <p className="text-gray-600 text-lg mb-8 text-center sm:text-left">
          At Goa Resort Week, our success is a testament to the collaborative efforts and exceptional talent of our dedicated team. Comprising visionaries, creatives, and industry experts, our team is the driving force behind the magic of each event.
        </p>
        <div className="border-t border-gray-500 pt-8 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center md:flex-row pb-8 ${index % 3 !== 2 ? 'md:border-r' : ''} md:border-gray-500`}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-gray-800 font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-500 pt-8 mt-8 mb-8"></div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: 'Nicole liz faria',
    position: 'Founder And CEO',
    image: nicole,
  },
  {
    name: 'Iram Ayub Khan',
    position: 'Co-Founder',
    image: iram,
  },
  {
    name: 'Beeresh Singh',
    position: 'Accounts Head',
    image: beeresh,
  },
  {
    name: 'Sneha rade',
    position: 'Finance Controller',
    image: neha,
  },
  {
    name: 'simna babu',
    position: 'Makup Artist',
    image: simna,
  },
  {
    name: 'Riya Jones',
    position: 'Social Media Manager',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HiG2STwMH3NX6wNbZQoiyj7wOWW3GwZRkwQ8tHF8UA&s',
  },
  
];

export default OurTeam;



// import React from 'react';

// const OurTeam = () => {
//   return (
//     <div className="py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold mb-4">Our Team</h2>
//         <p className="text-gray-600 text-lg mb-8">
//           At Goa Resort Week, our success is a testament to the collaborative efforts and exceptional talent of our dedicated team. Comprising visionaries, creatives, and industry experts, our team is the driving force behind the magic of each event.
//         </p>
//         <div className="border-t border-gray-500 pt-8 mb-8"></div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div 
//               key={index} 
//               className={`flex items-center pb-8 ${index % 3 !== 2 ? 'md:border-r' : ''} md:border-gray-500`}
//             >
//               <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
//                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//               </div>
//               <div className="text-left">
//                 <h3 className="text-gray-800 font-semibold">{member.name}</h3>
//                 <p className="text-gray-600">{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="border-t border-gray-500 pt-8 mt-8 mb-8"></div>
//       </div>
//     </div>
//   );
// };

// const teamMembers = [
//   {
//     name: 'Jacob Jones',
//     position: 'CEO',
//     image: 'https://images.provenexpert.com/2e/c3/f80fa7eb3db8e03dac2f9e1de7e5/dong-r-rogers_medium_1713960006.jpg',
//   },
//   {
//     name: 'Jacob Jones',
//     position: 'CEO',
//     image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=',
//   },
//   {
//     name: 'Jacob Jones',
//     position: 'CEO',
//     image: 'https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=',
//   },
//   {
//     name: 'Jacob Jones',
//     position: 'CEO',
//     image: 'https://www.shutterstock.com/image-photo/happy-mid-aged-older-business-600nw-2322385015.jpg',
//   },
//   {
//     name: 'Jacob Jones',
//     position: 'CEO',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HiG2STwMH3NX6wNbZQoiyj7wOWW3GwZRkwQ8tHF8UA&s',
//   },
//   {
//     name: 'Jacob Jones',
//     position: 'CEO',
//     image: 'https://qph.cf2.quoracdn.net/main-qimg-14ddc29fbf2d030e82757cadb05f4537-lq',
//   },
// ];

// export default OurTeam;



 