
// import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';

// const WhatsAppBtn: React.FC = () => {
//     const phoneNumber = "918750092628"; 
//     const message = "Hello! I have a query."; 
//     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     return (
//         <div>
//           <a
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="fixed bottom-[140px] right-5 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-20"
//             aria-label="Chat on WhatsApp"
//           >
//             <FaWhatsapp size={32} />
//           </a>
//         </div>
//     );
// };

// export default WhatsAppBtn;

import "./whatsapp.css"; // External CSS for styles
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppBtn = () => {
  const phoneNumber = "918750092628"; 
  const message = "Hello! I have a query."; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    >
    <button className="whatsapp-button z-20">
      <div className="bloom-container">
        <div className="whatsapp-button-container-main">
          <div className="whatsapp-button-inner">
            
            <div className="back"></div>
            
            <div className="front">
            
              <FaWhatsapp size={40} className="svg" />
             
            </div>
            
          </div>
          <div className="whatsapp-button-glass">
            <div className="back"></div>
            <div className="front"></div>
          </div>
        </div>
        <div className="bloom bloom1"></div>
        <div className="bloom bloom2"></div>
      </div>
    </button>
    </a>
  );
};

export default WhatsAppBtn;
