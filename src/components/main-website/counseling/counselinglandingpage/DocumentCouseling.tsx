import React, { useState } from "react";

// Required Documents section
const DocumentCounseling: React.FC = () => {
  const [name] = useState("WBJEE");
  const [documents] = useState<string[]>([
    "WBJEE Rank Card",
    "WBJEE Admit Card",
    "Class 10th Mark Sheet and Certificate",
    "Class 12th Mark Sheet and Certificate",
    "Category Certificate (if applicable)",
    "Domicile Certificate (if applicable)",
    "Income Certificate (if applicable)",
    "Passport Size Photographs",
    "Aadhaar Card",
    "Medical Fitness Certificate"
  ]);

  // 👇 Future API logic - use this when dynamic data is ready
  /*
  useEffect(() => {
    fetch("/api/required-documents")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDocuments(data.documents);
      })
      .catch((err) => console.error("Error fetching documents:", err));
  }, []);
  */

  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              Be Prepared
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 mb-4">Required Documents</h1>
            <p className="text-lg text-gray-600">
              Make sure you have the following documents ready for {name} counselling
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-600 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-yellow-50 rounded-md">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-500 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <div className="ml-3">
                  <h1 className="text-sm font-medium text-yellow-800">Important Note</h1>
                  <p className="mt-1 text-sm text-yellow-700">
                    All documents must be original with self-attested photocopies. Candidates belonging to reserved categories must carry valid category certificates as per the prescribed format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCounseling;
