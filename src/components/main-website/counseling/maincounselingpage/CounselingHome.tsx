import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CounselingType = {
  title: string;
  description: string;
  button_text: string;
  image_src: string;
  image_title: string;
  image_subtitle: string;
};

const CounselingHome: React.FC = () => {
  const [counselingData, setCounselingData] = useState<CounselingType | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/counseling-data')
      .then((res) => {
        setCounselingData(res.data[0]); // If your API returns array
      })
      .catch((err) => {
        console.error('Error fetching counseling data:', err);
      });
  }, []);

  if (!counselingData) return <p className="p-4">Loading...</p>;

  return (
    <section className="">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-700 mb-4">
              {counselingData.title.split('College Admission')[0]}
              <span className="text-pink-500"> College Admission</span>
              {counselingData.title.split('College Admission')[1]}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {counselingData.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#counseling-cards"
                className="bg-primaryBtn hover:bg-hoverBtn text-white font-medium px-8 py-3 rounded-full transition-all inline-flex items-center justify-center"
              >
                {counselingData.button_text}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full opacity-70 z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full opacity-70 z-0" />
            <img
              src={counselingData.image_src}
              alt="Students discussing college admissions"
              className="w-full h-[400px] rounded-xl shadow-2xl relative z-10"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
              <div className="text-sm font-semibold text-blue-600">
                {counselingData.image_title}
              </div>
              <div className="text-xs text-gray-500">
                {counselingData.image_subtitle}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CounselingHome;
