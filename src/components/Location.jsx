const Location = ({ isDesktop }) => {
    return( isDesktop
      ? <div className="hidden md:flex gap-2 rounded-xl px-2 py-1 bg-violet-500 text-blackPri cursor-pointer hover:bg-purple-400">
          <i className="bi bi-crosshair"></i>
          <p>Keep location</p>
        </div>
      : <i className="bi bi-geo-alt px-2.5 py-1.5 bg-violet-500 
        rounded-full cursor-pointer hover:bg-violet-400"></i>

    )
}

export default Location;