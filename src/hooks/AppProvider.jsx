import React, { useState, createContext } from "react";
import getCity from "../functions/getCity";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const initialCity = localStorage.getItem("city") || "London";
  const initialCountry = localStorage.getItem("country") || "GB"

  console.log(initialCity)

  const [city, setCity] = useState({name: initialCity, country: initialCountry});
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("")
  const [listCities, setListCities] = useState([]);

  const showToggle = () => {
    setToggle(prevToggle => !prevToggle);
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('no-scroll')
  }

  const fetchCities = async (val) => {
    if (val.length >= 3) {
      const cities = await getCity(val);
      setListCities(cities)
    }else{
      setListCities([])
    }
  }

  const changeCity = (cityParam, countryParam) => {
    setCity({name: cityParam, country: countryParam})
  }

  return(
    <AppContext.Provider value={{city, setCity, toggle, setToggle, value, setValue, listCities, setListCities, fetchCities, showToggle, changeCity}}>
      {children}
    </AppContext.Provider>
  )
  
}