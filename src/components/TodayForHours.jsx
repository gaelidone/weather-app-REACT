import React from 'react';
import { getIcons } from '../functions/getIcons';

export function WeatherHours({ weatherData }) {
  return (
    <div className="bg-blackSec flex flex-col gap-2 px-2 py-3 rounded-lg text-center">
      <p className="text-gray-400">{weatherData.hour}</p>
      <i className={`${getIcons(weatherData.weather_main)} text-2xl`}></i>
      <p>{weatherData.temp}°</p>
    </div>
  );
}

export function Wind({ weatherData }) {
  return (
    <div className="bg-blackSec flex flex-col gap-2 px-2 py-3 rounded-lg text-center">
      <p className="text-gray-400">{weatherData.hour}</p>
      <i className="bi bi-arrow-up-right-square"></i>
      <p>{weatherData.speed} m/s</p>
    </div>
  );
}

