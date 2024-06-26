import getSunCycle from "../functions/getSunCycle"

export function AirQuality({ }) {
  return (
    <div className="rounded-xl bg-blackPri p-2 w-[95%] mx-auto">
      <div className="flex mb-2">
        <p className="text-gray-400">Air Quality Index</p>
      </div>
      <div className="flex justify-between text-xl items-center">
        <i className="bi bi-wind text-2xl"></i>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p>204</p>
            <p className="text-gray-400 text-sm">PM25</p>
          </div>
          <div className="flex items-center gap-1">
            <p>204</p>
            <p className="text-gray-400 text-sm">PM25</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p>204</p>
            <p className="text-gray-400 text-sm">PM25</p>
          </div>
          <div className="flex items-center gap-1">
            <p>204</p>
            <p className="text-gray-400 text-sm">PM25</p>
          </div>
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
          <i className="bi bi-sun text-2xl"></i>
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">Sunrise</p>
            <p className="text-lg">{sunCycle[0]}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <i className="bi bi-moon text-2xl"></i>
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">Sunset</p>
            <p className="text-lg">{sunCycle[1]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CardInfo({ }) {
  return(
    <div className="flex flex-col gap-2 rounded-xl bg-blackPri p-2 w-[95%] mx-auto">
      <p className="text-gray-400">Humidity</p>
      <div className="flex justify-between px-1">
        <i className="bi bi-droplet text-2xl"></i>
        <p className="text-xl">56%</p>
      </div>
    </div>
  )
}