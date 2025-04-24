
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const InfoSection: React.FC = () => {

  type CounselingType = {
    id:number
   title:string;
   description:string;
   icon:string;
  }
  type CounselinginfoType = {
    id:number
    title:string;
    description:string;
    icon:string;
   }
   type CounselingfeatureType = {
    id:number
    title:string;
    description:string;
    icon:string;
   }

   const [cardinfo, setCardinfo] = useState<CounselinginfoType[]>([]);
    
      useEffect(() => {
        axios.get('http://localhost:3000/api/info-items')
          .then((res) => {
            setCardinfo(res.data); 
            console.log(res, "mahesh")// If your API returns array
          })
          .catch((err) => {
            console.error('Error fetching counseling data:', err);
          });
      }, []);

  const [cardprocess, setCardprocess] = useState<CounselingType[]>([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/api/process-steps')
        .then((res) => {
          setCardprocess(res.data); // If your API returns array
        })
        .catch((err) => {
          console.error('Error fetching counseling data:', err);
        });
    }, []);
    
      const [cardfeatures, setCardfeatures] = useState<CounselingfeatureType[]>([]);
      
        useEffect(() => {
          axios.get('http://localhost:3000/api/counseling-features')
            .then((res) => {
              setCardfeatures(res.data); // If your API returns array
            })
            .catch((err) => {
              console.error('Error fetching counseling data:', err);
            });
        }, []);

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {cardinfo.map((item :any) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How College Admission <span className="text-primaryBtn">Works</span>
            </h1>
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
            {cardprocess.map((step :any) => (
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
                  <h1 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h1>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {step.id < cardprocess.length && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-blue-300 transform -translate-y-1/2 -ml-4" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Features */}
        <div id="features">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-primaryBtn">Special Features</span>
            </h1>
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
            {cardfeatures.map((feature :any) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800">{feature.title}</h1>
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
