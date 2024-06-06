function NowCard({ }) {
  return(
    <section className="card-sect max-w-[90%] flex-col gap-1">
      <p className="text-gray-400">Now</p>
      <div className="flex items-center text-4xl">
        <h4 className="w-[55%]">22°c</h4>
        <i className="bi bi-water"></i>
      </div>
      <p className="text-gray-400">Haze</p>
      <hr className="w-[90%] mx-auto my-4 border-[#444] border-t-2"/>
      <div className="flex flex-col gap-1 text-gray-400 text-sm">
        <p><i className="bi bi-calendar text-white"></i> Wednesday 1, Mar</p>
        <p><i className="bi bi-geo-alt text-white"></i>  Marcos Paz, Buenos Aires</p>
      </div>
    </section>
  )
}


export default NowCard;