import React from "react";

const OurDesigners = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Our Designers</h2>
        <p className="text-gray-600 mb-8">
          Led by fashion visionaries, our designers and stylists bring a wealth
          of experience and a keen eye for trends. They shape the narrative of
          each runway, ensuring that Bharat Bridal Week remains at the forefront
          of bridal fashion.
        </p>
        <div className="border-t border-gray-500 pt-8 mb-4 mt-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {designers.map((designer, index) => (
            <div
              key={index}
              className={`p-4 ${
                (index % 3 !== 2 && 'md:border-r') || ''} border-gray-400`}
            >
              <img
                src={designer.image}
                alt={designer.name}
                className="w-full h-64 object-cover mb-2 rounded-md"
              />
              <p className="text-gray-600">{designer.work}</p>
              <h3 className="text-lg font-semibold mb-1">{designer.name}</h3>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-500 pt-8 mt-8 mb-4"></div>
      </div>
    </div>
  );
};

const designers = [
  {
    name: 'Peter Carter',
    work: 'Work at Lakme',
    image:
      'https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs=',
  },
  {
    name: 'John Jacob',
    work: 'Work at Lakme',
    image:
      'https://t3.ftcdn.net/jpg/02/88/15/06/360_F_288150619_tfhyo9yFF7vdwP9yWLDqI6TYg2efyh6i.jpg',
  },
  {
    name: 'Rahul Singh',
    work: 'Work at Lakme',
    image:
      'https://c8.alamy.com/comp/MF3DYX/smiling-graphic-designer-working-on-computer-at-desk-in-office-MF3DYX.jpg',
  },
  {
    name: 'Jason Noah',
    work: 'Work at Lakme',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHxTQuZOa_gphL8-iIMzzx6gyGLoSmCTUPG-iXPB6VLgXe4esTse5h8Hxkekrr1uR2hs&usqp=CAU',
  },
  {
    name: 'Preeti Kaur',
    work: 'Work at Lakme',
    image:
      'https://rrgraphdesign.com/blog/wp-content/uploads/2022/06/austin-distel-21GWwco-JBQ-unsplash.jpg',
  },
  {
    name: 'Shopping Card #1',
    work: 'Bridal Dress',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEZVzKyHNY8yFM7BzYWCu_hDQaYKCncOi1Or44aiIXtRQXmmRM_Nmqcu_4c-aty6sVJM&usqp=CAU',
  },
];

export default OurDesigners;


 