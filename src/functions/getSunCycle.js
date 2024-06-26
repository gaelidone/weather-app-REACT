const getSunCycle = (data) => {
  const sys = data.sys;
  const sunriseDate = new Date(sys.sunrise * 1000); // Convertir de segundos a milisegundos
  const sunsetDate = new Date(sys.sunset * 1000); // Convertir de segundos a milisegundos

  // Obtener las horas y minutos en formato HH:MM AM/PM
  const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  const sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return [sunriseTime, sunsetTime];
}

export default getSunCycle;