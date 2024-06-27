import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'; import 'bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './img/weatherApp-logo.webp'
import Search from './components/Search.jsx'; import NowCard from './components/NowCard.jsx';
import WeekCard from './components/WeekCard.jsx'; import TodayHighlights from './components/TodayHighlights.jsx';
import WrapToday from './components/WrapToday.jsx';
import { WeatherProvider } from './hooks/WeatherProvider';

function App() {
  const [ciudad, setCiudad] = useState("la paz");

  return (
    <WeatherProvider city={ciudad}>
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
        <NowCard />
        <h4 className='pt-3 pb-1.5 font-semibold w-[92%] mx-auto '>5 Days Forecast</h4>
        <WeekCard city={ciudad}/>
        <TodayHighlights />
        <div>
          <WrapToday />
        </div>
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
