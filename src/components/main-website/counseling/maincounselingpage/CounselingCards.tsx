import { motion } from 'framer-motion';


const CounselingCard = [
  {
    id: 1,
    title: "JoSAA Counselling",
    description: "Joint Seat Allocation Authority for admissions to IITs, NITs, IIITs and other GFTIs through JEE Main and JEE Advanced ranks.",
    icon: "🏛️",
     link: "https://josaa.nic.in"
  },
  {
    id: 2,
    title: "CSAB Counselling",
    description: "Central Seat Allocation Board handles admissions to NITs, IIITs and GFTIs through JEE Main ranks after JoSAA rounds.",
    icon: "🎓",
    link: "https://csab.nic.in"
  },
  {
    id: 3,
    title: "UPTAC Counselling",
    description: "Uttar Pradesh Technical Admission Counselling for engineering admissions in UP state colleges through UPSEE/AKTU ranks.",
    icon: "🏢",
    link: "https://uptac.admissions.nic.in"
  },
  {
    id: 4,
    title: "WBJEE Counselling",
    description: "West Bengal Joint Entrance Examination Board for engineering admissions in West Bengal colleges.",
    icon: "🎯",
  
    link: "https://wbjeeb.nic.in"
  },
  {
    id: 5,
    title: "COMEDK Counselling",
    description: "Consortium of Medical, Engineering and Dental Colleges of Karnataka for private engineering colleges in Karnataka.",
    icon: "🔬",
  
    link: "https://www.comedk.org"
  },
  {
    id: 6,
    title: "JAC Delhi Counselling",
    description: "Joint Admission Counselling for Delhi state engineering colleges like DTU, NSUT, IGDTUW and more.",
    icon: "🏙️",
   link: "https://jacdelhi.admissions.nic.in"
  },
  {
    id: 7,
    title: "MHT CET Counselling",
    description: "Maharashtra Common Entrance Test for engineering admissions across colleges in Maharashtra.",
    icon: "🏫",
  
    link: "https://fe2023.mahacet.org"
  },
  {
    id: 8,
    title: "JAC Chandigarh",
    description: "Joint Admission Committee for engineering admissions in Chandigarh colleges like PEC, CCET and more.",
    icon: "🏛️",
     link: "https://jacchd.admissions.nic.in"
  },
  {
    id: 9,
    title: "PTU Counselling",
    description: "Punjab Technical University (I.K. Gujral Punjab Technical University) admissions for colleges across Punjab.",
    icon: "🎓",
     link: "https://ptu.ac.in"
  },
  {
    id: 10,
    title: "MPDTE Counselling",
    description: "Madhya Pradesh Directorate of Technical Education counselling for MP state engineering colleges.",
    icon: "🏢",
  
    link: "https://dte.mponline.gov.in"
  },
  {
    id: 11,
    title: "UGEAC Counselling",
    description: "Uttar Pradesh State Entrance Examination counselling for state colleges in Uttar Pradesh.",
    icon: "🏫",
     link: "https://aktu.ac.in"
  },
  {
    id: 12,
    title: "HBTU Counselling",
    description: "Harcourt Butler Technical University direct admissions and counselling for their prestigious programs.",
    icon: "🎯",
  
    link: "https://hbtu.ac.in"
  },
  {
    id: 13,
    title: "MMMUT Counselling",
    description: "Madan Mohan Malaviya University of Technology counselling for admission to various engineering programs.",
    icon: "🔬",
  
    link: "https://mmmut.ac.in"
  },
  {
    id: 14,
    title: "REAP Counselling",
    description: "Rajasthan Engineering Admission Process for engineering colleges across Rajasthan state.",
    icon: "🏙️",
     link: "https://www.reaprajasthan.com"
  },
  {
    id: 15,
    title: "Other State Counselling",
    description: "Various other state-level counselling processes for engineering admissions across different states in India.",
    icon: "🇮🇳",
     link: "#"
  },
];

const CounselingCards: React.FC = () => {
  return (
    <section className="" id="counseling-cards">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            College <span className="text-pink-500">Counselling Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide expert guidance for various engineering and medical counselling processes
            across India, helping you secure the best possible college based on your rank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CounselingCard.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className= 'p-6 bg-primaryBtn hover:bg-hoverBtn text-white'>
                  <div className="flex justify-between items-center">
                    <span className="text-4xl">{card.icon}</span>
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                      {card.id <= 2 ? 'Central' : 'State'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-4">{card.title}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <div className="mt-auto">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primaryBtn hover:text-hoverBtn font-medium"
                    >
                      View more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#counselor"
            className="bg-primaryBtn hover:bg-hoverBtn text-white font-medium px-8 py-3 rounded-full transition-all inline-flex items-center justify-center"
          >
            Get Personalized Counselling
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
      </div>
    </section>
  );
};

export default CounselingCards;
