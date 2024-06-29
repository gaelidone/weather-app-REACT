import React from 'react';
import CardCity from './CardCity';

export function ToggleMobile({ state, close }) {
  return (
    <div className={`flex flex-col bg-blackSec w-screen h-screen fixed top-0 left-0 z-30 p-3 transition-transform duration-500 ease-in-out
      ${state ? 'transform scale-100 translate-x-0 translate-y-0' : 'transform scale-0 -translate-x-1/2 -translate-y-1/2'}`}>
      <div className="flex gap-3 mb-3">
        <i onClick={close} className="bi bi-arrow-left cursor-pointer text-xl"></i>
        <input type="text" placeholder="Search city..." 
          className='bg-transparent w-full outline-none'
        />
      </div>
      <hr className="border-gray-500 border-t-2 mb-2"/>
      <div className='flex flex-col gap-1'>
        {[...Array(5)].map((_,index) => (
          <CardCity 
            key={index}
          />)
        )}
      </div>
    </div>
  );
}

