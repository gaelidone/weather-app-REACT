import { getIcons2 } from "./getIcons";

const getTempWind = (weatherData, type) => {

  const day1 = weatherData[0].forecast;
  const day2 = weatherData[1].forecast;
  const array = [...day1, ...day2];
  const result = []

  const arrayNine = array.filter((x, index) => index < 9);

  for (let i = 0; i < arrayNine.length; i++) {
    let obj = arrayNine[i]
    if (type === "Weather") {
      result.push({
        "hour" : getHour(obj.dt_txt),
        "temp" : Math.round(obj.main.temp),
        "icon": getIcons2(obj)
      })
    }else if (type === "Wind") {
      result.push({
        "hour" : getHour(obj.dt_txt),
        "speed" : Math.round(obj.wind.speed),
        "deg" : obj.wind.deg
      })
    }
  }

  return result;
}



const getHour = (string) => {
  const indexSpace = string.indexOf(" ");
  const hourComplete = string.substring(indexSpace + 1)
  let hour = "";
  if (hourComplete === "00:00:00") {
    hour = "12 AM";
  }else if (hourComplete === "03:00:00") {
    hour = "3 AM"
  }else if (hourComplete === "06:00:00") {
    hour = "6 AM"
  }else if (hourComplete === "09:00:00") {
    hour = "9 AM"
  }else if (hourComplete === "12:00:00") {
    hour = "12 PM"
  }else if (hourComplete === "15:00:00") {
    hour = "3 PM"
  }else if (hourComplete === "18:00:00") {
    hour = "6 PM"
  }else if (hourComplete === "21:00:00") {
    hour = "9 PM"
  }
  return hour;
}


export default getTempWind;
