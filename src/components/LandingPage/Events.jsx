import React, { useState } from "react";
import event from "../../Images/background.png";
import { IoLocationSharp, IoCalendarSharp } from "react-icons/io5";

const CalendarOfEventsCountdown = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const renderDayContent = () => {
    switch (selectedDay) {
      case "Day 1":
        return (
          <div className="text-xl">
            <h1 className="mt-4 mb-4 text-4xl">Day 1</h1>
            <p className="mb-4">
              At Goa Resort Week, our success is a testament to the collaborative efforts and exceptional talent of our dedicated team. Comprising visionaries, creatives, and industry experts, our team is the driving force behind the magic of each event.
            </p>
            <p className="mt-8 mb-4 flex items-center">
              <IoCalendarSharp className="mr-4" />
              <span className="font-bold">Date:</span> 08 April 2025
            </p>
            <p className="flex items-center">
              <IoLocationSharp className="mr-4" />
              <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
            </p>
          </div>
        );
      case "Day 2":
        return (
          <div className="text-xl">
            <h1 className="mt-4 mb-4 text-4xl">Day 2</h1>
            <p className="mb-4">
            Our success continues on Day 2, fueled by groundbreaking ideas and creative solutions. Our team, comprised of forward-thinking professionals, brings fresh perspectives to the table, ensuring every aspect of Goa Resort Week is innovative and inspiring. Their relentless pursuit of excellence guarantees an unforgettable experience for all.
            </p>
            <p className="mt-8 mb-4 flex items-center">
              <IoCalendarSharp className="mr-4" />
              <span className="font-bold">Date:</span> 09 April 2025
            </p>
            <p className="flex items-center">
              <IoLocationSharp className="mr-4" />
              <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
            </p>
          </div>
        );
      case "Day 3":
        return (
          <div className="text-xl">
            <h1 className="mt-4 mb-4 text-4xl">Day 3</h1>
            <p className="mb-4">
            Day 3 at Goa Resort Week is a vibrant celebration of culture and tradition. Our dedicated team curates an array of cultural performances, showcasing the rich heritage of Goa. Their commitment to authenticity and detail brings the essence of Goan culture to life, creating a truly immersive experience for our guests.
            </p>
            <p className="mt-8 mb-4 flex items-center">
              <IoCalendarSharp className="mr-4" />
              <span className="font-bold">Date:</span> 10 April 2025
            </p>
            <p className="flex items-center">
              <IoLocationSharp className="mr-4" />
              <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
            </p>
          </div>
        );
      case "Day 4":
        return (
          <div className="text-xl">
            <h1 className="mt-4 mb-4 text-4xl">Day 4</h1>
            <p className="mb-4">
            As we conclude Goa Resort Week on Day 4, our focus shifts to the future. Our team, with their unwavering dedication and forward-thinking approach, lays the groundwork for the years ahead. Their collective vision ensures that Goa Resort Week will continue to evolve and set new benchmarks in the industry.
            </p>
            <p className="mt-8 mb-4 flex items-center">
              <IoCalendarSharp className="mr-4" />
              <span className="font-bold">Date:</span> 11 April 2025
            </p>
            <p className="flex items-center">
              <IoLocationSharp className="mr-4" />
              <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Calendar of Events & Countdown
      </h1>
      <p className="text-center text-lg md:text-xl mb-6 md:mb-12">
        At Goa Resort Week, our success is a testament to the collaborative efforts and exceptional talent of our dedicated team. Comprising visionaries, creatives, and industry experts, our team is the driving force behind the magic of each event.
      </p>
      <div className="flex flex-col md:flex-row mb-8 items-start">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={event}
            alt="Event"
            className="w-full max-w-sm md:max-w-md mb-4 md:mb-0 md:mr-4"
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 md:ml-4">
          <div className="flex flex-wrap space-x-2 mb-4 justify-center md:justify-start">
            <button
              className={`px-4 py-2 rounded-md ${
                selectedDay === "Day 1" ? "bg-black text-white" : "bg-gray-300"
              }`}
              onClick={() => handleDayChange("Day 1")}
            >
              Day 1
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedDay === "Day 2" ? "bg-black text-white" : "bg-gray-300"
              }`}
              onClick={() => handleDayChange("Day 2")}
            >
              Day 2
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedDay === "Day 3" ? "bg-black text-white" : "bg-gray-300"
              }`}
              onClick={() => handleDayChange("Day 3")}
            >
              Day 3
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedDay === "Day 4" ? "bg-black text-white" : "bg-gray-300"
              }`}
              onClick={() => handleDayChange("Day 4")}
            >
              Day 4
            </button>
          </div>
          <div>{renderDayContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarOfEventsCountdown;




// import React, { useState } from "react";
// import event from "../../Images/background.png";
// import { IoLocationSharp, IoCalendarSharp } from "react-icons/io5";

// const CalendarOfEventsCountdown = () => {
//   const [selectedDay, setSelectedDay] = useState("Day 1");

//   const handleDayChange = (day) => {
//     setSelectedDay(day);
//   };

//   const renderDayContent = () => {
//     switch (selectedDay) {
//       case "Day 1":
//         return (
//           <div className="text-xl">
//             <h1 className="mt-4 mb-4 text-4xl">Day 1</h1>
//             <p className="mb-4">
//               At Goa Resort Week, our success is a testament to the
//               collaborative efforts and exceptional talent of our dedicated
//               team. Comprising visionaries, creatives, and industry experts, our
//               team is the driving force behind the magic of each event.
//             </p>
//             <p className="mt-8 mb-4 flex items-center">
//               <IoCalendarSharp className="mr-4" />
//               <span className="font-bold">Date:</span> 08 April 2024
//             </p>
//             <p className="flex items-center">
//               <IoLocationSharp className="mr-4" />
//               <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
//             </p>
//           </div>
//         );
//       case "Day 2":
//         return (
//           <div className="text-xl">
//             <h1 className="mt-4 mb-4 text-4xl">Day 2</h1>
//             <p className="mb-4">
//               At Goa Resort Week, our success is a testament to the
//               collaborative efforts and exceptional talent of our dedicated
//               team. Comprising visionaries, creatives, and industry experts, our
//               team is the driving force behind the magic of each event.
//             </p>
//             <p className="mt-8 mb-4 flex items-center">
//               <IoCalendarSharp className="mr-4" />
//               <span className="font-bold">Date:</span> 08 April 2024
//             </p>
//             <p className="flex items-center">
//               <IoLocationSharp className="mr-4" />
//               <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
//             </p>
//           </div>
//         );
//       case "Day 3":
//         return (
//           <div className="text-xl">
//             <h1 className="mt-4 mb-4 text-4xl">Day 3</h1>
//             <p className="mb-4">
//               At Goa Resort Week, our success is a testament to the
//               collaborative efforts and exceptional talent of our dedicated
//               team. Comprising visionaries, creatives, and industry experts, our
//               team is the driving force behind the magic of each event.
//             </p>
//             <p className="mt-8 mb-4 flex items-center">
//               <IoCalendarSharp className="mr-4" />
//               <span className="font-bold">Date:</span> 08 April 2024
//             </p>
//             <p className="flex items-center">
//               <IoLocationSharp className="mr-4" />
//               <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
//             </p>
//           </div>
//         );
//       case "Day 4":
//         return (
//           <div className="text-xl">
//             <h1 className="mt-4 mb-4 text-4xl">Day 4</h1>
//             <p className="mb-4">
//               At Goa Resort Week, our success is a testament to the
//               collaborative efforts and exceptional talent of our dedicated
//               team. Comprising visionaries, creatives, and industry experts, our
//               team is the driving force behind the magic of each event.
//             </p>
//             <p className="mt-8 mb-4 flex items-center">
//               <IoCalendarSharp className="mr-4" />
//               <span className="font-bold">Date:</span> 08 April 2024
//             </p>
//             <p className="flex items-center">
//               <IoLocationSharp className="mr-4" />
//               <span className="font-bold">Venue:</span> Mumbai Center Hotel Xyz
//             </p>{" "}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-gray-100 p-4 md:p-8">
//       <h1 className="text-center text-2xl md:text-3xl font-bold mb-4 md:mb-6">
//         Calendar of Events & Countdown
//       </h1>
//       <p className="text-center text-lg md:text-xl mb-6 md:mb-12">
//         At Goa Resort Week, our success is a testament to the collaborative
//         efforts and exceptional talent of our dedicated team. Comprising
//         visionaries, creatives, and industry experts, our team is the driving
//         force behind the magic of each event.
//       </p>
//       <div className="flex flex-col md:flex-row mb-8 items-start ">
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={event}
//             alt="Event"
//             className="w-full max-w-sm md:max-w-md mb-4 md:mb-0"
//           />
//         </div>
//         <div className="flex flex-col items-start w-full md:w-1/2">
//           <div className="flex space-x-4 mb-4 justify-center md:justify-start">
//             <button
//               className={`px-4 py-2 rounded-md ${
//                 selectedDay === "Day 1" ? "bg-black text-white" : "bg-gray-300"
//               }`}
//               onClick={() => handleDayChange("Day 1")}
//             >
//               Day 1
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md ${
//                 selectedDay === "Day 2" ? "bg-black text-white" : "bg-gray-300"
//               }`}
//               onClick={() => handleDayChange("Day 2")}
//             >
//               Day 2
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md ${
//                 selectedDay === "Day 3" ? "bg-black text-white" : "bg-gray-300"
//               }`}
//               onClick={() => handleDayChange("Day 3")}
//             >
//               Day 3
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md ${
//                 selectedDay === "Day 4" ? "bg-black text-white" : "bg-gray-300"
//               }`}
//               onClick={() => handleDayChange("Day 4")}
//             >
//               Day 4
//             </button>
//           </div>
//           <div>{renderDayContent()}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendarOfEventsCountdown;



 