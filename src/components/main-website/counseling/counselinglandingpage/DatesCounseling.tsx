import React, { useState } from 'react';

interface DateItem {
  event: string;
  date: string;
}

const ImportantDatesSection: React.FC = () => {
  const [importantDates] = useState<DateItem[]>([
    {
      event: "Online Registration & Payment",
      date: "July 5 - 15, 2024",
    },
    {
      event: "Choice Filling & Locking",
      date: "July 16 - 20, 2024",
    },
    {
      event: "1st Round Seat Allotment",
      date: "July 25, 2024",
    },
    {
      event: "2nd Round Seat Allotment",
      date: "August 5, 2024",
    },
    {
      event: "Physical Reporting at Institutes",
      date: "August 10 - 15, 2024",
    },
  ]);

  // TODO: Replace hardcoded data with API fetch in future using setImportantDates()

  return (
    <div id="dates" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Dates</h2>
          <p className="text-lg text-gray-600">
            Key deadlines for WBJEE counselling process
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {importantDates.map((dateItem, index) => (
              <div
                key={index}
                className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} flex items-start`}
              >
                <div className="mr-4 flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {dateItem.event}
                  </h3>
                  <p className="text-blue-600 font-semibold">{dateItem.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            * Dates are tentative and subject to change. Please refer to the official website for the latest updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantDatesSection;
