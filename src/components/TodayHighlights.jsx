import { AirQuality } from "./InfoHighlights";

function TodayHighlights({ }) {
  return (
    <section className="card-sect mt-4 max-w-[92.5%] flex-col gap-1">
      <h3>Todays Highlights</h3>
      <div className="flex flex-col gap-4">
        <AirQuality />
      </div>
    </section>
  )
}

export default TodayHighlights;