const apiKey = '0da34ff0b705807431591ec725143c7e';

export const getWeather = async (city) => {
  let dataAPI = []
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const dataNow = await res.json();
    const dataWeek = await getWeekDays(city);
    dataAPI.push(dataNow, dataWeek)
    return dataAPI;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

export const getWeekDays = async (city) =>{
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
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
