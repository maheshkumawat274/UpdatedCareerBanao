import React from "react";

const FAQCounseling: React.FC = () => {
  const name = "JOSAA";

  const faq = [
    {
      question: "What is JOSAA counselling?",
      answer:
        "JOSAA is a joint seat allocation process for admissions to NITs, IIITs, and GFTIs based on ranks obtained in JEE Main and JEE Advanced exams.",
    },
    {
      question: "How many rounds of counselling are there in JOSAA?",
      answer:
        "Typically, JOSAA conducts 6-7 rounds of counselling, including a special round after the main rounds.",
    },
    {
      question: "Can I participate in JOSAA with only a JEE Main score?",
      answer:
        "Yes, you can participate in JOSAA counselling with only a JEE Main score for NITs, IIITs, and GFTIs. However, for IITs, you need a valid JEE Advanced score.",
    },
    {
      question: "What happens if I don't pay the acceptance fee after seat allocation?",
      answer:
        "If you don't pay the acceptance fee within the stipulated time, your allocated seat will be cancelled and offered to other candidates in subsequent rounds.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Queries</h2>
          <p className="text-lg text-gray-600">
            Find answers to commonly asked questions about {name} counselling
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <details
                key={index}
                className="group bg-gray-50 p-6 rounded-lg [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
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
