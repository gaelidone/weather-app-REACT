import Days from "./Days";
import { getWeekDays } from "../getWeather";
import { useCallback, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";


function WeekCard({ city }) {
  const fetchWeather = useCallback(() => getWeekDays(city), [city]);
  const { data: weatherData, isLoading, error } = useFetchData(fetchWeather);

  if (weatherData) {
    return (
      <section className="card-sect flex-col max-w-[92.5%] gap-2">
        {[...Array(5)].map((x, index) => (
          <Days key={index} info={weatherData} i={index}/>
        ))}
      </section>
    )
  }
}

export default WeekCard;