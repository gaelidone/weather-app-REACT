import Carousel from "./Carousel";
import img from "../img/weatherApp-logo.webp";

function WrapToday() {
  return (
    <>
      <section className="flex flex-col mx-auto py-4 px-1 rounded-xl w-full">
        <h4 className="font-bold text-lg px-8 mb-[-1rem]">Weather at</h4>
        <Carousel type="Weather" id="carouselSunCycle"/>
        <Carousel type="Wind" id="carouselWind"/>
      </section>
    </>
  );
}

export default WrapToday;
