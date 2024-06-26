import { AirQuality, Sunrise, CardInfo } from "./InfoHighlights";
import { useContext } from "react";
import { WeatherContext } from "../hooks/WeatherProvider";

function TodayHighlights({ }) {
  const weatherData = useContext(WeatherContext)

  if (weatherData) {
    return (
      <section className="card-sect mt-4 max-w-[92.5%] flex-col gap-2">
        <h3 className="font-bold">Todays Highlights</h3>
        <div className="flex flex-col gap-4">
          <Sunrise info={weatherData}/>
          <CardInfo />
          <CardInfo />
          <AirQuality />
        </div>
      </section>
    )
  }
}

export default TodayHighlights;