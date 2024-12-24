// import { MenuOutlined } from "@ant-design/icons";
// import { Dropdown } from "antd";
// import { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setShowPopUp } from "src/redux/loginSignupSlice"
// import { setUserData } from "src/redux/userSlice";
// import no_user_img from "assets/avatar.jpg"
// import { logout } from "src/utils/services";
// import { menuConfig } from "src/utils/constants";
// import { CgProfile } from "react-icons/cg";

// let admissonItems= [
//   {
//     key: "1",
//     label: <Link to={"/admissions/engineering"}>Engineering</Link>,
//     title:menuConfig.admEng
//   },
//   {
//     key: "2",
//     label: <Link to={"/admissions/management"}>Management</Link>,
//     title:menuConfig.admManag
//   },
//   {
//     key: "3",
//     label: <Link to={"/admissions/medical"}>Medical</Link>,
//     title:menuConfig.admMed
//   },
// ]
// let counsellingItems= [
//   {
//     key: "1",
//     label: <Link to={"/counselling/engineering"}>Engineering</Link>,
//     title:menuConfig.counsEng
//   },
//   {
//     key: "2",
//     label: <Link to={"/counselling/management"}>Management</Link>,
//     title:menuConfig.counsManag
//   },
//   {
//     key: "3",
//     label: <Link to={"/counselling/medical"}>Medical</Link>,
//     title:menuConfig.counsMed
//   },
// ]


// const NavBar = () => {
//   const user = useSelector((state: any) => state.user.data);
//   const admlist = useSelector((state: any) => state.navList.admissionList);
//   const couslist = useSelector((state: any) => state.navList.counsellingList);

//   if(admlist){
//     admissonItems = admissonItems?.filter((item)=>(
//       admlist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
//     ))
//   }
//   if(couslist){
//     counsellingItems = counsellingItems?.filter((item)=>(
//       couslist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
//     ))
//   }
//   const [navbar, setNavbar] = useState(false);
//   const [showNavSlider, setShowNavSlider] = useState(false);
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate()

//   useEffect(() => {
//     window.scroll(0, 0)
//   }, [location])

//   const changeBackgroundColor = () => {
//     if (window.scrollY > 100) setShowNavSlider(false)
//     if (window.scrollY >= 14) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   }

//   async function handleLogout() {
//     const resp = await logout()
//     if (resp) {
//       dispatch(setUserData(null));
//       navigate("/");
//     }
//   }


//   window.addEventListener("scroll", changeBackgroundColor);


//   function handleNavSlider() {
//     window.scroll(0, 0);
//     setShowNavSlider(!showNavSlider);
//   }

//   return (
//     <div className="header relative">
//       <div className={navbar ? "navbar navactive flex w-full px-[5rem] py-3 fixed z-[999]" : "navbar flex w-full px-[5rem] py-3 fixed z-[999]"}>
//         <div className="navbar-left w-1/3 lg:w-[40%] flex items-center">
//           <div className="flex gap-2 nav-logo-name text-[32px] font-semibold text-primaryNavText">
//             <img src="./logo/Untitled design.png" className="h-[50px]"></img>
//             <Link className="text-primaryNavText" to={"/"}>
//               CareerBanao
//             </Link>
//           </div>
//         </div>
//         <div className="navbar-right w-full lg:w-[60%] flex items-center">
//           <ul className="navlinks hidden lg:flex w-full font-semibold justify-around text-[18px] items-center text-primaryNavText">
//             <li>
//               <Link to={"/"}>Home</Link>
//             </li>
//             <li>
//             <Link to={'/first'}>
//              <button className="font-semibold px-3 rounded-lg border-2 hover:scale-105 transition-transform transform animate-border-color">
//                College Finder
//              </button>

//             </Link>

