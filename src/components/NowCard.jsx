import React, { useContext } from "react";
import { WeatherContext } from "../hooks/WeatherProvider";
import { getIcons2 } from "../functions/getIcons.js";


function NowCard({ }) {
  let weatherData = useContext(WeatherContext);
  return (
    weatherData && (
      <section className="card-sect max-w-[90%] flex-col gap-1">
        <p className="text-gray-400">Now</p>
        <div className="flex items-center text-4xl">
          <h4 className="w-[55%]">{Math.round(weatherData.main.temp)}°C</h4>
          <div className="w-20 h-20">
            <img 
              src={getIcons2(weatherData)} 
              alt="weather icon cartoon" 
              className="w-full h-full object-contain"/>
          </div>
        </div>
        <p className="text-gray-400">{weatherData.weather[0].description}</p>
        <hr className="w-[90%] mx-auto my-4 border-[#444] border-t-2" />
        <div className="flex flex-col gap-1 text-gray-400 text-sm">
          <p>
            <i className="bi bi-calendar text-white"></i> {new Date().toDateString()}
          </p>
          <p>
            <i className="bi bi-geo-alt text-white"></i> {weatherData.name}, {weatherData.sys.country}
          </p>
        </div>
      </section>
    )
  );
}

export default NowCard;
