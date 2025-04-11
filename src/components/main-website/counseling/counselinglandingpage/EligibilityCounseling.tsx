import { useEffect, useState } from "react";

export const EligibilitySection: React.FC = () => {
  const [eligibility, setEligibility] = useState<string[]>([]);
  const [fees, setFees] = useState({
    general: "",
    reserved: "",
    female: "",
  });
  const [name, setName] = useState("");

  useEffect(() => {
    // ✅ Static data for now
    const staticData = {
      name: "WBJEE",
      eligibility: [
        "Must have appeared in WBJEE examination",
        "Must have qualified in WBJEE with valid rank",
        "Must have passed 10+2 with Physics, Chemistry, and Mathematics",
        "Minimum 45% marks in PCM (40% for reserved categories)",
        "West Bengal domicile (for certain seat categories)",
      ],
      fees: {
        general: "₹500",
        reserved: "₹250",
        female: "₹300",
      },
    };

    setName(staticData.name);
    setEligibility(staticData.eligibility);
    setFees(staticData.fees);

    // 🔒 Uncomment this if you're fetching from an API in the future
    /*
    fetch("/api/counseling/wbjee")
      .then(res => res.json())
      .then(data => {
        setName(data.name);
        setEligibility(data.eligibility);
        setFees(data.fees);
      })
      .catch(err => console.error("Failed to fetch eligibility data", err));
    */
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              Eligibility Criteria
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Apply?</h2>
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

          <div className="md:w-1/2 bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Structure</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-gray-200">
                <span className="text-sm text-gray-500">General Category</span>
                <p className="text-lg font-medium text-gray-900">{fees.general}</p>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <span className="text-sm text-gray-500">Reserved Category</span>
                <p className="text-lg font-medium text-gray-900">{fees.reserved}</p>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <span className="text-sm text-gray-500">Female Candidates</span>
                <p className="text-lg font-medium text-gray-900">{fees.female}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Fees mentioned are indicative and subject to change as per the official notification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
