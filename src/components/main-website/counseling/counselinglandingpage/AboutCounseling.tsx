import React from 'react';

const AboutCounseling : React.FC = () => {
  const data = {
    title: "About JoSAA Counselling",
    description: [
      "The Joint Seat Allocation Authority (JoSAA) is responsible for managing the seat allocation process for admissions to prestigious institutions like IITs, NITs, IIITs, and GFTIs. It operates based on the ranks obtained in JEE Main and JEE Advanced.",
      "JoSAA ensures a unified and transparent platform for candidates to fill choices, lock them, and get allotted seats across multiple rounds of counselling. The process includes registration, choice filling, mock allotments, final locking, and seat acceptance.",
      "Candidates must stay updated with the official JoSAA schedule to ensure timely participation in each round. It is a crucial step for securing admission into top engineering institutes of India."
    ],
    officialWebsite: "https://josaa.nic.in",
    enrollLink: "/enroll-josaa", // You can link this to your registration/payment page
  };

  return (
    <section className="w-full px-4 py-10 md:px-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">
          {data.title}
        </h1>

        {data.description.map((para, index) => (
          <p key={index} className="text-base md:text-lg leading-relaxed mb-6">
            {para}
          </p>
        ))}

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8">
          <a
            href={data.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-800 transition duration-300"
          >
            Enroll now
          </a>

        </div>
      </div>
    </section>
  );
};

export default AboutCounseling
