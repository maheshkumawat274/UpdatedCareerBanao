
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopUni = () => {
  const [showAll, setShowAll] = useState(false);
  const universities = [
  {
    name: "Bennett University",
    location: "University in Greater Noida, Uttar Pradesh",
    imgSrc: "./logo/bennett.jpeg",
    route: "/UniversityLandingPage"
  },
  {
    name: "IILM University Gr. Noida",
    location: "University in Greater Noida, Uttar Prades",
    imgSrc: "./logo/iilm.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "IILM University Gurugram",
    location: "University in Gurugram, Haryana",
    imgSrc: "./logo/iilm.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "UPES",
    location: "University in Dehradun, Uttarakhand",
    imgSrc: "./logo/images.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "Quantum University",
    location: "University in Jaysingha, Uttarakhand",
    imgSrc: "https://colleges18.s3.ap-south-1.amazonaws.com/mcv23201_unnamed_6b12b13630.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "K.R Mangalam University",
    location: "University in Sohna Rural, Haryana",
    imgSrc: "https://www.campusoption.com/images/colleges/logos/10_11_16_091512_kr_ll.jpg",
    route: "/UniversityLandingPage"
  },
  {
    name: "Noida Internationl University",
    location: "University in Noida",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjALaNusyH6KfIzJvE9AC1-2tIbI8oXT_s5A&s",
    route: "/UniversityLandingPage"
  },
  {
    name: "SRM University",
    location: "University in ghaziabad",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoko4aGH9-9mtvI8DS5KYIiDSXtUm9QiN5g&s",
    route: "/UniversityLandingPage"
  },
  {
    name: "GNIOT Institute",
    location: "University in Greater Noida",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAw34JTF8201KBY4YigyDeEzH9OZNFceMMJg&s",
    route: "/UniversityLandingPage"
  },
  {
    name: "Mangalmay Institute",
    location: "University in Greater Noida",
    imgSrc: "https://myapplicationform.in/wp-content/uploads/Mangalmay-Institute-of-Management-Technology_application_form.jpg",
    route: "/UniversityLandingPage"
  },
  {
    name: "LPU University",
    location: "University in Jalandhar, Panjab",
    imgSrc: "https://www.vidyalive.com/wp-content/uploads/2024/07/lpu.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "Chitkara University",
    location: "Private university in Chandigarh",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jwFDqwnLlghKlMCDXPF34ikUpbXDP_2ahA&s",
    route: "/UniversityLandingPage"
  },
  {
    name: "Shoolini University",
    location: "University in Solan, Himachal Pradesh",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTW5fZBC4x7FbMdhlRSCerZ2hsesU6f-HQTQ&s",
    route: "/UniversityLandingPage"
  },
  {
    name: "Uttaranchal University",
    location: "Research university in Dehradun, Uttarakhand",
    imgSrc: "https://images.shiksha.com/mediadata/images/1631180032phpvUgTqj.jpeg",
    route: "/UniversityLandingPage"
  },
  {
    name: "Tula's Institute",
    location: "College in Dehradun, Uttarakhand",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGyo3y9oG1zboBk2KGWCRdYCvO9W-7TxXoA&s",
    route: "/UniversityLandingPage"
  },
  {
    name: "Rit Institute",
    location: "College in Roorkee, Uttarakhand",
    imgSrc: "https://ritroorkee.com/wp-content/uploads/2024/03/Untitled-design-31.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "Sandip University",
    location: "University in Nashik, Maharashtra",
    imgSrc: "./logo/sandip.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "SR University",
    location: "University in Telangana",
    imgSrc: "https://certifier-production-amplify.s3.eu-west-1.amazonaws.com/public/3a2f80a0-26ad-406a-8dc6-b43fe86756a2%2Fcertificate-designs%2Fimages%2F04-10-2024-09%3A46%3A56_SRU_Main_Logo_Horizontal_Colour__2__page-0001-removebg-preview.png",
    route: "/UniversityLandingPage"
  },
  {
    name: "Sandip University",
    location: "University in Madhubani, Bihar",
    imgSrc: "./logo/sandip.png",
    route: "/UniversityLandingPage"
  }
];

const visibleUni = showAll ?  universities: universities.slice(0, 3);
  return (
    <div className="mt-4">
      <h1 className="text-gray-800 font-semibold text-3xl">Top Universities</h1>
      <hr className="mt-2" />
      {visibleUni.map((university, index) => (
        <div>
          <div
          key={index}
          className="p-3 rounded-lg flex flex-row items-center justify-between relative overflow-hidden mb-2"
        >
            <div className="text-white mb-6 md:mb-0 md:text-left">
              <h1 className="text-sm sm:text-lg text-gray-800  font-bold mb-1">{university.name}</h1>
              <p className="text-sm text-gray-700 mb-2">{university.location}</p>
              <Link
                to={university.route}
                className="bg-white text-primaryBtn border-2 border-primaryBtn px-4 py-1 rounded shadow hover:bg-primaryBtn hover:text-white"
              >
                Visit Now
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 relative">
              <img src={university.imgSrc} alt={university.name} className="w-30 h-20 object-cover rounded-lg" />
            </div>
            </div><hr/>
         </div>
       ))}
       <div className="text-center mt-4">
           <button
             className="bg-white text-primaryBtn border-2 border-primaryBtn px-4 py-1 rounded shadow hover:bg-primaryBtn hover:text-white"
             onClick={() => setShowAll(!showAll)}
            >
            {showAll ? "View Less" : "View More"}
        </button>
        </div>
    </div>
  );
};

export default TopUni;
