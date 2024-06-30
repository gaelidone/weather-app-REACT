import React from 'react';
import CardCity from './CardCity';
import Input from './Input';
import { useState, useEffect } from 'react';
import getCity from '../functions/getCity';
import { useContext } from 'react';
import { AppContext } from '../hooks/AppProvider';

export function ToggleMobile({ }) {
  const { fetchCities, value, listCities, showToggle, toggle } = useContext(AppContext)
   
  useEffect(() => {
    fetchCities(value)
  }, [value])

  return (
    <div className={`flex flex-col bg-blackSec w-screen h-screen fixed top-0 left-0 z-30 p-3 transition-transform duration-400 ease-in-out
      ${toggle ? 'transform scale-100 translate-x-0 translate-y-0' : 'transform scale-0 -translate-x-1/2 -translate-y-1/2'}`}>
      <div className="flex gap-3 mb-3">
        <i onClick={showToggle} className="bi bi-arrow-left cursor-pointer text-xl"></i>
        <Input />
      </div>
      <hr className="border-gray-500 border-t-2 mb-2"/>
      <div className='flex flex-col gap-1'>
        {[...listCities].map((obj,index) => (
          <CardCity 
            key={index}
            city={obj.name}
            country={obj.sys.country}
          />)
        )}
      </div>
    </div>
  );
}

