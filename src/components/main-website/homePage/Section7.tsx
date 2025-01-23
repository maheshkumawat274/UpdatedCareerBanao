// Section7.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPenFancy, FaStar, FaUsers } from 'react-icons/fa';

const Section7: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/review'); // Navigate to the review section
  };

  return (
    <div className="bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 lg:min-h-[70vh] flex items-center justify-center p-10 md:p-8 mt-4 font-poppins">
      <div className=" bg-white shadow-2xl rounded-3xl p-8 relative transform hover:scale-105 transition-transform duration-500 md:mx-14">
        {/* Decorative Icons */}
        <div className="absolute -top-8 -left-5 md:-left-8 bg-purple-600 text-white p-4 md:p-5 rounded-full shadow-lg transform rotate-12">
          <FaPenFancy className="text-2xl sm:text-4xl" />
        </div>
        <div className="absolute -top-8 -right-5 md:-right-8 bg-indigo-600 text-white p-4 md:p-5 rounded-full shadow-lg transform rotate-12">
          <FaStar className="text-2xl sm:text-4xl" />
        </div>
        <div className="absolute -bottom-8 -right-5 md:-right-8 bg-pink-600 text-white p-4 md:p-5 rounded-full shadow-lg transform rotate-12">
          <FaUsers className="text-2xl sm:text-4xl" />
        </div>

        {/* Content */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 text-center mb-6">
          Write Your College Review
        </h2>
        <p className="text-md sm:text-lg text-gray-600 text-center mb-8">
          Share your experiences and help thousands of students make informed decisions about their future. Your voice matters!
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleNavigate}
            className="bg-primaryBtn hover:bg-hoverBtn text-white font-bold py-3 md:py-4 px-5 md:px-8 rounded-full shadow-xl transform hover:translate-y-[-3px] focus:outline-none focus:ring-4 focus:ring-purple-300">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section7;