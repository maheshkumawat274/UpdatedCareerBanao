import { useState } from "react";


type AboutData = {
  title: string;
  description: string;
};

const aboutData: AboutData[] = [
  {
    title: "Sanskriti University Admission 2025",
    description:
      "Sanskriti University admissions are ongoing. To get admission, candidates must have to meet the minimum eligibility criteria set by the university for various offered courses. The university accepts various entrance exams for admission such as CUET UG, JEE Main, CUET PG, Sanskriti University National Admission Test (SUNAT), MAT, CAT, XAT, NMAT, etc. For admission to the UG courses, candidates must have passed class 12 from a recognised board with a minimum of 45% marks in the relevant stream. Entrance exams like CUET, UG, JEE Main, NEET UG are accepted for admission to the UG courses. To become eligible for the PG courses, candidates must have a graduate degree in the relevant stream from a recognised university. Entrance exams like CUET PG, SUNAT, MAT/ CAT, NMAT, XAT, and NAT are accepted by the university for PG admission at Sanskriti University. <br/> <br/>Various scholarships are also offered to the candidates based on their merit, economic background and more. There are a total of 26 courses offered by the university in different specialisations. To apply for admission to the offered courses, candidates must apply online through the official website or you can also visit the admission office of the university to submit the duly filled application form in offline mode."
  },
];

const steps = [
  {
    title: "Registration",
    description: "Fill the application form and pay the application fee.",
    icon: "📄",
    gradient: "bg-gradient-to-r from-pink-500 to-orange-500",
  },
  {
    title: "Document Submission",
    description: "Upload the required documents such as academic transcripts etc.",
    icon: "📤",
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    title: "Document Verification",
    description: "Verify your identity through the submitted documents.",
    icon: "✅",
    gradient: "bg-gradient-to-r from-teal-500 to-blue-500",
  },
  {
    title: "Fee Payment",
    description: "Pay the course fee after successful document verification.",
    icon: "💳",
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    title: "Admission Confirmation",
    description: "After completing all the required steps, your admission will be processed.",
    icon: "🏫",
    gradient: "bg-gradient-to-r from-green-500 to-teal-500",
  },
];
const AdmissionProcess: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle visibility of the course list
  const toggleView = () => setShowAll(!showAll);


  return (
    <div className="px-2 sm:px-8 bg-[#EDEDE9] mt-4">
      <div className="w-full shadow-md mt-8 p-4">
        {aboutData.map((aboutItem, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{aboutItem.title}</h2>
            <p
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{
                __html: showAll
                ? aboutItem.description
                : `${aboutItem.description.slice(0, 495)}...`,
              }}
            />
            
          </div>
        ))}



        {/* View More/View Less Button */}
        <div className="mt-4">
          <button
            onClick={toggleView}
            className="text-blue-500 font-semibold mt-2"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div><br/>
        <h1 className="text-gray-700 text-lg">The admission is done on rolling basis with a fixed deadline for the submission of the application. The admission calender and strcuture is different for each university. Nonetheless, below mentioned is a general overview of the admissions process followed largely:</h1>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start gap-8 p-6">
      {/* Line connecting all steps */}
  
        {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-center md:flex-1">
          {/* Gradient Circle with Icon */}
             <div
               className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl ${step.gradient}`}
             >
               {step.icon}
             </div>
   
             {/* Vertical Line for Mobile */}
             {index < steps.length - 1 && (
               <div className="md:hidden h-16 w-1 bg-gray-300"></div>
             )}
   
             {/* Title and Description */}
             <div className="text-center mt-4">
               <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
               <p className="text-gray-600 text-sm mt-2">{step.description}</p>
             </div>
   
             {/* Horizontal Line for Desktop */}
             {index < steps.length - 1 && (
               <div className="hidden md:block absolute top-8 left-full h-1 w-8 bg-gray-300"></div>
             )}
           </div>
         ))}
       </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
