// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const API_KEY = "c0e3ea64536e6ead8828cb8b24b5204f"; // OpenWeatherMap API key

// const DestinationDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { destination } = location.state;

//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       let city = destination.city;

//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/forecast`,
//           {
//             params: {
//               q: city,
//               cnt: 5,
//               units: "metric",
//               appid: API_KEY,
//             },
//           }
//         );
//         const dailyData = response.data.list.filter((reading) =>
//           reading.dt_txt.includes("18:00:00")
//         );
//         setWeather(dailyData);
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//       }
//     };

//     fetchWeather();
//   }, [destination]);

//   const links = [
//     {
//       text: "Flights",
//       url: "https://www.tripadvisor.com/CheapFlightsHome",
//       img: "https://th.bing.com/th/id/R.b093d85aa143e089eac5c914792aa651?rik=GtBIdZ4mPvYcog&pid=ImgRaw&r=0",
//     },
//     {
//       text: "Hotels",
//       url: `https://www.tripadvisor.com/Search?q=${destination.city}+${destination.country}&geo=1&ssrc=h&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`,
//       img: "https://th.bing.com/th/id/OIP.EO4tIdSBWtZ3dIkeLtamJwHaE7?rs=1&pid=ImgDetMain",
//     },
//     {
//       text: "Restaurants",
//       url: `https://www.tripadvisor.com/Search?q=${destination.city}+${destination.country}&geo=1&ssrc=e&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`,
//       img: "https://th.bing.com/th/id/OIP.LAKlyp7D03xGufDu_LE6mAHaE8?rs=1&pid=ImgDetMain",
//     },
//     {
//       text: "Guides",
//       url: `https://www.frommers.com/search/index.html?sp_q%3D=${destination.city}%2C+${destination.country}`,
//       img: "https://th.bing.com/th/id/OIP.JM_bgQd_feTJY8KOwVowtwHaFa?rs=1&pid=ImgDetMain",
//     },
//     {
//       text: "Things to Do",
//       url: `https://www.tripadvisor.com/Search?q=${destination.city}+${destination.country}&geo=1&ssrc=A&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`,
//       img: "https://th.bing.com/th/id/OIP.Pi2wT9TEEICwvxr6J_Wc-QHaEJ?w=1430&h=800&rs=1&pid=ImgDetMain",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center p-5 bg-white/5 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 mt-16 relative">
//       <div className="w-full flex flex-row">
//         <div className="w-1/2 relative">
//           <img
//             src={destination.img}
//             alt={destination.name}
//             className="w-full h-120 object-cover rounded-lg"
//           />
//           <h1 className="absolute bottom-4 left-4 text-4xl text-white bg-black bg-opacity-50 px-2 py-1 rounded">
//             {destination.name}
//           </h1>
//         </div>
//         <div className="w-1/2 flex flex-col pl-5">
//           <iframe
//             src={destination.location}
//             className="w-full h-64 rounded-lg mb-5"
//             title={`${destination.name} location`}
//           ></iframe>
//           {weather && (
//             <div className="w-full">
//               <h2 className="text-2xl text-white text-center mb-5">Weather</h2>
//               <div className="flex flex-row flex-wrap justify-center gap-4">
//                 {weather.map((day, index) => (
//                   <div
//                     key={index}
//                     className="text-center text-white p-3 bg-white/10 rounded-lg shadow-sm w-1/2"
//                   >
//                     <p className="font-semibold">
//                       {new Date(day.dt_txt).toLocaleDateString()}
//                     </p>
//                     <img
//                       src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
//                       alt={day.weather[0].description}
//                       className="w-12 h-12 mx-auto"
//                     />
//                     <p>{day.weather[0].description}</p>
//                     <p>
//                       {Math.round(day.main.temp_max)}°C /{" "}
//                       {Math.round(day.main.temp_min)}°C
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="mt-5 text-center text-white">
//         <p className="text-white text-lg font-semibold mb-2">
//           Here are some details about {destination.name}.
//         </p>
//         <div className="flex flex-row flex-wrap justify-center gap-4 mt-2">
//           {links.map((link, index) => (
//             <a
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white no-underline transition transform hover:scale-105"
//               key={index}
//             >
//               <img
//                 src={link.img}
//                 alt={link.text}
//                 className="w-40 h-24 object-cover rounded-lg mb-1"
//               />
//               <p className="text-lg">{link.text}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={() => navigate(-1)}
//         className="absolute bottom-4 right-4 text-white bg-green-600 hover:bg-gray-500 px-4 py-2 rounded"
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default DestinationDetail;