//             </li>
//             <li>
//               <Dropdown placement="bottom" menu={{ items: admissonItems }}>
//                 <Link to={'/admissions'}><button>Admission</button></Link>
//               </Dropdown>
//             </li>
//             <li>
//               <Dropdown placement="bottom" menu={{ items: counsellingItems }}>
//                 <button>Counselling</button>
//               </Dropdown>
//             </li>
//             <li>
//               <Link to={"/contact"}>Contact</Link>
//             </li>
//             {user == null ?
//               <li>
//                 {/* <button
//                   onClick={() => { dispatch(setShowPopUp()) }}
//                   type="button"
//                   className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//                 >
//                 </button> */}
//                 <CgProfile size={'30'} className="cursor-pointer" onClick={() => { dispatch(setShowPopUp()) }} />
//               </li>
//               :
//               <>
//                 <li className="rounded-full bg-[#edede9]"><img src={user.photoUrl ? user.photoUrl : no_user_img} width={40} className="rounded-full mix-blend-multiply" alt="" /></li>
//                 <li>
//                   <button
//                     onClick={handleLogout}
//                     type="button"
//                     className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             }


//           </ul>
//           <div className="hamburger-menu w-full text-right text-2xl cursor-pointer lg:hidden ">
//             <MenuOutlined onClick={handleNavSlider} 
//                onPointerEnterCapture={() => {}}
//                onPointerLeaveCapture={() => {}}/>
//           </div>
//         </div>
//       </div>
//       {showNavSlider && <NavSlider user={user} handleLogout={handleLogout} handleNavSlider={handleNavSlider} dispatch={dispatch} />}
//     </div>
//   );
// };


// export default NavBar;

// function NavSlider({ handleNavSlider, handleLogout, dispatch, user }: any) {
//   const admlist = useSelector((state: any) => state.navList.admissionList);
//   const couslist = useSelector((state: any) => state.navList.counsellingList);
//   let admissonItems = [
//     {
//       key: "1",
//       label: (
//         <Link to={"admissions/engineering"} onClick={handleNavSlider}>
//           Engineering
//         </Link>
//       ),
//       title:menuConfig.admEng
//     },
//     {
//       key: "2",
//       label: (
//         <Link to={"admissions/management"} onClick={handleNavSlider}>
//           Management
//         </Link>
//       ),
//       title:menuConfig.admManag
//     },
//     {
//       key: "3",
//       label: (
//         <Link to={"admissions/medical"} onClick={handleNavSlider}>
//           Medical
//         </Link>
//       ),
//       title:menuConfig.admMed
//     },
//   ];
//   let counsellingItems = [
//     {
//       key: "1",
//       label: (
//         <Link to={"/counselling/engineering"} onClick={handleNavSlider}>
//           Engineering
//         </Link>
//       ),
//       title:menuConfig.counsEng
//     },
//     {
//       key: "2",
//       label: (
//         <Link to={"/counselling/management"} onClick={handleNavSlider}>
//           Management
//         </Link>
//       ),
//       title:menuConfig.counsManag
//     },
//     {
//       key: "3",
//       label: (
//         <Link to={"/counselling/medical"} onClick={handleNavSlider}>
//           Medical
//         </Link>
//       ),
//       title:menuConfig.counsMed
//     },
//   ]
//   if(admlist){
//     admissonItems = admissonItems?.filter((item)=>(
//       admlist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
//     ))
//   }
//   if(couslist){
//     counsellingItems = counsellingItems?.filter((item)=>(
//       couslist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
//     ))
//   }
//   return (
//     <div className="navslider h-[50vh] bg-primaryNavBackground relative top-[80px] lg:hidden">
//       <ul className="text-white text-[18px] flex flex-col gap-4 p-5 h-full">
//         <li>
//           <Link to={"/"} onClick={handleNavSlider}>
//             Home
//           </Link>
//         </li>
//         <li>
//             <Link to={'/first'}>
//             <button className="font-semibold px-3 rounded-lg border-2 hover:scale-105 transition-transform transform animate-border-color">
//                College Finder
//              </button>
//               </Link>

