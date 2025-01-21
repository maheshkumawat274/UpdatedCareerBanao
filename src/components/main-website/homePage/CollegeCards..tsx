import React from 'react';
import { FaMapMarkerAlt, FaStar, FaUniversity, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
// Dummy data array for 20 colleges (can be replaced with API data)
const colleges = [
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
  },
  {
    id: 2,
    name: 'Sanskriti University',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
    highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
    location: 'University in Mathura, Uttar Pradesh',
  },
  
];

const CollegeCards: React.FC = () => {
  return (
    <div className="bg-[#EDEDE9] font-poppins mt-14 px-0 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
        <MdSchool className="inline-block text-blue-500 text-4xl mr-2" />
        Top Colleges & Universities
      </h1>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mx-0 pb-3 sm:mx-4">
        <div className="flex space-x-4 w-max">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl w-64 flex-shrink-0">
              <div className="relative">
                <img
                  src={college.image}
                  alt={`${college.name} Campus`}
                  className="w-full h-40 object-cover"
                />
                <img
                  src={college.logo}
                  alt={`${college.name} Logo`}
                  className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaUniversity className="text-blue-500 mr-2" />
                  {college.name}
                </h3>
                <p className="text-sm text-gray-600 flex items-center mb-3">
                  <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  {college.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <FaStar className="text-yellow-500 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium w-full hover:from-blue-600 hover:to-blue-800 transition">
                  <FaAward className="inline-block mr-2" /> Visit More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeCards;
