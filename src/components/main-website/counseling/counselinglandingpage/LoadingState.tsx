import type React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-600 rounded-full border-t-transparent animate-spin" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold text-gray-700">Loading Counseling Data...</h2>
      <p className="mt-2 text-gray-500">Please wait while we fetch the latest information</p>
    </div>
  );
};

export default LoadingState;
