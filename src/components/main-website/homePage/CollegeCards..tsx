import React from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaStar, FaUniversity, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Dummy data array for 20 colleges (can be replaced with API data)
const colleges = [
  
    {
      id: 1,
      name: "Bennett University",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bennett_University_.jpg/1200px-Bennett_University_.jpg",
      logo: "https://www.entrepreneurial-universities.org/img/logos/Slide80.JPG",
      highlights: ["World-Class Faculty", "30+ Programs", "95% Placement Rate"],
      location: "Greater Noida, Uttar Pradesh",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Bennett_University&utm_campaign=University_Cards"
    },
    {
      id: 2,
      name: "IILM University, Greater Noida",
      image: "https://iilm.ac.in/themes/iilmnoida/images/events_banner.png",
      logo: "https://colleges18.s3.ap-south-1.amazonaws.com/IILM_University_Greater_Noida_logo_a24e49a29d.jpg",
      highlights: ["World-Class Faculty", "25+ Programs", "92% Placement Rate"],
      location: "Greater Noida, Uttar Pradesh",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=IILM_University_Greater%20Noida&utm_campaign=University_Cards"
    },
    {
      id: 3,
      name: "IILM University, Gurugram",
      image: "https://blog.iilm.edu/wp-content/uploads/2024/01/1542698646IILM_Gurgaon_Campus.webp",
      logo: "https://colleges18.s3.ap-south-1.amazonaws.com/IILM_University_Greater_Noida_logo_a24e49a29d.jpg",
      highlights: ["World-Class Faculty", "20+ Programs", "90% Placement Rate"],
      location: "Gurugram, Haryana",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=IILM_University_Gurugram&utm_campaign=University_Cards"
    },
    {
      id: 4,
      name: "UPES",
      image: "https://www.thehivehostels.com/uploads/institute/UPES.jpg",
      logo: "https://indiaeducationdiary.in/wp-content/uploads/2022/01/UPES-LOGO-01.jpg?w=640",
      highlights: ["World-Class Faculty", "40+ Programs", "93% Placement Rate"],
      location: "Dehradun, Uttarakhand",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=UPES&utm_campaign=University_Cards"
    },
    {
      id: 5,
      name: "Quantum University",
      image: "https://quantumuniversity.edu.in/images/headers/fee-structure/01.jpg",
      logo: "https://colleges18.s3.ap-south-1.amazonaws.com/mcv23201_unnamed_6b12b13630.png",
      highlights: ["World-Class Faculty", "35+ Programs", "88% Placement Rate"],
      location: "Roorkee, Uttarakhand",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Quantum_University&utm_campaign=University_Cards"
    },
    {
      id: 6,
      name: "K.R Mangalam University",
      image: "https://www.krmangalam.edu.in/wp-content/uploads/2024/02/82bs_1-768x380-1.webp",
      logo: "https://i.pinimg.com/736x/81/e7/75/81e7754d22e0094165e78e4f091eb404.jpg",
      highlights: ["World-Class Faculty", "30+ Programs", "90% Placement Rate"],
      location: "Gurugram, Haryana",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=K.R_Mangalam_University&utm_campaign=University_Cards"
    },
    {
      id: 7,
      name: "Noida International University",
      image: "https://psychoprodigy.in/sites/default/files/inline-images/Campus%20View%20of%20Noida%20International%20University%20Greater%20Noida_Campus-View.jpg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjALaNusyH6KfIzJvE9AC1-2tIbI8oXT_s5A&s",
      highlights: ["World-Class Faculty", "40+ Programs", "87% Placement Rate"],
      location: "Greater Noida, Uttar Pradesh",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Noida_International_University&utm_campaign=University_Cards"
    },
    {
      id: 8,
      name: "SRM University, Delhi-NCR",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtrFU6WYx6Ujj4TSo793n009VWsqIMA0JGQ&s",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSetKZsLh8t8BNy3-CiLwz2IN7cAlUyT9Y-w&s",
      highlights: ["Ranked #1 in Engineering", "50+ Programs", "94% Placement Rate"],
      location: "Ghaziabad, Uttar Pradesh",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=SRM_University_Delhi-NCR&utm_campaign=University_Cards"
    },
    {
      id: 9,
      name: "GNIOT Institute",
      image: "https://images.shiksha.com/mediadata/images/1499333475phpY9hQNo.jpeg",
      logo: "https://i.ytimg.com/vi/4Snxrcs78RA/hqdefault.jpg",
      highlights: ["World-Class Faculty", "25+ Programs", "89% Placement Rate"],
      location: "Greater Noida, Uttar Pradesh",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=GNIOT_Institute&utm_campaign=University_Cards"
    },
    {
      id: 10,
      name: "Mangalmay Group Of Institutions",
      image: "https://www.highereducationdigest.com/wp-content/uploads/2019/07/Image-2-5.jpg",
      logo: "https://www.mangalmay.org/images/logo.png",
      highlights: ["20+ Years of Excellence", "30+ Programs", "85% Placement Rate"],
      location: "Greater Noida, Uttar Pradesh",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Mangalmay_Group%20Of%20Institutions&utm_campaign=University_Cards"
    },
    {
      id: 11,
      name: "LPU University",
      image: "https://images.shiksha.com/mediadata/images/articles/1655635763phpVQHm5C.jpeg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU8U8zfgyRD3jgzI_nlZUh04M2BhpniItIQ&s",
      highlights: ["Top Private University", "200+ Programs", "96% Placement Rate"],
      location: "Phagwara, Punjab",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=LPU_University&utm_campaign=University_Cards"
    },
    {
      id: 12,
      name: "Chitkara University",
      image: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/03/CUB4-Top-10-reasons-why-Chitkara-University-is-the-best-University-in-North-India.jpg",
      logo: "https://logowik.com/content/uploads/images/chitkara-university9168.jpg",
      highlights: ["NAAC A+ Accredited", "60+ Programs", "91% Placement Rate"],
      location: "Punjab, India",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Chitkara_University&utm_campaign=University_Cards"
    },
    {
      id: 13,
      name: "Shoolini University",
      image: "https://shooliniuniversity.com/media/1721821924-qzz7e5z1wk271.jpg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTW5fZBC4x7FbMdhlRSCerZ2hsesU6f-HQTQ&s",
      highlights: ["World-Class Faculty", "50+ Programs", "92% Placement Rate"],
      location: "Solan, Himachal Pradesh",
      link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Shoolini_University&utm_campaign=University_Cards"
    },
      {
        id: 14,
        name: "Uttaranchal University",
        image: "https://www.onlineuu.in/assets/images/gallery-1.jpg",
        logo: "https://cdn.prod.website-files.com/63a98d7ca37497b26e5ba22c/663e0018128475ea76c30c44_Uttranchal%20University%20(1).jpeg",
        highlights: ["World-Class Faculty", "50+ Programs", "90% Placement Rate"],
        location: "Dehradun, Uttarakhand",
        link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Uttaranchal_University&utm_campaign=University_Cards"
      },
      {
        id: 15,
        name: "Tula's Institute",
        image: "https://images.shiksha.com/mediadata/images/1659189083php8PEdlB.jpeg",
        logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFVB1T5rLzB9w/company-logo_200_200/company-logo_200_200/0/1675242726279/tulas_institute_logo?e=2147483647&v=beta&t=8Dd0QiiO5pwhdM6BCxNb9H6WTxK-jbdfW7yq7R_y8Lk",
        highlights: ["World-Class Faculty", "30+ Programs", "95% Placement Rate"],
        location: "Dehradun, Uttarakhand",
        link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Tula%27s_Institute&utm_campaign=University_Cards"
      },
      {
        id: 16,
        name: "RIT Institute",
        image: "https://www.rit.edu/_assets/images/og-image.jpg",
        logo: "https://ritroorkee.com/wp-content/uploads/2024/03/Untitled-design-31.png",
        highlights: ["World-Class Faculty", "40+ Programs", "92% Placement Rate"],
        location: "Rochester, New York, USA",
        link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=RIT_Institute&utm_campaign=University_Cards"
      },
      {
        id: 17,
        name: "Sandip University",
        image: "https://www.amecet.in/images/campus-profile/gallery/sandip/large/6.jpg",
        logo: "https://www.sandipfoundation.org/conference/images/logo2.jpg",
        highlights: ["World-Class Faculty", "60+ Programs", "88% Placement Rate"],
        location: "Nashik, Maharashtra",
        link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=Sandip_University&utm_campaign=University_Cards"
      },
      {
        id: 18,
        name: "SR University",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiv1K6MShh4iEw5qBTUh27W8Pa3JjmPImaQ&s",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3ObEmm-uktTwR9xwMm1yyLKTDtMTfT8yXg&s",
        highlights: ["World-Class Faculty", "35+ Programs", "93% Placement Rate"],
        location: "Warangal, Telangana",
        link: "https://enquiry.careerbanao.org/?utm_source=website&utm_medium=SR_University&utm_campaign=University_Cards"
      }
    
];

