import React from "react";


type CounselingFaqData = {    // dynamic name e.g., "JOSAA"
  data: any;     // FAQ array
};

const FAQCounseling: React.FC<CounselingFaqData> = ({ data }) => {
  const staticdata = data[0]
  console.log(staticdata,"ljihsdbvihnerfvne")
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 mb-4">Common Queries</h1>
          <p className="text-lg text-gray-600">
            Find answers to commonly asked questions about {staticdata.name} counselling
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {staticdata.faq.map((item:string, index:number) => (
              <details
                key={index}
                className="group bg-gray-50 p-6 rounded-lg [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h1 className="text-lg font-medium text-gray-900">{item.question}</h1>
                  <span className="ml-6 flex-shrink-0 transition duration-300 group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQCounseling;
