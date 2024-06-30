import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("")
  const [listCities, setListCities] = useState([])

  const showToggle = () => {
    setToggle(!toggle);
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('no-scroll')
  }

  const fetchCities = async (val) => {
    if (value.length >= 3) {
      const cities = await getCity(val);
      console.log(cities)
      setListCities(cities)
    }else{
      setListCities([])
    }
  }

  return(
    <AppContext.Provider value={{city, setCity, toggle, setToggle, value, setValue, listCities, setListCities}}>
      {children}
    </AppContext.Provider>
  )
  
}