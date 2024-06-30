const apiKey = '0da34ff0b705807431591ec725143c7e';

const getCity = async (city) => {
  if (!city) return [];
  let URL = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apiKey}`;
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      console.error('Network response was not ok');
      return [];
    }
    const data = await res.json();
    return data.list || [];
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export default getCity;
