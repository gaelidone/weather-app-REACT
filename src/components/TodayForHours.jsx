import React from 'react';
import arrow from "../img/arrow.webp"

export function WeatherHours({ weatherData }) {
  return (
    <div className="bg-blackSec flex flex-col items-center gap-1 px-2 py-3 rounded-lg text-center">
      <p className="text-gray-400">{weatherData.hour}</p>
      <div className="w-10 h-10">
          <img
            src={weatherData.icon}
            alt="weather icon cartoon"
            className="w-full h-full object-contain" 
          />
      </div>
      <p>{weatherData.temp}°</p>
    </div>
  );
}

export function Wind({ weatherData }) {
  return (
    <div className="bg-blackSec flex flex-col items-center gap-1 px-2 py-3 rounded-lg text-center">
      <p className="text-gray-400">{weatherData.hour}</p>
      <div className="w-10 h-10">
          <img
            src={arrow}
            alt="weather icon cartoon"
            className="w-full h-full object-contain"
            style={{ transform: `rotate(${weatherData.deg}deg)` }} 
          />
      </div>
      <p>{weatherData.speed} m/s</p>
    </div>
  );
}

