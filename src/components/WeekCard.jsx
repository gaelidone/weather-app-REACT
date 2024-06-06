import Days from "./Days";

function WeekCard() {
  return(
    <section className="card-sect flex-col max-w-[92.5%] gap-2">
      {[...Array(5)].map((x, index) => (
        <Days key={index} />
      ))}
    </section>
  )
}

export default WeekCard;