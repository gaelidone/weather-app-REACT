import React, { useCallback } from "react";
import useFetchData from "./useFetchData";
import { getWeather } from "../functions/getWeather";

export const WeatherContext = React.createContext();
export const ForecastContext = React.createContext();

export function WeatherProvider({ children, city }) {
  const fetchWeather = useCallback(() => getWeather(city.name, city.country), [city]);
  const { data: weatherData, isLoading, error } = useFetchData(fetchWeather);

  return (
    (weatherData &&
      <WeatherContext.Provider value={weatherData[0]}>
        <ForecastContext.Provider value={weatherData[1]}>
          {isLoading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : children}
        </ForecastContext.Provider>
      </WeatherContext.Provider>
    )
  );
}
