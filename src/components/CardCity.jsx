import countryList from 'country-list';

function CardCity({ city, country }) {
  const handleClick = (e) => {
    console.log(e)
  }
  const fullCountryName = country === "GB" ? 
    "United Kingdom" : 
    countryList.getName(country)

  return(
    <div className="flex gap-2 hover:bg-[#333] cursor-pointer relative">
      <i className="bi bi-geo-alt"></i>
      <div className="absolute z-50 w-full h-full" onClick={() => handleClick(click)}></div>
      <div className="flex flex-col">
        <p>{city}</p>
        <p className="text-[#777] text-xs">{fullCountryName}</p>
      </div>
    </div>
  )
}

export default CardCity;