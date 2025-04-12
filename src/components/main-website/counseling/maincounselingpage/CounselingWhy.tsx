
import { motion } from 'framer-motion';


const processSteps= [
  {
    id: 1,
    title: "Exam Registration",
    description: "Register for entrance exams like JEE Main, NEET, WBJEE, etc. based on your career goals.",
    icon: "📝",
  },
  {
    id: 2,
    title: "Counselling Registration",
    description: "After results, register for counselling on the respective portal with your rank card and personal details.",
    icon: "🖥️",
  },
  {
    id: 3,
    title: "Choice Filling",
    description: "Fill your college and branch preferences in order of priority during the choice filling window.",
    icon: "📋",
  },
  {
    id: 4,
    title: "Seat Allotment",
    description: "Wait for seat allocation, pay the required fees, and download your provisional admission letter.",
    icon: "🎉",
  },
];

const infoItems= [
  {
    id: 1,
    title: "Expert Guidance",
    description: "Our experienced counselors provide personalized advice on college selections based on your rank and preferences.",
    icon: "👨‍🏫",
  },
  {
    id: 2,
    title: "Rank Predictor",
    description: "Use our advanced algorithm to predict your potential rank and identify colleges where you have a good chance of admission.",
    icon: "📊",
  },
  {
    id: 3,
    title: "College Comparison",
    description: "Compare multiple colleges side by side including placements, fees, facilities, and academic reputation.",
    icon: "⚖️",
  },
  {
    id: 4,
    title: "Live Updates",
    description: "Get real-time updates about counselling dates, seat vacancies, and important announcements to never miss a deadline.",
    icon: "🔔",
  },
];

const counselingFeatures= [
  {
    id: 1,
    title: "Seat Matrix Analysis",
    description: "Detailed analysis of available seats across colleges to maximize your chances of getting your preferred course and college.",
    icon: "📈",
  },
  {
    id: 2,
    title: "College Reviews",
    description: "Authentic reviews and feedback from current students and alumni to help you make informed decisions.",
    icon: "⭐",
  },
  {
    id: 3,
    title: "Document Checklist",
    description: "Comprehensive checklist of required documents for each counselling process to keep you prepared.",
    icon: "📄",
  },
  {
    id: 4,
    title: "Fee Structure Guide",
    description: "Detailed information about fee structures, scholarships, education loans, and financial assistance options.",
    icon: "💰",
  },
  {
    id: 5,
    title: "Campus Insights",
    description: "Virtual campus tours and insights into infrastructure, hostels, labs, and other facilities.",
    icon: "🏫",
  },
  {
    id: 6,
    title: "Career Path Guidance",
    description: "Expert advice on selecting branches that align with your interests, abilities, and future career goals.",
    icon: "🛣️",
  },
];

const InfoSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-primaryBtn">Us</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in helping students navigate the complex college admission process,
              providing expert guidance every step of the way.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {infoItems.map((item :any) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How College Admission <span className="text-primaryBtn">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the counseling process is essential for securing admission to your dream college.
              Here's a step-by-step guide to navigate the journey.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step :any) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-purple-300 p-6 rounded-xl">
                  <div className="bg-primaryBtn text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {step.id}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {step.id < processSteps.length && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-blue-300 transform -translate-y-1/2 -ml-4" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Features */}
        <div id="features">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-primaryBtn">Special Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond basic counselling, we offer additional tools and services to enhance your college selection
              and application process.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {counselingFeatures.map((feature :any) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
