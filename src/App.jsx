import { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'; import 'bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../public/img/weatherApp-logo.webp';
import { ToggleMobile, WrapInput } from './components/Search.jsx'; import NowCard from './components/NowCard.jsx';
import WeekCard from './components/WeekCard.jsx'; import TodayHighlights from './components/TodayHighlights.jsx';
import WrapToday from './components/WrapToday.jsx'; import Location from './components/Location';
import { WeatherProvider } from './hooks/WeatherProvider';
import { AppContext } from './hooks/AppProvider';

function App() {
  const { city, showToggle } = useContext(AppContext)
  return (
    <WeatherProvider city={city}>
      <header className='md:sticky top-0 z-30 bg-blackPri pb-2'>
        <div className="px-4 pt-2 flex items-center justify-between">
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

      <main className='pb-3 pt-2 font-mono flex flex-col items-center lg:flex-row lg:items-start lg:gap-5 lg:px-5'>
        <div className='flex flex-col gap-4 mb-4 max-w-[92.5%] w-full md:flex-row md:gap-5 lg:flex-col lg:w-6/12 xl:w-5/12'>
          <NowCard />
          <WeekCard />
        </div>

        <div className='flex flex-col max-w-[92.5%] m-auto w-full'>
          <TodayHighlights />
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
