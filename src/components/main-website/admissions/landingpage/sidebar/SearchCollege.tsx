import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchCollege = () => {
  return (
    <div>
      <div className="bg-primaryBtn w-full p-6 rounded-lg flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Left Content */}
        <div className="text-white w-[350px] mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-1xl sm:text-2xl font-bold mb-2">Find the Best College for You</h1>
          <p className="text-sm mb-4">
            Explore top <span className="font-bold">Government</span> and <span className="font-bold">Private</span> colleges in your state or district. Select your preferences and start your journey today.
          </p>
          <Link to='/admissions'>
          <button 
            className="bg-white text-primaryBtn px-4 py-2 rounded shadow hover:bg-hoverBtn hover:text-white">
            Search Colleges
          </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex justify-center items-center ">
          <FaUserGraduate className="text-white text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default SearchCollege;
