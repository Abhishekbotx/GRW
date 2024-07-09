import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UpcomingEvent = () => {
  const navigate = useNavigate();

  const deadline = useMemo(() => new Date("2024-08-15T00:00:00+05:30"), []);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = deadline - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        message: "Time is Over To Get Tickets. See Our Upcoming Events",
      };
    }

    return timeLeft;
  }, [deadline]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const handleRedirect = () => {
    navigate("/model-hunt-details");
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-12">
          "Elysian Elegance: The Grand Affair"
        </h3>
        <div className="bg-black text-white px-4 py-6 md:px-8 md:py-6 rounded-lg flex flex-col md:flex-row justify-between items-center mb-8 h-auto md:h-auto">
          {timeLeft.message ? (
            <div className="w-full text-center">
              <p className="text-xl">{timeLeft.message}</p>
              <button
                onClick={handleRedirect}
                className="bg-black text-white px-4 border border-white py-2 rounded mt-4"
              >
                Our Upcoming Events
              </button>
            </div>
          ) : (
            <>
              <div className="ml-0 md:ml-12 mb-4 md:mb-0 text-center md:text-left">
                <h4 className="text-xl mb-2">Hurry Up!</h4>
                <p className="text-xl text-gray-200">Deadline is very close...</p>
                <NavLink to="/model-hunt">
                  <button className="bg-black text-white border border-white px-10 py-2 rounded mt-4">
                    GET TICKETS
                  </button>
                </NavLink>
              </div>
              <div className="flex justify-center md:justify-end md:mr-16 md:ml-8 md:mt-4 md:mb-4">
                <div className="bg-black border border-gray-600 shadow-lg shadow-gray-500/50 rounded-lg py-2 px-4 flex items-center space-x-6 md:space-x-10 lg:space-x-20">
                  <div className="text-center mt-4 mb-4">
                    <div className="text-4xl md:text-6xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm md:text-xl mt-2">Days</div>
                  </div>
                  <div className="text-center mt-4 mb-4">
                    <div className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm md:text-xl mt-2">Hours</div>
                  </div>
                  <div className="text-center mt-4 mb-4">
                    <div className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm md:text-xl mt-2">Minutes</div>
                  </div>
                  <div className="text-center mt-4 mb-4">
                    <div className="text-4xl md:text-6xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-sm md:text-xl mt-2">Seconds</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="border-t border-gray-400 mt-8 pt-8"></div>
      </div>
    </div>
  );
};

export default UpcomingEvent;




// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useNavigate } from "react-router-dom";

// const UpcomingEvent = () => {
//   const navigate = useNavigate();

//   const deadline = useMemo(() => new Date("2024-06-30T00:00:00+05:30"), []);

//   const calculateTimeLeft = useCallback(() => {
//     const now = new Date();
//     const difference = deadline - now;
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       timeLeft = {
//         message: "Time is Over To Get Tickets. See Our Upcoming Events",
//       };
//     }

//     return timeLeft;
//   }, [deadline]);

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [calculateTimeLeft]);

//   const handleRedirect = () => {
//     navigate("/model-hunt-details");
//   };

//   return (
//     <div className="py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <h3 className="text-4xl font-bold text-center mb-12">
//           "Elysian Elegance: The Grand Affair"
//         </h3>
//         <div className="bg-black text-white px-4 py-6 md:px-8 md:py-6 rounded-lg flex flex-col md:flex-row justify-between items-center mb-8 h-auto md:h-48">
//           {timeLeft.message ? (
//             <div className="w-full text-center">
//               <p className="text-xl">{timeLeft.message}</p>
//               <button
//                 onClick={handleRedirect}
//                 className="bg-black text-white px-4 border border-white py-2 rounded mt-4"
//               >
//                 Our Upcoming Events
//               </button>
//             </div>
//           ) : (
//             <>
//               <div className="ml-0 md:ml-12 mb-4 md:mb-0">
//                 <h4 className="text-xl mb-2">Hurry Up!</h4>
//                 <p className="text-xl text-gray-200">Deadline is very close...</p>
//                 <a href="/model-hunt-details">
//                   <button className="bg-black text-white border border-white px-10 py-2 rounded mt-4">
//                     GET TICKETS
//                   </button>
//                 </a>
//               </div>
//               <div className="flex justify-center md:justify-end md:mr-20">
//                 <div className="bg-black border border-gray-600 shadow-lg shadow-gray-500/50 rounded-lg py-2 px-4 flex items-center space-x-6 md:space-x-20">
//                   <div className="text-center ml-4 md:ml-8 mt-4 mb-4">
//                     <div className="text-4xl md:text-6xl font-bold">{timeLeft.days}</div>
//                     <div className="text-sm md:text-xl mt-2">Days</div>
//                   </div>
//                   <div className="text-center mt-4 mb-4">
//                     <div className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</div>
//                     <div className="text-sm md:text-xl mt-2">Hours</div>
//                   </div>
//                   <div className="text-center mt-4 mb-4">
//                     <div className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</div>
//                     <div className="text-sm md:text-xl mt-2">Minutes</div>
//                   </div>
//                   <div className="text-center mt-4 mb-4">
//                     <div className="text-4xl md:text-6xl font-bold mr-4 md:mr-8">{timeLeft.seconds}</div>
//                     <div className="text-sm md:text-xl mt-2 mr-4 md:mr-8">Seconds</div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//         <div className="border-t border-gray-400 mt-8 pt-8"></div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvent;


 