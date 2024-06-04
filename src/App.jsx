import { useState } from 'react'
import getWeather from './getWeather.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './img/weatherApp-logo.webp'
import Search from './components/Search.jsx'; import WeatherNow from './components/WeatherNow.jsx';

function App() {

  return (
    <>
      <header className='bg-blackPri flex items-center justify-between px-4 py-2.5'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt="logo WeatherApp" className='w-10' />
          <h2 className='font-mono font-bold text-xl'>WeatherApp</h2>
        </div>
        <div className="flex gap-2">
          <Search />
          <i className="bi bi-geo-alt px-2.5 py-1.5 bg-indigo-700 rounded-full cursor-pointer hover:bg-indigo-600"></i>
        </div>
      </header>
      <main className='bg-blackPri py-4 font-mono'>
        <WeatherNow />
        <h4 className='pt-3 px-4 pb-1.5'>5 Days Forecast</h4>
      </main>
    </>
  )
}

export default App



