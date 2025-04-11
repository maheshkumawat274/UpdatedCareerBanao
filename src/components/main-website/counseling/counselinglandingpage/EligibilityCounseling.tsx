import { useEffect, useState } from "react";

export const EligibilitySection: React.FC = () => {
  const [eligibility, setEligibility] = useState<string[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const staticData = {
      name: "WBJEE",
      eligibility: [
        "Must have appeared in WBJEE examination",
        "Must have qualified in WBJEE with valid rank",
        "Must have passed 10+2 with Physics, Chemistry, and Mathematics",
        "Minimum 45% marks in PCM (40% for reserved categories)",
        "West Bengal domicile (for certain seat categories)",
      ],
    };

    setName(staticData.name);
    setEligibility(staticData.eligibility);
  }, []);

  return (
    <div className="px-4">
      <div className="container mx-auto px-4">
            <div className="text-center">
            <span className="inline-block px-3 text-center py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              Eligibility Criteria
            </span>
            <h1 className="text-2xl md:text-4xl text-center font-bold text-purple-700 mb-4 sm:mb-0">Who Can Apply?</h1>
            </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Eligibility Content */}
          <div className="md:w-1/2">
            
            <p className="text-lg text-gray-600 mb-8">
              Check if you meet the eligibility requirements for {name} counselling
            </p>

            <ul className="space-y-4">
              {eligibility.map((item, index) => (
                <li key={`eligibility-${index}`} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <img
              src="../logo/Eligibility_criteria_banner1.svg" // 👈 Replace with your actual image path
              alt="Eligibility Illustration"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
