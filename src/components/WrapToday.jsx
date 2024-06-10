import Carousel from "./Carousel";
import img from "../img/weatherApp-logo.webp";

function WrapToday() {
  return (
    <>
      <section className="flex flex-col mx-auto p-4 rounded-xl w-full">
        <h4 className="font-bold text-lg">Today at</h4>
        <Carousel tipo="SunCycle" id="carouselSunCycle"/>
        <Carousel tipo="Wind" id="carouselWind"/>
      </section>
    </>
  );
}

export default WrapToday;
