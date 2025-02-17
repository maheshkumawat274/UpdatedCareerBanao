
import { Modal } from "antd";
import Static from "./Static";
export default function SignPopup({ modalIsOpen, closeModal }: any) {


  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Modal
        open={modalIsOpen}
        onCancel={closeModal}
        footer={null}
        className="loginModal"
        width="auto"
        style={{ padding: "24px", maxWidth: "60rem"}} 
      >
        <div className="flex flex-col-reverse md:flex-row gap-5">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 p-6 bg-purple-700 rounded-lg shadow-md custom-video">
            <div className="relative w-full h-full object-cover overflow-hidden">
              {/* Text Overlay */}
              <div className="relative font-poppins w-full md:w-1/2 opacity-100 z-10 rounded-lg mx-auto custom-text">
               <h2 className="text-3xl text-white font-bold mb-4">Welcome Back!</h2>
               <p className="text-white">
               Login or register to access exclusive features, manage your account, and explore more.
               </p>
              </div>
           </div>
          </div>
  
          {/* Right Side - Forms */}
          <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-poppins font-semibold text-center pt-4">Registration Form</h1>
          <div className="pt-5">
          <Static/>
          </div>
          </div>
        </div>
      </Modal>
    </div>
  );
  
}

