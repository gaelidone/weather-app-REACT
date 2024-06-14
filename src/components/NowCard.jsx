import React, { useState, useEffect } from "react";
import getWeather from "../getWeather";

function NowCard({ city }) {
  const [weatherData, setWeatherData] = useState(null); // Inicializar con null o un objeto vacío {}
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getWeather(city);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);

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
        <h4 className="w-[55%]">{weatherData.main.temp}°C</h4>
        <i className="bi bi-cloud"></i>
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
