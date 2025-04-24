import { useState } from "react";
import ContactPopup from "../formpop/ContactPopup";

interface CounselingAboutData {
  data:any
}

const AboutCounseling: React.FC<CounselingAboutData> = ({data}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
  const info = data?.[0]; // safely get first item

  if (!info) return null; // optional: show nothing if no data

  return (
    <section className="w-full px-2 sm:px-8  text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">
          {info.title}
        </h1>

          <p className="text-base md:text-lg leading-relaxed mb-6">
          {info.description}
          </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8">
          

        <button
           onClick={openPopup}
           className="bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 transition duration-300"
           >
             Enroll Now
           </button>
     
           {isPopupOpen && (
             <ContactPopup onClose={closePopup} />
           )}
        </div>
      </div>
    </section>
  );
};

export default AboutCounseling;
