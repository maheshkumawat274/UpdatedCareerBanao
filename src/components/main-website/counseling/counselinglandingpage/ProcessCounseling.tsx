import React from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface ProcessData {
  title: string;
  steps: Step[];
}

type CounselingProcessProps = {
  data?: ProcessData[]; // Accepting an array now
};

const ProcessSection: React.FC<CounselingProcessProps> = ({ data }) => {
  const process = data?.[0]; // safely accessing first item

  if (!process || !process.steps) {
    return <p className="text-center text-gray-500">Loading process steps...</p>;
  }

  return (
    <div id="process" className="pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Step-by-Step Guide
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 mb-4">
            {process.title}
          </h1>
          <p className="text-lg text-gray-600">
            Follow these steps to complete your counselling process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {process.steps.map((step, index) => (
            <div key={step.id} className="flex mb-8 last:mb-0">
              <div className="flex-shrink-0 flex flex-col items-center mr-6">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold">
                  {step.id}
                </div>
                {index < process.steps.length - 1 && (
                  <div className="w-0.5 h-full bg-blue-200 mt-2" />
                )}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-grow">
                <h1 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h1>
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
