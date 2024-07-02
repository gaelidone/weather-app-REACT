import getSunCycle from "../functions/getSunCycle"

export function TempMaxMin({ info }) {
  return (
    <div className="rounded-xl bg-blackPri p-2 w-[95%] mx-auto">
      <p className="text-gray-400 mb-2">Temp Min and Max</p>
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2 items-center">
          <i className="bi bi-thermometer-snow text-3xl text-sky-400"></i>
          <p className="text-xl">{Math.round(info.daily_data.temp_min)}</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="bi bi-thermometer-sun text-3xl text-red-500"></i>
          <p className="text-xl">{Math.round(info.daily_data.temp_max)}</p>
        </div>
      </div>
    </div>
  )
}

export function Sunrise({ info }) {
  const sunCycle = getSunCycle(info)
  return (
    <div className="rounded-xl bg-blackPri p-2 w-[95%] mx-auto">
      <p className="text-gray-400 mb-2">Sunrise & Sunset</p>
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-2 items-center">
          <i className="bi bi-sunrise text-2xl"></i>
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">Sunrise</p>
            <p className="text-lg">{sunCycle[0]}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <i className="bi bi-sunset text-2xl"></i>
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">Sunset</p>
            <p className="text-lg">{sunCycle[1]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CardInfo({ title, valueKey, unit, icon }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-blackPri p-2 w-[95%] mx-auto">
      <p className="text-gray-400">{title}</p>
      <div className="flex justify-between px-1">
        <i className={`bi bi-${icon} text-2xl`}></i>
        <p className="text-xl">{Math.round(valueKey)}{unit}</p>
      </div>
    </div>
  );
}