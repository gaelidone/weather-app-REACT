import Days from "./Days";
import { useContext } from "react";
import { ForecastContext, WeatherContext } from "../hooks/WeatherProvider";

function WeekCard({ }) {
  const weatherForecastData = useContext(ForecastContext);
  const weatherData = useContext(WeatherContext);
  const arrayTemp = weatherData.daily_data.forecast_temp;
  if (weatherForecastData) {
    return (
      <section className="card-sect flex-col w-full gap-2">
        <h4 className='text-gray-400 font-normal'>5 Days Forecast</h4>
        {[...Array(5)].map((x, index) => (
          <Days 
            key={index} 
            weatherData={weatherForecastData} 
            i={index} 
            objTemp={arrayTemp[index]}
            />

        ))}
      </section>
    )
  }
}

export default WeekCard;