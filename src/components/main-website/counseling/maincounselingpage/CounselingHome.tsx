import { motion } from 'framer-motion';

const counselingData = {
  title: 'Navigate Your College Admission Journey',
  description:
    'Comprehensive guidance for engineering and management entrance exam counselling including JoSAA, CSAB, UPTAC, WBJEE and more to help you secure your dream college.',
  buttonText: 'Explore Counselling Options',
  imageSrc: '../logo/about.jpg',
  imageSubtitle: {
    title: '2025-26 Admissions',
    subtitle: 'Counselling starts soon',
  },
};

const CounselingHome: React.FC = () => {
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
                {counselingData.buttonText}
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
              src={counselingData.imageSrc}
              alt="Students discussing college admissions"
              className="w-full h-[400px] rounded-xl shadow-2xl relative z-10"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
              <div className="text-sm font-semibold text-blue-600">
                {counselingData.imageSubtitle.title}
              </div>
              <div className="text-xs text-gray-500">
                {counselingData.imageSubtitle.subtitle}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CounselingHome;
