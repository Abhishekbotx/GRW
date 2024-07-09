import React from 'react';
import Image1 from './../../Images/G1.jpg'
import Image2 from './../../Images/G2.jpg'
import Image3 from './../../Images/G3.jpg'
import Image4 from './../../Images/G4.jpg'
import Image5 from './../../Images/G5.jpg'
import Image6 from './../../Images/G6.jpg'

const UpcomingEvents = () => {
  const events = [
    {
      image: Image1,
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2025, January',
    },
    {
      image: Image2,
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2025, January',
    },
    {
      image: Image3,
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2025, January',
    },
    {
      image: Image4,
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2025, January',
    },
    {
      image: Image5,
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2024, January',
    },
    {
      image: Image6,
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2025, January',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
      <h1 className="text-2xl font-bold mb-4">UPCOMING EVENTS</h1>
      <p className="mb-4 mt-4">LED BY FASHION VISIONARIES, OUR DESIGNERS AND STYLISTS BRING A WEALTH OF EXPERIENCE AND A KEEN EYE FOR TRENDS. THEY SHAPE THE NARRATIVE OF EACH RUNWAY, ENSURING THAT BHARAT BRIDAL WEEK REMAINS AT THE FOREFRONT OF BRIDAL FASHION.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center p-4">
              <img src={event.image} alt={event.title} className="w-full h-64 object-cover mb-2 rounded" />
              <div className="text-left w-full">
                <h3 className="text-lg mb-1">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>
            {(index + 1) % 3 === 0 && index !== events.length - 1 && (
              <div className="col-span-full mt-4 mb-4">
                <hr className="border-b border-gray-400" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;


 