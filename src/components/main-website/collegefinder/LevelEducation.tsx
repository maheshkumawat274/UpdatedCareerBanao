
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const LevelEducation = () => {
//   const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
//   const [canProceed, setCanProceed] = useState<boolean>(false);

//   // Array of education levels
//   const educationLevels = [
//     { label: "Completed 10th", path: "/CollegeFinder/score10th" },
//     { label: "Completed 12th", path: "/CollegeFinder/score12th" },
//     { label: "College Graduate", path: "/CollegeFinder/degreescore" },
//     { label: "Postgraduate", path: "/CollegeFinder/degreescore" },
//     { label: "Diploma Holder", path: "/CollegeFinder/diplomascore" },
//   ];

//   // Handle button click to set selected education level
//   const handleSelection = (level: string) => {
//     setSelectedLevel(level);
//     setCanProceed(true); // Enable the "Next" button when an option is selected
//   };

//   // Find the path corresponding to the selected level
//   const selectedPath = educationLevels.find(
//     (level) => level.label === selectedLevel
//   )?.path;

//   return (
//     <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">
//         Pick Your Level Of Education
//       </h1>
//       <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
//         {educationLevels.map((level, index) => (
//           <button
//             key={index}
//             onClick={() => handleSelection(level.label)}
//             className={`${
//               selectedLevel === level.label ? "bg-[#F89A00] text-white" : "bg-white text-gray-800"
//             } border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
//           >
//             {level.label}
//           </button>
//         ))}
//       </div>
//       <div className="mt-5 flex gap-2">
//         <Link to="/CollegeFinder">
//           <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
//             PREV
//           </button>
//         </Link>
//         <Link to={selectedPath || "#"}>
//           <button
//             className={`${
//               canProceed ? "bg-[#1F618D]" : "bg-gray-400 cursor-not-allowed"
//             } text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
//             disabled={!canProceed}
//           >
//             Next
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LevelEducation;

import { useState } from "react";
import { Link } from "react-router-dom";

const LevelEducation = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Array of education levels
  const educationLevels = [
    { label: "Completed 10th", path: "/score10th" },
    { label: "Completed 12th", path: "/score12th" },
    { label: "College Graduate", path: "/degreescore" },
    { label: "Postgraduate", path: "/degreescore" },
    { label: "Diploma Holder", path: "/diplomascore" },
  ];

  // Handle button click to set selected education level
  const handleSelection = (level: string) => {
    setSelectedLevel(level);
    setCanProceed(true); // Enable the "Next" button when an option is selected
  };

  // Find the path corresponding to the selected level
  const selectedPath = educationLevels.find(
    (level) => level.label === selectedLevel
  )?.path;

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Pick Your Level Of Education
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-6 mt-5 sm:grid-cols-2">
  {educationLevels.map((level, index) => (
    <button
      key={index}
      onClick={() => handleSelection(level.label)}
      className={`${
        selectedLevel === level.label
          ? "bg-[#F89A00] text-white"
          : "bg-white text-gray-800"
      } w-full border border-gray-300 py-2 text-center rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
      style={{
        maxWidth: '150px', // Adjust maximum button width
      }}
    >
      {level.label}
    </button>
  ))}
</div>


      <div className="mt-5 flex gap-2">
        <Link to="/CollegeFinder">
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
            PREV
          </button>
        </Link>
        <Link to={selectedPath || "#"}>
          <button
            className={`${
              canProceed ? "bg-[#1F618D]" : "bg-gray-400 cursor-not-allowed"
            } text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
            disabled={!canProceed}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LevelEducation;