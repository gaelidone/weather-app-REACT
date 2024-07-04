import { getIcons2, getWeatherIcon } from "../functions/getIcons"

function Days({ i, objTemp, weatherData }) {
  console.log(objTemp)
  const iconWeather = getWeatherIcon(weatherData, i)
  i = weatherData.lenght >= 6 ? i += 1 : i;
  const getTemp = (array) => {
    const arrayTemp = array.map(x => x.main.temp)
    const tempMax = arrayTemp.reduce((max, actual) => (actual > max ? actual : max), arrayTemp[0])
    return Math.round(tempMax)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center w-[40%]">
        <div className="w-10 h-10">
          <img
            src={getIcons2(null, iconWeather)}
            alt="weather icon cartoon"
            className="w-full h-full object-contain" />
        </div>
        <div className="flex gap-1.5">
          <p>{Math.round(objTemp.temp_max)}°</p>

          <p className="text-gray-400">{Math.round(objTemp.temp_min)}°</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm w-[20%] text-center">
        {weatherData[i].date.month} {weatherData[i].date.day}
      </p>
      <p className="text-gray-400 text-sm w-[20%] text-end">
        {weatherData[i].date.dayName}
      </p>
    </div>
  )
}

export default Days;