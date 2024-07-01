import { useState, useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'; import 'bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './img/weatherApp-logo.webp'; import Input from './components/Input';
import { ToggleMobile, WrapInput } from './components/Search.jsx'; import NowCard from './components/NowCard.jsx';
import WeekCard from './components/WeekCard.jsx'; import TodayHighlights from './components/TodayHighlights.jsx';
import WrapToday from './components/WrapToday.jsx'; import Location from './components/Location';
import { WeatherProvider } from './hooks/WeatherProvider';
import { AppContext } from './hooks/AppProvider';

function App() {
  const { city, showToggle } = useContext(AppContext)
  return (
    <WeatherProvider city={city}>
      <header>
        <div className="px-4 pt-3 flex items-center justify-between">
          <div className='flex items-center gap-2'>
            <img src={logo} alt="logo WeatherApp" className='w-10' />
            <h2 className='font-mono font-bold text-xl'>WeatherApp</h2>
          </div>
          <WrapInput />
          <Location isDesktop={true}/>

          <div className="flex gap-2 md:hidden">
            <i onClick={showToggle} className="bi bi-search px-2.5 py-1.5 bg-blackSec rounded-full cursor-pointer hover:bg-[#555]"></i>
            <Location />
          </div>

          <ToggleMobile />
        </div>
      </header>

      <main className='bg-blackPri py-4 font-mono'>
        <NowCard />
        <h4 className='pt-3 pb-1.5 font-semibold w-[92%] mx-auto '>5 Days Forecast</h4>
        <WeekCard />
        <TodayHighlights />
        <WrapToday />

      </main>

      <footer className="bg-blackSec text-white py-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2024 gaelidone. All Rights Reserved</p>
          <p className="mb-2">Powered by OpenWeatherMap API.</p>
          <a href="https://github.com/gaelidone" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="bi bi-github text-3xl"></i>
          </a>
        </div>
      </footer>
    </WeatherProvider>
  )
}

export default App
