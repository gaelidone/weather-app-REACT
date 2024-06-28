import cloud from "../../img/cloud.webp"; 
import sun from "../../img/sun.webp"; 
import sunCloud from "../../img/sun-cloud.webp"; 
import moon from "../../img/moon.webp";
import rain from "../../img/rain.jpg";
import rainTorment from "../../img/rain-torment.jpg"; 

export const getIcons = (weatherParam, isNight) => {
  const weather = weatherParam.toLowerCase();
  let icon = '';
  switch (weather) {
    case "thunderstorm":
      icon = 'bi bi-cloud-lightning-rain';
      break;
    case "drizzle":
      icon = 'bi bi-cloud-drizzle';
      break;
    case "rain":
      icon = 'bi bi-cloud-rain';
      break;
    case "snow":
      icon = 'bi bi-cloud-snow';
      break;
    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "fog":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      icon = 'bi bi-cloud-fog';
      break;
    case "clear":
      icon = isNight ? 'bi bi-moon text-gray-300' : 'bi bi-brightness-high text-yellow-400';
      break;
    case "clouds":
      icon = 'bi bi-cloud';
      break;
    default:
      icon = 'bi bi-question-circle'; 
      break;
  }

  return icon;
}
export const getIcons2 = (weatherData) => {

  const weather = (weatherData.weather[0].main).toLowerCase()
  const description = weatherData.weather[0].description
  const isNight = getIsNight(weatherData)
  let icon = "";

  if (weather === "clouds") {
    if (description === "few clouds" && isNight === false) {
      icon = sunCloud;
    }else if (description === "few clouds") {
      icon = moon;
    }else{
      icon = cloud;
    }
  }else if (weather === "clear") {
    icon = isNight ? moon : sun;
  }else if (weather === "rain" || weather === "drizzle") {
    icon = rain;
  }else if (weather === "thunderstorm") {
    icon = rainTorment;
  }
  console.log(isNight)
  return icon;
}




export const getWeatherIcon = (array) => {
  const orderArray = [];
  for (let i = 0; i < array.length; i++) {
    const weather = array[i];
    const found = orderArray.find(w => w.type === weather)
    if (found) {
      found.quantity += 1;
    }else{
      orderArray.push({ type: weather, quantity: 1 });
    }
  }
  const mostWeather = orderArray.reduce((max,current) => (current.quantity > max.quantity ? current : max), orderArray[0])
  return mostWeather;

}

export const getIsNight = (obj) => {
  const sunriseTimestamp = obj.sys.sunrise
  const sunsetTimestamp = obj.sys.sunset
  const timezoneOffset = obj.timezone
  const now = new Date();
  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
  const localTime = new Date(utcTime + (timezoneOffset * 1000));

  const sunrise = new Date((sunriseTimestamp + timezoneOffset) * 1000);
  const sunset = new Date((sunsetTimestamp + timezoneOffset) * 1000);


  return localTime < sunrise || localTime > sunset;
}