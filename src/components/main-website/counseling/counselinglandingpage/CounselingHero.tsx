import { useState } from "react";
import ContactPopup from "../formpop/ContactPopup";

type CounselingHeroProps = {
  data: any; // You can replace `any` with a more specific type later
};
export const HeroSectionCounseling: React.FC <CounselingHeroProps>= ({data}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const info = data?.[0]; // safely get first item

  if (!info) return null; // optional: show nothing if no data

  
  return (
    <div className="relative px-2 sm:px-4 py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-800 rounded-full" />
        <div className="absolute top-32 -left-12 w-64 h-64 bg-gray-800 rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-800 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative ">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-purple-700 text-blue-100 text-sm font-medium rounded-full mb-4">
             Counselling
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
            {info.title}
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            {info.description}
          </p>
          <div className="flex flex-wrap gap-3">
          <button
           onClick={openPopup}
           className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
           >
             Apply Now
           </button>
     
           {isPopupOpen && (
             <ContactPopup onClose={closePopup} />
           )}
            <a
              href="#process"
              className="px-6 py-3 bg-white text-purple-700 hover:text-white font-medium rounded-md hover:bg-pink-500 transition-colors"
            >
              View Process
            </a>
            <a
              href="#dates"
              className="px-6 py-3 bg-purple-700 text-white font-medium rounded-md hover:bg-pink-500 transition-colors"
            >
              Important Dates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};