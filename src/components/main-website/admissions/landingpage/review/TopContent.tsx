import React from 'react';
const AboutTop: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-[300px] sm:h-[450px]">
      {/* Background img */}
      <img className='w-full h-[300px] sm:h-[450px]' src='./logo/WWT-34-hands-laptop.jpg'/>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-8"></div>

      {/* Text Overlay */}
 
     

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] text-center text-white z-10">
 
        <div className=" font-poppins  w-full py-8 px-4 sm:px-14 text-center">
          <h1 className="text-2xl text-white sm:text-3xl font-semibold mb-2">ABOUT US</h1>
          <button className='text-2xl border-2 px-2 py-3'>home / aboutus</button>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;