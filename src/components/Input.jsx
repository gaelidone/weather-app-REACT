import { useContext } from "react";
import { AppContext } from "../hooks/AppProvider";

function Input({  }) {
  const {setValue} = useContext(AppContext)

  const handleChange = (event) => {
    setValue((event.target.value).toLowerCase());
  }

  return (
    <input 
      type="text" 
      placeholder="Search city..."
      className='bg-transparent w-full outline-none'
      onChange={handleChange}
    />
  )
}

export default Input