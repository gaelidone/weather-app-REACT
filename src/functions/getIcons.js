export const getIcons2 = (weatherData, obj) => {
  let weather; 
  let description; 
  let isNight;
  if (weatherData) {
    weather = (weatherData.weather[0].main).toLowerCase()
    description = weatherData.weather[0].description
    isNight = getIsNight(weatherData)
  }else{
    weather = (obj.main).toLowerCase();
    description = obj.description;
    isNight = false
  }
  
  let icon = "";

  if (weather === "clouds") {
    if (description === "few clouds" && isNight === false) {
      icon = "partly-cloudy-day";
    }else if (description === "few clouds") {
      icon = "partly-cloudy-night";
    }else{
      icon = "cloudy";
    }
  }else if (weather === "clear") {
    icon = isNight ? "clear-night" : "clear-day";
  }else if (weather === "rain") {
    icon = "rain";
  }else if (weather === "thunderstorm") {
    icon = "thunderstorms-rain";
  }else if (weather === "squall" || weather === "drizzle") {
    icon = "drizzle"
  }else if (weather === "snow") {
    icon = "snow"
  }

  const src = `../../public/img/${icon}.svg`;
  return src;
}




export const getWeatherIcon = (weatherData, i) => {
  const arrayWeather = weatherData[i].forecast.map(w => w.weather[0])
  const orderArray = [];
  for (let i = 0; i < arrayWeather.length; i++) {
    const weather = arrayWeather[i];
    const found = orderArray.find(w => w.main === weather)
    if (found) {
      found.quantity += 1;
    }else{
      orderArray.push({ main: weather.main, description: weather.description, quantity: 1 });
    }
  }
  const mostWeather = orderArray.reduce((max,current) => (current.quantity > max.quantity ? current : max), orderArray[0])
  return mostWeather;

}

export function getIsNight(city) {
  const currentTime = new Date().getTime() / 1000; 

  const sunrise = city.sys.sunrise;
  const sunset = city.sys.sunset;

  if (currentTime > sunset || currentTime < sunrise) {
      return true; // Es de noche
  } else {
      return false; // Es de día
  }
}


