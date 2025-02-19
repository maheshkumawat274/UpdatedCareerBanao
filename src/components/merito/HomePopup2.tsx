import { useState, useEffect } from "react";
import default_img from "../../assets/defaultCardLogo.jpeg";

import Static from "./Static";

const customStyle = {
  boxShadow: "rgb(52 51 51) 3px 6px 17px 1px",
};

function HomePopUp2() {
  const [isOpen, setIsOpen] = useState(false);
  const [delay, setDelay] = useState(10000); // Start with 10 sec

  useEffect(() => {
    const showPopup = () => {
      setIsOpen(true);
    };

    const interval = setTimeout(() => {
      showPopup();
      setDelay((prevDelay) => prevDelay + 90000); // Increase delay by 10 sec
    }, delay);

    return () => clearTimeout(interval);
  }, [delay]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="pop-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000] bg-black bg-opacity-50 p-5 overflow-y-auto">
      <div
        style={customStyle}
        className="main-popup w-full lg:w-[65rem] xl:w-[55rem] bg-[#f7f7f7] p-2 pb-5 rounded-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="popup-content lg:h-[32rem] xl:h-[32rem] flex flex-col-reverse md:flex-row">
          <div className="popup-left-content bg-[#983fd4] xl:w-[40rem] p-5 justify-center items-center rounded-l-lg hidden md:flex">
            <div className="why-register font-poppins mt-4 p-4 rounded-lg text-sm text-white">
              <h1 className="font-semibold text-white text-2xl mb-2">Why register with us?</h1>
              <ul className="list-disc pl-5 space-y-4">
                <li>25000+ Students Counseled, Absolutely Free of Cost</li>
                <li>Get help from our experts in finding the right college for you</li>
                <li>With a totally online admission process, we help you get college admission without having to step out</li>
                <li>You won’t get unwanted calls from third parties</li>
              </ul>
            </div>
          </div>

          <div className="popup-right w-full lg:w-2/3 p-0 sm:p-5 xl:p-3">
            <div className="popup-header max-h-[60px] lg:max-h-full mt-5 lg:mt-0 xl:mt-0 flex sm:gap-2">
              <div className="pop-header-left w-[15%] lg:w-[20%] flex justify-center items-center">
                <div className="w-[70px] h-[50px] lg:w-[100px] flex items-center lg:h-[100px] rounded-full">
                  <img src={default_img} alt="logo" className="rounded-full" />
                </div>
              </div>
              <div className="pop-header-center w-[75%] flex flex-col justify-center items-center lg:items-start">
                <h1 className="text-purple-700 text-lg lg:text-2xl font-semibold">
                  Register Now To Apply
                </h1>
                <h1 className="text-primaryNavText text-base lg:text-1xl">
                  Get details and latest updates
                </h1>
              </div>
              <div className="pop-header-right">
                <span
                  className="text-3xl sm:text-4xl cursor-pointer text-purple-500 hover:text-hoverBtn"
                  onClick={handleClose}
                >
                  ×
                </span>
              </div>
            </div>
            <div className="pt-3 lg:pt-0 xl:pt-0">
              <Static />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePopUp2;
