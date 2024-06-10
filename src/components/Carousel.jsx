import { SunCycle, Wind } from "./TodayForHours";

function Carousel({ id, tipo }) {
  const ComponentToRender = tipo === "SunCycle" ? SunCycle : Wind;
  
  return (
    <div className="mt-4">
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-6">
              <div className="col-3">
                <ComponentToRender />
              </div>
              <div className="col-3">
                <ComponentToRender />
              </div>
              <div className="col-3">
                <ComponentToRender />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="col-4">
                <div className="w-28 h-28 bg-red-400 mx-auto"></div>
              </div>
              <div className="col-4">
                <div className="w-28 h-28 bg-red-600 mx-auto"></div>
              </div>
              <div className="col-4">
                <div className="w-28 h-28 bg-blue-800 mx-auto"></div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="col-4">
                <div className="w-28 h-28 bg-green-300 mx-auto"></div>
              </div>
              <div className="col-4">
                <div className="w-28 h-28 bg-green-800 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
