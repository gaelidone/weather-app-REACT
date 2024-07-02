import { TempMaxMin, Sunrise, CardInfo } from "./InfoHighlights";
import { useContext } from "react";
import { WeatherContext } from "../hooks/WeatherProvider";

function TodayHighlights({ }) {
  const weatherData = useContext(WeatherContext)

  if (weatherData) {
    return (
      <section className="card-sect mt-0 w-full flex-col gap-2">
        <h4 className="font-bold text-lg">Todays Highlights</h4>
        <div className="flex flex-col gap-3">

          <div className="flex flex-col gap-3 lg:flex-row">
            <TempMaxMin info={weatherData} />
            <Sunrise info={weatherData} />
          </div>

          <div className="flex flex-col gap-3 lg:flex-row">
            <CardInfo
              title="UV Index"
              valueKey={weatherData.daily_data.uv}
              icon="sun"
            />
            <CardInfo
              title="Dew point"
              valueKey={weatherData.daily_data.dew_point}
              unit="°C"
              icon="moisture"
            />
          </div>

          <div className="flex flex-col mt-2.5 mb-[-.5rem]">
            <h4 className="font-bold text-lg">Weather now</h4>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <CardInfo
              title="Feels like"
              valueKey={weatherData.main.feels_like}
              unit="°C"
              icon="thermometer-half"
            />
            <CardInfo
              title="Humidity"
              valueKey={weatherData.main.humidity}
              unit="%"
              icon="droplet"
            />
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
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
        </div>
      </section>
    )
  }
}

export default TodayHighlights;