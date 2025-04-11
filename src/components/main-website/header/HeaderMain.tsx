
import React, { useEffect, useState } from "react";
import './headersection.css'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
import { SiQuora, SiThreads } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
// import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {useSelector } from "react-redux";
// import { setShowPopUp } from "src/redux/loginSignupSlice";
import { Dropdown } from "antd"
import { menuConfig } from "src/utils/constants";
import Applybtn from "./Applybtn";
import { IoIosArrowDropdown } from "react-icons/io";
// import { key } from "ionicons/icons";
const HeaderMain: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigate = useNavigate(); // Initialize navigation function

  // const dispatch = useDispatch();
   // Add a scroll event listener to toggle `isScrolled`
   useEffect(() => {
    
     const handleScroll = () => {
       if (window.scrollY > 50) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);


   let admissionItems= [
    {
      key: "1",
      label: <Link to={"/admissions/regular-mode"} onClick={() => setIsMenuOpen(false)}>Regular Mode</Link>,
      title:menuConfig.admEng
    },
    {
      key: "2",
      label: <Link to={"/admissions/online-mode"} onClick={() => setIsMenuOpen(false)}>Online Mode</Link>,
      title:menuConfig.admManag
    },
    {
      key: "3",
      label: <Link to={"/admissions/study-abroad"} onClick={() => setIsMenuOpen(false)}>Study Abroad</Link>,
      title:menuConfig.admMed
    },
    {
      key: "4",
      label: <Link to={"/admissions/study-in-india"} onClick={() => setIsMenuOpen(false)}>Study in India</Link>,
      title:menuConfig.admMed
    },
  ]

  let counsellingItems = [
    {
      key: "1",
      label: <Link to={"/counselling/engineering"}>Engineering</Link>
    },
    {
      key: "2",
      label: <Link to={"/counselling/management"}>Management</Link>
    },

  ]
  //  let counsellingItems = [
  //      {
  //        key: "1",
  //        label: (
  //          <Link to={"/counselling/engineering"} onClick={() => setIsMenuOpen(false)}>
  //            Engineering
  //          </Link>
  //        ),
  //        title:menuConfig.counsEng
  //      },
  //      {
  //        key: "2",
  //        label: (
  //          <Link to={"/counselling/management"} onClick={() => setIsMenuOpen(false)}>
  //            Management
  //          </Link>
  //        ),
  //        title:menuConfig.counsManag
  //      },
  //      {
  //        key: "3",
  //        label: (
  //          <Link to={"/counselling/medical"} onClick={() => setIsMenuOpen(false)}>
  //            Medical
  //          </Link>
  //        ),
  //        title:menuConfig.counsMed
  //      },
  //    ]

  // Fetch the list from Redux state
  const admlist = useSelector((state: any) => state.navList.admissionList);
  // const couslist = useSelector((state: any) => state.navList.counsellingList);

  
  if(admlist){
    admissionItems = admissionItems?.filter((item)=>(
      admlist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
    ))
  }
  // Filter items based on couslist
  // if (couslist) {
  //   counsellingItems = counsellingItems.filter((item) =>
  //     couslist.find((listItem: any) => item.title === listItem.module_name)
  //   );
  // }
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Admission", path: "/admissions", icon: <IoIosArrowDropdown />  },
    { name: "College Finder", path: "/CollegeFinder" },
    { name: "Contact Us", path: "/contact" }
  ];
  return (
    <header>
      {/* Top Header */}
      <div className="bg-[#EDEDE9] text-sm py-2 px-6 justify-between items-center hidden md:flex">
        <div className="flex space-x-4 text-[#983fd4]">
          <span className="flex items-center">
           <a
             href="tel:+918750092628"
             className="flex items-center text-sm hover:underline"
            >
             <FaPhoneAlt className="mr-2" />
             +91-8750092628
            </a>
           </span>
           <span className="flex items-center">
           <a
           href="mailto:info@careerbanao.org"
           className="flex items-center text-sm hover:underline"
           >
           <FaEnvelope className="mr-2" />
            info@careerbanao.org
           </a>

          </span>
        </div>
        <div className="flex space-x-4 text-[#983fd4]">
          <a href="https://www.facebook.com/careerbanao/" className="hover:text-[#e46ab3]">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/careerbanao20/" className="hover:text-[#e46ab3]">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/careerbanao1/" className="hover:text-[#e46ab3]">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/@CareerBanao" className="hover:text-[#e46ab3]">
            <FaYoutube />
          </a>
          <a href="https://x.com/career_banao" className="hover:text-[#e46ab3]">
            <FaTwitter />
          </a>
          <a href="https://www.threads.net/@careerbanao20" className="hover:text-[#e46ab3]">
            <SiThreads />
          </a>
          <a href="https://www.quora.com/profile/CareerBanao" className="hover:text-[#e46ab3]">
            <SiQuora />
          </a>
          <a href="https://in.pinterest.com/careerbanao20/" className="hover:text-[#e46ab3]">
            <FaPinterest />
          </a>
          <a href=" https://t.me/CareerBanao20" className="hover:text-[#e46ab3]">
            <FaTelegramPlane />
          </a>
          <a href="https://whatsapp.com/channel/0029VaAvuSnF6smrEwDwMc1U" className="hover:text-[#e46ab3]">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      
      {/* Main Header */}
      {/* bg-gradient-to-r from-[#983fd4] to-[#e46ab3] */}
      <div className={`main-header bg-primaryBtn px-4 flex justify-between items-center shadow transition-transform duration-300 ${isScrolled ? "fixed top-0 w-full z-20" : ""}`}>
        {/* Logo */}
        <div className="header-section flex justify-between items-center text-white px-4 py-3 rounded-t-lg">
            <div className="flex items-center gap-2 text-[32px] font-semibold">
              <img
                src="./logo/CBlogo.jpg"
                alt="CareerBanao"
                className="h-10 w-10 rounded-full"
              />
              <Link to={"/"}>
              <h1> CareerBanao</h1>
              </Link>
            </div>
        </div>

        <nav className="hidden nav-header font-semibold md:flex gap-8 text-[18px]">
      {menuItems.map((item, index) => {
        if (item.name === "Admission") {
          return (
            <Dropdown
              key={index}
              overlayClassName="custom-dropdown"
              menu={{ items: admissionItems }}
              trigger={["hover"]}
              placement="bottomCenter"
            >
              <div className="px-4 py-2 text-white rounded transition cursor-pointer">
                <p className="flex gap-1 border-b-2 border-transparent hover:border-white transition-all duration-300">{item.name} </p>
              </div>
            </Dropdown>
          );
        }
        if (item.name === "College Finder") {
          return (
            <React.Fragment key={index}>
              <Link
                to={item.path}
                className="px-4 py-2 hover:bg-[#983fd4] text-white rounded transition"
              >
                <p className="border-b-2 border-transparent hover:border-white transition-all duration-300">{item.name}</p>
              </Link>

              {/* Counselling Dropdown */}
              <Dropdown
                overlayClassName="custom-dropdown"
                menu={{ items: counsellingItems }}
                trigger={["hover"]}
                placement="bottomCenter"
              >
                <div className="px-4 py-2 hover:bg-[#983fd4] text-white rounded transition cursor-pointer">
                  <p className="border-b-2 border-transparent hover:border-white transition-all duration-300">Counselling</p>
                </div>
              </Dropdown>



            </React.Fragment>
          );
        }

        // Render other menu items
        return (
          <Link
            key={index}
            to={item.path}
            className="px-4 py-2 hover:bg-[#983fd4] text-white rounded transition"
          >
            <p className="border-b-2 border-transparent hover:border-white transition-all duration-300">{item.name}</p>
          </Link>
        );
      })}
    </nav>
        {/* <div className="hidden md:block">          
          <button
            onClick={() => { dispatch(setShowPopUp()) }}                
            type="button"
            className="px-2 py-1 bg-[#983fd4] text-white rounded-full hover:bg-[#e46ab3] transition"
          >
            <CgProfile size={30} className="cursor-pointer"  />
          </button> 
              
        </div> */}

        {/* Mobile Menu Toggle */}
        <div className="hidden md:block" onClick={()=>navigate('/apply_now')}>
        <Applybtn/>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="text-white text-4xl"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Side Drawer) */}
      <div
        className={`fixed top-0 left-0 z-20 h-full w-3/4 max-w-[300px] bg-purple-600 text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-400">
          <div className="text-3xl font-bold">CareerBanao</div>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Mobile Menu"
            className="text-white text-4xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col space-y-4 px-4 py-6">
          {[
            { name: "Home", path: "/" },
            { name: "Admission", path:"#", dropdown: true },
            { name: "College Finder", path: "/CollegeFinder" },
            { name: "Counselling", path:'#', dropdown: true },
            { name: "Contact Us", path: "/contact" }
          ].map((item, index) => {
            if (item.dropdown && item.name === "Admission") {
              return (
                <Dropdown
                  key={index}
                  overlayClassName="custom-dropdown"
                  menu={{ items: admissionItems }}
                  trigger={["click"]}
                  placement="bottomCenter"
                >
                  <div className="flex items-center justify-between px-2 py-2 hover:bg-purple-700 rounded cursor-pointer">
                    <span className="text-lg">{item.name}</span>
                    <FiArrowRight />
                  </div>
                </Dropdown>
              );
            }

            if (item.dropdown && item.name === "Counselling") {
              return (
                <Dropdown
                  key={index}
                  overlayClassName="custom-dropdown"
                  menu={{ items: counsellingItems }}
                  trigger={["click"]}
                  placement="bottomCenter"
                >
                  <div className="flex items-center justify-between px-2 py-2 hover:bg-purple-700 rounded cursor-pointer">
                    <span className="text-lg">{item.name}</span>
                    <FiArrowRight />
                  </div>
                </Dropdown>
              );
            }

            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-2 py-2 hover:bg-purple-700 rounded"
              >
                <span className="text-lg">{item.name}</span>
                <FiArrowRight />
              </Link>
            );
          })}
          
        </nav>
        <div className="px-5" onClick={()=>navigate('/apply_now')}><Applybtn/></div>
        
      </div>
      

      {/* Overlay (Closes Menu on Click) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-9"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(false);
          }}
          aria-label="Close Overlay"
        ></div>
      )}
    </header>
  );
};

export default HeaderMain;