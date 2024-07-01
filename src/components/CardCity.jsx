import countryList from 'country-list';
import { useContext } from 'react';
import { AppContext } from '../hooks/AppProvider';

function CardCity({ city, country }) {
  const { changeCity, setListCities, showToggle, toggle } = useContext(AppContext) 
  
  const fullCountryName = country === "GB" ? 
    "United Kingdom" : 
    countryList.getName(country)

  const handleClick = () => {
    changeCity(city, country);
    setListCities([])
    if (toggle) {
      showToggle()
    }
  }


  return(
    <div className="flex gap-2 hover:bg-[#333] cursor-pointer relative">
      <i className="bi bi-geo-alt"></i>
      <div className="absolute z-50 w-full h-full" onClick={handleClick}></div>
      <div className="flex flex-col">
        <p>{city}</p>
        <p className="text-[#777] text-xs">{fullCountryName}</p>
      </div>
    </div>
  )
}

export default CardCity;