// * New Styling:

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API_KEY = "c0e3ea64536e6ead8828cb8b24b5204f"; // OpenWeatherMap API key

const DestinationDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination } = location.state;

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      let city = destination.city;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              q: city,
              cnt: 5,
              units: "metric",
              appid: API_KEY,
            },
          }
        );
        const dailyData = response.data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        setWeather(dailyData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [destination]);

  const links = [
    {
      text: "Flights",
      url: "https://www.tripadvisor.com/CheapFlightsHome",
      img: "https://th.bing.com/th/id/R.b093d85aa143e089eac5c914792aa651?rik=GtBIdZ4mPvYcog&pid=ImgRaw&r=0",
    },
    {
      text: "Hotels",
      url: `https://www.tripadvisor.com/Search?q=${destination.city}+${destination.country}&geo=1&ssrc=h&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`,
      img: "https://th.bing.com/th/id/OIP.EO4tIdSBWtZ3dIkeLtamJwHaE7?rs=1&pid=ImgDetMain",
    },
    {
      text: "Restaurants",
      url: `https://www.tripadvisor.com/Search?q=${destination.city}+${destination.country}&geo=1&ssrc=e&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`,
      img: "https://th.bing.com/th/id/OIP.LAKlyp7D03xGufDu_LE6mAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      text: "Guides",
      url: `https://www.frommers.com/search/index.html?sp_q%3D=${destination.city}%2C+${destination.country}`,
      img: "https://th.bing.com/th/id/OIP.JM_bgQd_feTJY8KOwVowtwHaFa?rs=1&pid=ImgDetMain",
    },
    {
      text: "Things to Do",
      url: `https://www.tripadvisor.com/Search?q=${destination.city}+${destination.country}&geo=1&ssrc=A&searchNearby=false&searchSessionId=001eae3e0a5218dd.ssid&blockRedirect=true&offset=0`,
      img: "https://th.bing.com/th/id/OIP.Pi2wT9TEEICwvxr6J_Wc-QHaEJ?w=1430&h=800&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="flex justify-center items-center py-16 px-4 mt-28">
      <div className="w-full max-w-7xl bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden p-8">
        <div className="flex flex-col items-center bg-white/10 rounded-lg backdrop-blur-md shadow-lg p-5">
          <div className="w-full flex flex-col lg:flex-row mb-8">
            <div className="lg:w-1/2 relative mb-5 lg:mb-0">
              <img
                src={destination.img}
                alt={destination.name}
                className="w-full h-64 lg:h-120 object-cover rounded-lg"
              />
              <h1 className="absolute bottom-4 left-4 text-4xl text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                {destination.name}
              </h1>
            </div>
            <div className="lg:w-1/2 flex flex-col pl-5">
              <iframe
                src={destination.location}
                className="w-full h-64 rounded-lg mb-5"
                title={`${destination.name} location`}
              ></iframe>
              {weather && (
                <div className="w-full">
                  <h2 className="text-2xl text-white text-center mb-5">Weather</h2>
                  <div className="flex flex-row flex-wrap justify-center gap-4">
                    {weather.map((day, index) => (
                      <div
                        key={index}
                        className="text-center text-white p-3 bg-darkGreenForBG border-2 border-yellowishGreenForTextandButtons rounded-lg shadow-sm w-full sm:w-1/2"
                      >
                        <p className="font-semibold">
                          {new Date(day.dt_txt).toLocaleDateString()}
                        </p>
                        <img
                          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                          alt={day.weather[0].description}
                          className="w-12 h-12 mx-auto"
                        />
                        <p>{day.weather[0].description}</p>
                        <p>
                          {Math.round(day.main.temp_max)}°C /{" "}
                          {Math.round(day.main.temp_min)}°C
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 text-center text-white">
            <p className="text-white text-lg font-semibold mb-8 mt-4 bg-darkGreenForBG border-2 border-yellowishGreenForTextandButtons rounded-lg">
              Here are some details about {destination.name}.
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-4 mt-2">
              {links.map((link, index) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline transition transform hover:scale-105"
                  key={index}
                >
                  <img
                    src={link.img}
                    alt={link.text}
                    className="w-40 h-24 object-cover rounded-lg mb-1"
                  />
                  <p className="text-lg">{link.text}</p>
                </a>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-yellowishGreenForTextandButtons hover:bg-white hover:text-darkGreenForBG rounded-full px-8 py-3 transition duration-300 mt-8"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;