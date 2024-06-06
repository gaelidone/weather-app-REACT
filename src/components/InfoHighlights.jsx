export function AirQuality({ }) {
  return (
    <div className="rounded-xl bg-blackPri p-2 w-[95%] mx-auto">
      <div className="flex mb-1">
        <p className="text-gray-400 text-sm">Air Quality Index</p>
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
