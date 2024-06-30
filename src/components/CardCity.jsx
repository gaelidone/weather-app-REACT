function CardCity({ city, country }) {
  return(
    <div className="flex gap-2 hover:bg-[#333] cursor-pointer">
      <i className="bi bi-geo-alt"></i>
      <div className="flex flex-col">
        <p>{city}</p>
        <p className="text-[#777] text-xs">{country}</p>
      </div>
    </div>
  )
}

export default CardCity;