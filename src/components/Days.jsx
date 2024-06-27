import { getIcons, getWeatherIcon } from "../functions/getIcons"

function Days({ info, i }) {
  const arrayWeather = info[i].forecast.map(w => w.weather[0].main)
  const weather = getWeatherIcon(arrayWeather);
  if (info.lenght >= 6) {
    i += 1;
  }
  const getTemp = (array) => {
    const arrayTemp = array.map(x => x.main.temp)
    const tempMax = arrayTemp.reduce((max, actual) => (actual > max ? actual : max), arrayTemp[0])
    return Math.round(tempMax)
  }

  return(
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center w-[33%]">
        <i className={`${getIcons(weather.type)} text-2xl`}></i>
        <p className="text-xl">{getTemp(info[i].forecast)}°C</p>
      </div>
      <p className="text-gray-400 text-sm w-[33%] text-center">
        {info[i].date.month}
      </p>
      <p className="text-gray-400 text-sm w-[33%] text-end">
        {info[i].date.dayName}
      </p>
    </div>
  )
}

export default Days;