import { useState } from "react";
import ContactPopup from "../formpop/ContactPopup";

export const SidebarSec1Layout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="p-4 border-b">
        <h1 className="text-xl sm:text-3xl font-bold mb-2">Start Your Counseling</h1>
        <button
          onClick={openPopup}
          className="border-2 border-hoverBtn hover:bg-hoverBtn hover:text-white text-black px-4 py-2 rounded w-full"
        >
          Enroll Now
        </button>
      </div>

      {/* Move Popup outside of the above div */}
      {isPopupOpen && <ContactPopup onClose={closePopup} />}
    </>
  );
};
