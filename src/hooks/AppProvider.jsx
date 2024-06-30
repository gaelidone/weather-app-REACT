import React, { useState, createContext } from "react";
import getCity from "../functions/getCity";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState("london");
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("")
  const [listCities, setListCities] = useState([])

  const showToggle = () => {
    setToggle(prevToggle => !prevToggle);
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('no-scroll')
  }

  const fetchCities = async (val) => {
    if (val.length >= 3) {
      const cities = await getCity(val);
      console.log(cities)
      setListCities(cities)
    }else{
      setListCities([])
    }
  }

  return(
    <AppContext.Provider value={{city, setCity, toggle, setToggle, value, setValue, listCities, setListCities, fetchCities, showToggle}}>
      {children}
    </AppContext.Provider>
  )
  
}