import Days from "./Days";
import { useContext } from "react";
import { ForecastContext } from "../hooks/WeatherProvider";


function WeekCard({ }) {
  const weatherData = useContext(ForecastContext);

  if (weatherData) {
    return (
      <section className="card-sect flex-col w-full gap-2">
        {[...Array(5)].map((x, index) => (
          <Days 
            key={index} 
            weatherData={weatherData} 
            i={index} />
        ))}
      </section>
    )
  }
}

export default WeekCard;