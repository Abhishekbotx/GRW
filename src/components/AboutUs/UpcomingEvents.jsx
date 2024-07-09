import React from 'react';

const UpcomingEvents = () => {
  const events = [
    {
      image: 'https://www.hunarcourses.com/blog/wp-content/uploads/2021/01/Hunar-Online-Live-digital-fashion-show-730x410.jpg',
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2024, January',
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/HD/AL/KA/18384253/fashion-show-event-services-1000x1000.jpg',
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2024, January',
    },
    {
      image: 'https://www.lisaadelhi.com/wp-content/uploads/2016/08/lisaa-rajhasthan-fashion-1024x681.jpg',
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2024, January',
    },
    {
      image: 'https://4.imimg.com/data4/MK/NI/ANDROID-30427218/product-500x500.jpeg',
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2024, January',
    },
    {
      image: 'https://static.toiimg.com/thumb/msid-97843086,width-400,resizemode-4/97843086.jpg',
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2024, January',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQ8Ajc5tcdShWEgqXj2qBopcm9JSRH8Wy-bL69gb6zA&s',
      title: 'Bridal Week',
      date: 'Join us on our new journey in 2024, January',
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


 