import { WeatherHours, Wind } from "./TodayForHours";
import getTempWind from "../functions/getTempWind";
import { useContext } from "react";
import { ForecastContext } from "../hooks/WeatherProvider";

function Carousel({ id, tipo }) {
  const weatherData = useContext(ForecastContext)
  const ComponentToRender = tipo === "Weather" ? WeatherHours : Wind;
  const data = getTempWind(weatherData, tipo)
  
  return (
    <div className="mt-4">
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-6">
              <div className="col-3">
                <ComponentToRender weatherData={data[0]}/>
              </div>
              <div className="col-3">
                <ComponentToRender weatherData={data[1]}/>
              </div>
              <div className="col-3">
                <ComponentToRender weatherData={data[2]}/>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center gap-6">
              <div className="col-3">
                <ComponentToRender weatherData={data[3]}/>
              </div>
              <div className="col-3">
                <ComponentToRender weatherData={data[4]}/>
              </div>
              <div className="col-3">
                <ComponentToRender weatherData={data[5]}/>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center gap-6">
              <div className="col-3">
                <ComponentToRender weatherData={data[6]}/>
              </div>
              <div className="col-3">
                <ComponentToRender weatherData={data[7]}/>
              </div>
              <div className="col-3">
                <ComponentToRender weatherData={data[8]}/>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
