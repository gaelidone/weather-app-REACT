import React from 'react';

export function SunCycle() {
  return (
    <div className="bg-blackSec flex flex-col gap-2 px-2 py-3 rounded-lg text-center">
      <p className="text-gray-400">11 AM</p>
      <i className="bi bi-brightness-high text-2xl text-yellow-400"></i>
      <p>22°</p>
    </div>
  );
}

export function Wind() {
  return (
    <div className="bg-blackSec flex flex-col gap-2 px-2 py-3 rounded-lg text-center">
      <p className="text-gray-400">11 AM</p>
      <i className="bi bi-arrow-up-right-square"></i>
      <p>12 km/h</p>
    </div>
  );
}

