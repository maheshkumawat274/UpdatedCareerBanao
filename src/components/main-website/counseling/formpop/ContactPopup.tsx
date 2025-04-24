import { useEffect, useState } from "react";
import ContactFormCounseling from "./ContactFormCounseling";

type FormPopupProps = {
  onClose: () => void;
};

const ContactPopup = ({ onClose }: FormPopupProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  };

  return (
    <div className="fixed mx-2 sm:mx-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div
        className={`relative transform transition-all duration-300 ease-in-out
          ${visible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      >
      

        {/* Form Component */}
        <ContactFormCounseling isOpen={visible} onClose={handleClose} />
      </div>
    </div>
  );
};

export default ContactPopup;
