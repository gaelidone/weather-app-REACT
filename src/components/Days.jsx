import { getIcons2, getWeatherIcon } from "../functions/getIcons"

function Days({ i, weatherData }) {
  const iconWeather = getWeatherIcon(weatherData, i)
  i = weatherData.lenght >= 6 ? i += 1 : i;
  
  const getTemp = (array) => {
    const arrayTemp = array.map(x => x.main.temp)
    const tempMax = arrayTemp.reduce((max, actual) => (actual > max ? actual : max), arrayTemp[0])
    return Math.round(tempMax)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center w-[33%]">
        <div className="w-8 h-8">
          <img
            src={getIcons2(null, iconWeather)}
            alt="weather icon cartoon"
            className="w-full h-full object-contain" />
        </div>
        <p className="text-xl">{getTemp(weatherData[i].forecast)}°C</p>
      </div>
      <p className="text-gray-400 text-sm w-[33%] text-center">
        {weatherData[i].date.month}
      </p>
      <p className="text-gray-400 text-sm w-[33%] text-end">
        {weatherData[i].date.dayName}
      </p>
    </div>
  )
}

export default Days;