// const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/universities")
//       .then(response => setColleges(response.data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  pauseOnHover: true,
  arrows:true,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const CollegeCards: React.FC = () => {
  return (
    <div className="bg-[#EDEDE9] font-poppins mt-14 px-0 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
        <MdSchool className="inline-block text-primaryBtn text-5xl mr-2" />
        Top Colleges & Universities
      </h1>
      <Slider {...settings} className="mx-4">
        {colleges.map((college) => (
          <div key={college.id} className="px-2 pt-5 pb-5">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
                <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md" />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaUniversity className="text-primaryBtn mr-2" />
                  {college.name}
                </h1>
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
                <a href={college.link}>
                  <button className="bg-primaryBtn hover:bg-hoverBtn text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
                    <FaAward className="inline-block mr-2" /> Visit More
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CollegeCards;


// const CollegeCards: React.FC = () => {
//   return (
//     <div className="bg-[#EDEDE9] font-poppins mt-14 px-0 sm:px-4">
//       <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
//         <MdSchool className="inline-block text-primaryBtn text-5xl mr-2" />
//         Top Colleges & Universities
//       </h1>
//       <div className="overflow-hidden scrollbar-no mx-0 pb-3 sm:mx-4">
//         <div className="flex space-x-4 w-max">
//           {colleges.map((college) => (
//             <div
//               key={college.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl w-64 flex-shrink-0">
//               <div className="relative">
//                 <img
//                   src={college.image}
//                   alt={`${college.name} Campus`}
//                   className="w-full h-40 object-cover"
//                 />
//                 <img
//                   src={college.logo}
//                   alt={`${college.name} Logo`}
//                   className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
//                   <FaUniversity className="text-primaryBtn mr-2" />
//                   {college.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 flex items-center mb-3">
//                   <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
//                 </p>
//                 <ul className="text-sm text-gray-600 space-y-1 mb-3">
//                   {college.highlights.map((highlight, index) => (
//                     <li key={index} className="flex items-center">
//                       <FaStar className="text-yellow-500 mr-2" />
//                       {highlight}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link to={college.route}>
//                  <button className="bg-primaryBtn hover:bg-hoverBtn  text-white py-2 px-4 rounded-lg text-sm font-medium w-full  transition">
//                    <FaAward className="inline-block mr-2" /> Visit More
//                  </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollegeCards;
