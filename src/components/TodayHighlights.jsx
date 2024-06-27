import { TempMaxMin, Sunrise, CardInfo } from "./InfoHighlights";
import { useContext } from "react";
import { WeatherContext } from "../hooks/WeatherProvider";

function TodayHighlights({ }) {
  const weatherData = useContext(WeatherContext)

  if (weatherData) {
    return (
      <section className="card-sect mt-4 max-w-[92.5%] flex-col gap-2">
        <h3 className="font-bold">Todays Highlights</h3>
        <div className="flex flex-col gap-4">
          <TempMaxMin info={weatherData} />
          <Sunrise info={weatherData} />
          
          <CardInfo
            title="Humidity"
            valueKey={weatherData.main.humidity}
            unit="%"
            icon="droplet"
          />
          <CardInfo
            title="Feels like"
            valueKey={weatherData.main.feels_like}
            unit="°C"
            icon="thermometer-half"
          />
          <CardInfo
            title="Wind speed"
            valueKey={weatherData.wind.speed}
            unit="m/s"
            icon="wind"
          />
          <CardInfo 
            title="Pressure"
            valueKey={weatherData.main.pressure}
            unit="hPa"
            icon="water"
          />

        </div>
      </section>
    )
  }
}

export default TodayHighlights;