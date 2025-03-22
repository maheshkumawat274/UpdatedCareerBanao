import { IonIcon } from "@ionic/react";
import { schoolOutline, personOutline, pricetagsOutline } from "ionicons/icons";
import "./blog.css";

const Blogs = () => {
  // Placeholder data for blogs
  const blogData = [
    {
      id: 1,
      date: "30",
      month: "August",
      author: "Admin",
      category: "Admissions",
      title: "Get Admission in Online MBA, BBA, MCA, BCA – Apply Now!",
      description: "Enroll in NAAC A+ accredited Online Manipal University programs. Choose from Online MBA, BBA, MCA, and BCA. Start your degree at just ₹4,999/month. Limited seats available!",
      image: "./logo/careerbanaoblog.jpg",
      link:"https://enquiry.careerbanao.org/?utm_source=website&utm_medium=manipalonline&utm_campaign=latest%20updates"
    },
    

    {
      id: 2,
      date: "17",
      month: "March",
      author: "Admin",
      category: "Admissions",
      title: "Get Admission in B.Tech, BBA, BCA, MBA, MCA – Sandip University!",
      description: "Apply for B.Tech, BBA, BCA, MBA, and MCA at Sandip University through Bihar Student Credit Card Yojana. Study, stay, and food all included. Limited seats available! Call now: 9667650681.",
      image: "./logo/sandipblog.jpg",
      link:"https://enquiry.careerbanao.org/?utm_source=website&utm_medium=sandipblog&utm_campaign=latest%20updates"
    },
      
     {
      id: 3,
      date: "17",
      month: "March",
      author: "Admin",
      category: "Admissions",
      title: "Get Admission in B.Tech – Maharishi Markandeshwar University!",
      description: "Apply for B.Tech (All Branches) at Maharishi Markandeshwar University, Haryana. 100% Placement, NAAC A++, and 91-NIRF Rank. Highest package: 42 Lakh. Apply through Bihar Student Credit Card.",
      image: "./logo/maharishi.jpg",
      link:"https://enquiry.careerbanao.org/?utm_source=website&utm_medium=maharishi_blog&utm_campaign=latest%20updates"
    },

     {
      id: 4,
      date: "25",
      month: "August",
      author: "Admin",
      category: "Admissions",
      title: "B.Tech & MBA Admissions Now Open!",
      description: "Join Quantum University and kickstart your career with industry-focused B.Tech and MBA programs. Apply now for a brighter future!",
      image: "./logo/quantamblog.jpg",
      link:"https://enquiry.careerbanao.org/?utm_source=website&utm_medium=quantum_blog&utm_campaign=latest%20updates"
    }
  ];
  const handleClick = (url: string) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.opener = null;
    }
  };
  

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-10 font-poppins">
      <span className="text-md md:text-lg font-bold text-black flex items-center gap-1">
        <IonIcon icon={schoolOutline} /> Admission Updates
      </span>
      <h2 className="text-4xl sm:text-5xl md:text-7xl text-center chelsea-market-regular font-bold text-black md:mb-16 mb-10">
        Latest Updates
      </h2>

      <div className="px-0 md:px-[2rem] xl:px-[6rem] flex flex-col md:flex-row gap-10 w-full">
        {/* Left Column - Latest Blog */}
        <div className="lg:w-[40%] flex flex-col border rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-[350px]"><img className="w-full h-full object-contain" src={blogData[0].image} alt="Latest update" /></div>
          <div className="p-6">
            <div className="flex gap-4 text-sm text-gray-700 font-semibold">
              <span className="flex gap-1 items-center">
                <IonIcon icon={personOutline} /> {blogData[0].author}
              </span>
              <span className="flex gap-1 items-center">
                <IonIcon className="-rotate-90" icon={pricetagsOutline} /> {blogData[0].category}
              </span>
            </div>
            <h1 className="text-2xl font-semibold text-purple-700 chelsea-market-regular mt-2">
              {blogData[0].title}
            </h1>
            <p className="text-md text-gray-500 mt-2">{blogData[0].description}</p>
            <a onClick={() => handleClick(blogData[0].link)}>
            <button className="mt-2 px-4 py-2 bg-primaryBtn hover:bg-hoverBtn text-white text-sm rounded">
              Visit more
            </button>
            </a>
          </div>
        </div>

        {/* Right Column - Scrollable Blog List */}
        {/* Right Column - Scrollable Blog List */}
        <div 
  className="lg:w-[60%] w-full flex flex-col gap-6 overflow-y-auto" 
  style={{ maxHeight: "640px", scrollbarWidth: "none", paddingRight: "10px" }}
>
  {blogData.slice(1).map((blog) => (
    <div 
      key={blog.id} 
      className="flex lg:flex-row flex-col items-start gap-6 border rounded-lg shadow-lg bg-white p-4"
      style={{ minHeight: "auto" }} // Auto height adjust
    >
      {/* Image */}
      <div className="lg:w-[220px] flex justify-center items-center w-full h-[200px]">
        <img 
          className="w-full h-full object-contain rounded-md" 
          src={blog.image} 
          alt="Blog update" 
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-4 text-sm text-gray-700 font-semibold">
          <span className="flex gap-1 items-center">
            <IonIcon icon={personOutline} /> {blog.author}
          </span>
          <span className="flex gap-1 items-center">
            <IonIcon className="-rotate-90" icon={pricetagsOutline} /> {blog.category}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-purple-700 capitalize chelsea-market-regular mt-1">
          {blog.title}
        </h1>
        {/* Description (Show full content) */}
        <p className="text-sm text-gray-500 mt-1">{blog.description}</p>
        <a onClick={() => handleClick(blog.link)}>
        <button className="mt-2 px-4 py-2 bg-primaryBtn hover:bg-hoverBtn text-white text-sm rounded">
          Visit more
        </button>
        </a>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default Blogs;
