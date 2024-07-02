import countryList from 'country-list';
import { useContext } from 'react';
import { AppContext } from '../hooks/AppProvider';

function CardCity({ city, country, i }) {
  const { changeCity, setListCities, showToggle, toggle, setValue } = useContext(AppContext) 
  
  const fullCountryName = country === "GB" ? 
    "United Kingdom" : 
    countryList.getName(country)

  const handleClick = () => {
    changeCity(city, country);
    setListCities([])
    setValue("")
    if (toggle) {
      showToggle()
    }
  }


  return(
    <div className={`flex gap-2 hover:bg-[#444] cursor-pointer relative rounded-xl px-2 py-1 ${i === 0 ? "mt-2" : ""}`}>
      <i className="bi bi-geo-alt"></i>
      <div className="absolute z-50 w-full h-full" onClick={handleClick}></div>
      <div className="flex flex-col">
        <p>{city}</p>
        <p className="text-gray-400 text-sm">{fullCountryName}</p>
      </div>
    </div>
  )
}

export default CardCity;