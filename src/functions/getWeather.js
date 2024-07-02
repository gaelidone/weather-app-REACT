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
    const dataWeek = await getWeekDays(city);
    const dataDaily = await getDailyData(city, country);
    dataNow.daily_data = dataDaily;
    console.log(dataNow)
    dataAPI.push(dataNow, dataWeek)
    return dataAPI;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

export const getWeekDays = async (city, country = '') =>{
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

const getDailyData = async (city, country = '') => {
  let apiKey2 = "7f019c0ce3dc449199775dae2b002dfd";
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${apiKey2}&days=1&units=M`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const maxTemp = data.data[0].max_temp;
    const minTemp = data.data[0].min_temp;
    const uvIndex = data.data[0].uv;
    const dewPoint = data.data[0].dewpt;

    return { temp_max: maxTemp, temp_min: minTemp, uv: uvIndex, dew_point: dewPoint };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

