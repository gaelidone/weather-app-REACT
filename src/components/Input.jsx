import { useContext } from "react";
import { AppContext } from "../hooks/AppProvider";

function Input({ classParam, isDesktop }) {
  const { setValue } = useContext(AppContext)
  const handleChange = (event) => {
    setValue((event.target.value).toLowerCase());
  }

  return(isDesktop 
    ? (
      <div className="flex">
        <i className="bi bi-search mr-2.5"></i>
        <input
          type="text"
          placeholder="Search city..."
          className={classParam}
          onChange={handleChange}
        />
      </div>
    )
    : (
      <input
        type="text"
        placeholder="Search city..."
        className={classParam}
        onChange={handleChange}
      />
    ))


    
  

}

export default Input