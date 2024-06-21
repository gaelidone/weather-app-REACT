function Days({ info, i }) {
  i += 1
  const getTemp = (array) => {
    const arrayTemp = array.map(x => x.main.temp)
    console.log(arrayTemp)
    const tempMax = arrayTemp.reduce((max, actual) => (actual > max ? actual : max), arrayTemp[0])
    return Math.round(tempMax)
  }

  return(
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <i className="bi bi-cloud-drizzle-fill text-2xl"></i>
        <p className="text-xl">{getTemp(info[i].forecast)}°C</p>
      </div>
      <p className="text-gray-400 text-sm">
        {info[i].date.month}
      </p>
      <p className="text-gray-400 text-sm">
        {info[i].date.dayName}
      </p>
    </div>
  )
}

export default Days;