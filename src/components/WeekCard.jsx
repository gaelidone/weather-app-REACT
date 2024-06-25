import Days from "./Days";
import { useContext } from "react";
import { ForecastContext } from "../hooks/WeatherProvider";


function WeekCard({ city }) {
  const weatherData = useContext(ForecastContext);
  
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