
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UnivercitiesLogoSlider from "./UnivercitiesLogoSlider";
import { ContactForm } from "./Section5";
import { useState } from "react";

const Meeting: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const hideForm = () => {
    setShowForm(false);
  };

  const submitHandler = (values:any) => {
    console.log("Form Submitted", values);
    // Handle form submission here, like making an API call
  };

  
  const sliderData = [
    "Which University aligns with my career goals? Ask Our Expert Counsellors.",
    "Unlock your potential with guidance from experienced counsellors.",
    "Your career journey starts here. Let us help you choose the right path.",
  ];

  return (
    <div className="bg-[#dfdfde] p-2 md:p-10 font-poppins">
      {/* Top Heading */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-700 ">
          More than advice, it’s eye-to-eye insight!
        </h1>
      </div>

      {/* Slider Section */}
      <div className="my-5">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
          arrows={false}
        >
           {sliderData.map((text, index) => (
          <div key={index} className="p-5 bg-purple-700  rounded-md">
            <p className="text-center text-lg md:text-xl text-white font-medium">
              {text}
            </p>
          </div>
        ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="flex flex-col pb-4 md:flex-row items-center justify-between gap-5">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-purple-700 font-semibold text-2xl md:text-2xl">
           Experience real conversations with no filters
          </h1>
          <p className="text-lg text-gray-700">
           Try our Video Counselling for free!
          </p>
          <div>
           <button onClick={() => setShowForm(true)} className="px-5 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-pink-500">
            BOOK NOW
           </button>
           {/* <button  className="px-5 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-pink-500">
            BOOK NOW
           </button> */}
           <ContactForm
            showForm={showForm}
            hideForm={hideForm}
            submitHandler={submitHandler}
            referFriend={false} 
           />
          </div>
          <div className=" " style={{overflow: "hidden"  }}>
        <div className="w-full">
          <UnivercitiesLogoSlider 
          showHeading={false} 
          cardHeight="5rem"  
          cardWidth="50%" 
          paddingClass=""
          />
        </div>
      </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-[50vh] my-8 md:w-1/2 flex justify-center relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="./logo/meet.mp4" type="video/mp4" />
        </video>
        </div>
      </div>
      <div className="text-center text-gray-600">
        <p>Powered by CareerBanao</p>
        <p>Multi Career at a Time</p>
      </div>
    </div>
  );
};

export default Meeting;