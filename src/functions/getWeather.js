const apiKey = '0da34ff0b705807431591ec725143c7e';

export const getWeather = async (city, country = '') => {
  let dataAPI = [];
  let url;

  if (country) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const dataNow = await res.json();
    const dataWeek = await getWeekDays(city, country);
    const dataDaily = await getDailyData(dataNow);
    dataNow.daily_data = dataDaily;
    dataAPI.push(dataNow, dataWeek)
    return dataAPI;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWeekDays = async (city, country = '') => {
  let url;
  if (country) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json()
    const arrayWeek = getArrayWeek(data);

    return arrayWeek;

  } catch (error) {
    throw error
  }
}

const getArrayWeek = (data) => {
  const days = {};

  data.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayName = date.toLocaleString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleString('en-US', { month: 'short' });
    const dateString = `${year}-${month}-${day}`;

    if (!days[dateString]) {
      days[dateString] = {
        date: {
          year,
          month: monthName,
          day,
          dayName,
        },
        forecast: []
      };
    }

    days[dateString].forecast.push(item);
  });

  return Object.values(days);
}

const getDailyData = async (data) => {
  const location = (data.coord.lat).toString() + "," + (data.coord.lon).toString()
  const apiKey = "8jEhCIZdA6eeAGprZgkUFYj2tvQRVvsB"
  const url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperatureMax,temperatureMin,uvIndex,dewPoint,precipitationProbability&units=metric&timesteps=1d&apikey=${apiKey}`;
  try {
    const res = await fetch(url);
    if (!res) {
      console.log('Error fetching weather data:', error);
      return;
    }
    const data = await res.json();
    const tempMax = data.data.timelines[0].intervals[0].values.temperatureMax;
    const tempMin = data.data.timelines[0].intervals[0].values.temperatureMin;
    const uvIndex = data.data.timelines[0].intervals[0].values.uvIndex;
    const dewPoint = data.data.timelines[0].intervals[0].values.dewPoint;
	  const forecastTemp = data.data.timelines[0].intervals
	  .filter((_, index) => index !== 0)
	  .map(x => ({ temp_max: x.values.temperatureMax, temp_min: x.values.temperatureMin }));
	  return { temp_max: tempMax, temp_min: tempMin, uv: uvIndex, dew_point: dewPoint, forecast_temp: forecastTemp};
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}


