import React from "react";

interface DateItem {
  event: string;
  date: string;
}

interface CounselingData {
  name: string;
  dates: DateItem[];
}

interface ImportantDatesProps {
  data: CounselingData[];
}

const ImportantDatesSection: React.FC<ImportantDatesProps> = ({ data }) => {
  const info = data?.[0];

  if (!info || !info.dates) return null;

  return (
    <div id="dates" className="py-16">
      <div className="text-center">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          Mark Your Calendar
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 mb-4">
          Important Dates
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Don't miss out on any major deadlines for {info.name || 'Counseling'}.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Dates List */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            {info.dates.map((dateItem, index) => (
              <div
                key={index}
                className="flex items-start bg-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {dateItem.event}
                  </h4>
                  <p className="text-sm text-purple-600 font-medium">{dateItem.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/college-admission-concept-illustration_114360-8128.jpg"
            alt="Students reporting"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImportantDatesSection;
