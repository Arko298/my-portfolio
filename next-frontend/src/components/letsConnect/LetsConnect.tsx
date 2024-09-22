export default function LetsConnect(){
    return (
        <div
          className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
        >
          <div
            className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
          >
            <p className="font-body text-lg uppercase text-white">Let us connect</p>
            <div className="hidden sm:block">
              <i className="bx bx-chevron-right text-3xl text-yellow"></i>
            </div>
          </div>
          <div
            className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
          >
            <a href="/">
              <i
                className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="bx bxl-twitter text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="bx bxl-dribbble text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="bx bxl-linkedin text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="bx bxl-instagram text-2xl text-white hover:text-yellow"
              ></i>
            </a>
          </div>
        </div>
    
    )
}