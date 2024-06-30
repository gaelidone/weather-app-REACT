import { useEffect } from "react";
import { useState } from "react"

function Input({ setValue }) {


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