//             </li>
//         <li>
//           <Dropdown placement="bottomRight" menu={{ items: admissonItems }}>
//             <button>Admission</button>
//           </Dropdown>
//         </li>
//         <li>
//           <Dropdown placement="bottom" menu={{ items: counsellingItems }}>
//             <button>Counselling</button>
//           </Dropdown>
//         </li>
//         <li>
//           <Link to={"/contact"} onClick={handleNavSlider}>
//             Contact
//           </Link>
//         </li>
//         {user == null ?
//           <li>
//             {/* <button
//               onClick={() => { dispatch(setShowPopUp()) }}
//               type="button"
//               className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//             >
//             </button> */}
//             <CgProfile onClick={() => { dispatch(setShowPopUp()) }} />
//           </li>
//           :
//           <li>
//             <button
//               onClick={handleLogout}
//               type="button"
//               className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
//             >
//               Logout
//             </button>
//           </li>
//         }
//       </ul>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUser,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
import { SiQuora, SiThreads } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [activeItem, setActiveItem] = useState("");
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

   useEffect(() => {
    // Update the active item when the URL changes
    const handleScroll = () => {
      const currentHash = window.location.hash;
      setActiveItem(currentHash);
    };

    window.addEventListener("hashchange", handleScroll);
    handleScroll(); // Call initially to set the active item

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Top Header */}
      <div className="bg-[#EDEDE9] text-sm py-2 px-6 justify-between items-center hidden md:flex">
        <div className="flex space-x-4 text-[#983fd4]">
          <span className="flex items-center">
            <FaPhoneAlt className="mr-2" /> +91-8750092628
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-2" /> info@careerbanao.org
          </span>
        </div>
        <div className="flex space-x-4 text-[#983fd4]">
          <a href="#" className="hover:text-[#e46ab3]">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <SiThreads />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <SiQuora />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <FaPinterest />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <FaTelegramPlane />
          </a>
          <a href="#" className="hover:text-[#e46ab3]">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-[#EDEDE9] py-4 px-4 flex justify-between items-center shadow transition-transform duration-300 ${
         isScrolled ? "fixed top-0 w-full z-50" : ""
        }`}>
        {/* Logo */}
        <div className="flex gap-2 nav-logo-name text-[32px] font-semibold text-primaryNavText">
          <img src="./logo/Untitled design.png" className="h-[50px]"></img>
          <Link className="text-primaryNavText" to={"/"}>
              CareerBanao
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 font-bold rounded-md bg-gradient-to-r from-[#983fd4] to-[#e46ab3]">
      {["Home", "Admission", "Counselling", "College Finder", "Contact", "Career"].map((item) => {
        const isActive = `#${item.toLowerCase()}` === activeItem;

        return (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`px-4 py-2 rounded transition text-white ${
              isActive
                ? "bg-[#e4a6ca] transform scale-110 duration-300" // Animated effect for active item
                : "hover:bg-[#e4a6ca]"
            }`}
            style={{
              fontWeight: isActive ? "bold" : "normal", // Make active item bold
            }}
          >
            {item}
          </a>
        );
      })}
    </nav>
        <div className="hidden md:block">
          <button
            className="px-4 py-2 bg-[#983fd4] text-white rounded-full hover:bg-[#e46ab3] transition"
            aria-label="Login"
          >
            <FaUser />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-[#983fd4] text-2xl"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Side Drawer) */}
      <div
        className={`fixed top-0 left-0 z-10 h-full w-3/4 max-w-[300px] bg-[#983fd4] text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <div className="text-2xl font-bold">Career</div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-2xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4 px-4 py-6">
          {[
            "Home",
            "Admission",
            "Counselling",
            "College Finder",
            "Contact",
            "Career",
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="flex items-center justify-between px-2 py-2 hover:bg-[#22247A] rounded"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              <span className="text-lg">{item}</span>
              <FiArrowRight />
            </a>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="px-4 py-4 border-t border-gray-700">
          <h4 className="text-lg text-white mb-2">CONNECT WITH US</h4>
          <div className="flex items-center text-sm mb-2">
            <FaPhoneAlt className="mr-2" /> +91-8750092628
          </div>
          <div className="flex items-center text-sm">
            <FaEnvelope className="mr-2" /> info@careerbanao.org
          </div>
          <div className="mx-20">
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="hover:text-[#e46ab3]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#e46ab3]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#e46ab3]">
              <FaLinkedinIn />
            </a>
            <a href="" className="hover:text-[#e46ab3]">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#e46ab3]">
              <FaTwitter />
            </a>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <a href="#" className="hover:text-[#e46ab3]">
              <SiThreads />
            </a>
            <a href="#" className="hover:text-[#e46ab3]">
              <SiQuora />
            </a>
            <a href="#" className="hover:text-[#e46ab3]">
              <FaPinterest />
            </a>
            <a href="#" className="hover:text-[#e46ab3]">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-[#e46ab3]">
              <FaWhatsapp />
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Overlay (Closes Menu on Click) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
