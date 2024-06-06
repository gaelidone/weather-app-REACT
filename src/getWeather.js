const apiKey = '0da34ff0b705807431591ec725143c7e';
const city = 'London';

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)    
  } catch (error) {
    console.log(error)
  }
}

export default getWeather