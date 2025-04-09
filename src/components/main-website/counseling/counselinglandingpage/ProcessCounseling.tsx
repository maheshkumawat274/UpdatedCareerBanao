import React, { useEffect, useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface ProcessData {
  title: string;
  steps: Step[];
}

const ProcessSection: React.FC = () => {
  // Initial static data
  const [process, setProcess] = useState<ProcessData>({
    title: "WBJEE Counselling Process",
    steps: [
      {
        id: 1,
        title: "Registration",
        description:
          "Register on the WBJEE counselling portal with your WBJEE roll number and other required details.",
      },
      {
        id: 2,
        title: "Fee Payment",
        description:
          "Pay the registration fee online through the available payment methods.",
      },
      {
        id: 3,
        title: "Choice Filling",
        description:
          "Select and prioritize your preferred colleges and courses from the available options.",
      },
      {
        id: 4,
        title: "Seat Allotment",
        description:
          "Seats are allotted based on rank, category, and choices made. Check your allotment status online.",
      },
      {
        id: 5,
        title: "Physical Reporting",
        description:
          "Report to the allotted institute with original documents for verification and admission.",
      },
    ],
  });

  // 👉 Future API Logic Goes Here
  // useEffect(() => {
  //   fetch("https://your-api-url.com/api/counselling-process")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProcess(data); // Make sure API response matches ProcessData structure
  //     })
  //     .catch((err) => console.error("Error fetching data:", err));
  // }, []);

  return (
    <div id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Step-by-Step Guide
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{process.title}</h2>
          <p className="text-lg text-gray-600">
            Follow these steps to complete your counselling process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {process.steps.map((step, index) => (
            <div key={step.id} className="flex mb-8 last:mb-0">
              <div className="flex-shrink-0 flex flex-col items-center mr-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  {step.id}
                </div>
                {index < process.steps.length - 1 && (
                  <div className="w-0.5 h-full bg-blue-200 mt-2" />
                )}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
