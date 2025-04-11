
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const HomeFaq: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is CareerBanao, and how can it help me with admissions?",
      answer: "CareerBanao is an online admission platform that simplifies the application process for students by providing direct admission assistance, course guidance, and partnerships with top universities across India.",
    },
    {
      question: "Which universities and courses do you offer admissions for?",
      answer: "We partner with a wide range of universities offering undergraduate, postgraduate, and professional courses such as online MBAs, engineering, law, and more. Contact us to know the latest offerings.",
    },
    {
      question: "How can I apply for admission through CareerBanao?",
      answer: "You can apply by visiting our website, selecting your desired course, and filling out the application form. Our team will guide you through the process.",
    },
    {
      question: "Do I need to meet specific eligibility criteria to apply?",
      answer: "Yes, eligibility criteria vary based on the university and course. We provide detailed eligibility information for each program on our website.",
    },
    {
      question: "Is there a fee for using CareerBanao's services?",
      answer: "Our guidance services are free for students. However, you may need to pay application or admission fees directly to the university.",
    },
    {
      question: "What are the payment options available for application or admission fees?",
      answer: "We support multiple payment options, including online payment gateways, net banking, and UPI.",
    },
    {
      question: "Can I get a refund if I decide to cancel my application?",
      answer: "Refund policies depend on the university's terms and conditions. Please check the specific university's refund policy or contact our support team for assistance.",
    },
    {
      question: "How long does the admission process take?",
      answer: "The timeline varies based on the course and university. Typically, the process takes 1-3 weeks after submitting your application.",
    },
    {
      question: "Do you provide support after admission?",
      answer: "Yes, we assist students with post-admission services like document submission, fee payments, and resolving any queries with the university.",
    },
    {
      question: "How can I contact CareerBanao for more information?",
      answer: "You can reach out to us via our contact page, WhatsApp, or call our customer support team. Details are available on the website.",
    }
  ];

  const toggleFAQ = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className=" px-2 sm:px-14 pt-12 w-full mx-auto font-poppins">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 font-poppins">
      Frequently Asked Questions
    </h1>
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            className="w-full flex justify-between items-center px-3 sm:px-6 py-5 text-left font-medium text-gray-800 bg-gradient-to-r from-purple-200 to-pink-50 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className='text-lg'>{faq.question}</span>
            <span className="text-2xl text-primaryBtn">
              {selectedIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>
          {selectedIndex === index && (
            <div
              className="px-6 py-4 text-gray-700 bg-gray-50 border-t border-gray-200 text-md sm:text-lg leading-relaxed animate-fade-in"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default HomeFaq;