import { FaCheckCircle } from "react-icons/fa";

type CounselingKeyPointData = {
  data: any;
};

export const KeyPointsSection: React.FC<CounselingKeyPointData> = ({ data }) => {
  const staticData = data[0]; // Access the first object in the array

  return (
    <div className="py-20 px-2 sm:px-4">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-purple-700 mb-4">
            ✨ Key Highlights
          </h1>
          <p className="text-xl text-gray-600">
            Important points to know about{" "}
            <span className="font-semibold text-pink-500">
              {staticData.name}
            </span>{" "}
            counselling
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {staticData.keyPoints.map((point: string, index: number) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-100 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center mb-4 shadow-md">
                <FaCheckCircle className="text-purple-700 text-2xl" />
              </div>
              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
