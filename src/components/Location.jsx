import { useContext } from "react";
import { AppContext } from "../hooks/AppProvider";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const Location = ({ isDesktop }) => {
    const { city } = useContext(AppContext);
    
    const handleLocation = () => {
      localStorage.setItem("city", city.name);
      localStorage.setItem("country", city.country)
      Toastify({
        text: "Location saved",
        duration: 1900,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, green,  rgb(15, 120, 76))",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".95em",
          fontFamily: "sans-serif",
          fontWeight: "600",
        },
        offset: {
            x: '.75rem',
            y: '.75rem' 
          },
        onClick: function(){} 
      }).showToast();
    }


    return( isDesktop
      ? <div onClick={handleLocation} className="hidden md:flex md:items-center gap-2 rounded-xl px-2 py-1 bg-purple-500 text-black cursor-pointer hover:bg-purple-400">
          <i className="bi bi-crosshair"></i>
          <p className="text-sm">Set Default Location</p>
        </div>
      : <i onClick={handleLocation} className="bi bi-geo-alt px-2.5 py-1.5 bg-purple-500 
        rounded-full cursor-pointer hover:bg-purple-400"></i>

    )
}

export default Location;