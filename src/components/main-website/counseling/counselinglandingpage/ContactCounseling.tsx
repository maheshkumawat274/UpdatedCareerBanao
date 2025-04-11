import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactCounseling: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full flex flex-col md:flex-row">
        
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach us by email, phone, or WhatsApp.
          </p>

          {/* Email Button */}
          <a
            href="mailto:info@example.com"
            className="flex items-center mb-4 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-4 py-2 rounded-lg transition"
          >
            <Mail className="w-5 h-5 mr-3" />
            info@careerbanao.org
          </a>

          {/* Phone Button */}
          <a
            href="tel:+918750092628"
            className="flex items-center mb-4 bg-green-100 hover:bg-green-200 text-green-800 font-medium px-4 py-2 rounded-lg transition"
          >
            <Phone className="w-5 h-5 mr-3" />
            +91 8750092628
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918750092628"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-100 hover:bg-green-200 text-green-800 font-medium px-4 py-2 rounded-lg transition"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src="../logo/pexels-karolina-grabowska-7195310.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCounseling;
