import React, { useState, useEffect, useCallback } from "react";
import { getWeather } from "../functions/getWeather.js"
import useFetchData from "../hooks/useFetchData";
import { getIcons, getIsNight } from "../functions/getIcons.js";

function NowCard({ city }) {
  const fetchWeather = useCallback(() => getWeather(city), [city]);
  const { data: weatherData, isLoading, error } = useFetchData(fetchWeather);
  let isNight;
  if (weatherData) {isNight = getIsNight(weatherData); console.log(isNight)}
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <section className="card-sect max-w-[90%] flex-col gap-1">
      <p className="text-gray-400">Now</p>
      <div className="flex items-center text-4xl">
        <h4 className="w-[55%]">{Math.round(weatherData.main.temp)}°C</h4>
        <i className={`${getIcons(weatherData.weather[0].main, isNight)}`}></i>
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
  );
}

export default NowCard;
