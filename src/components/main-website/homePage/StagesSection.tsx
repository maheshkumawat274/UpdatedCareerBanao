const stages = [
  {
    id: 1,
    title: "Connect With Our Expert",
    description: "Discuss your preferences with an experienced counselor.",
    img: "./logo/pexels-karolina-grabowska-7195310.jpg",
  },
  {
    id: 2,
    title: "Have a Question? Reach Out to Us",
    description: "Resolve all your doubts and get personalized guidance.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/050/425/886/small/portrait-of-a-girl-thinking-photo.jpg",
  },
  {
    id: 3,
    title: "Get Your Dream College",
    description: "Find the perfect college matching your qualifications.",
    img: "https://eshsstormalert.com/wp-content/uploads/2022/12/graduate-dilemmas-how-to-change-your-college-mindset-and-become-a-professional-900x600.jpg",
  },
];

export default function StagesSection() {
  return (
    /* Container for 3 cards */
    <div className="pt-8">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold"><span className="font-poppins text-gray-700">CareerBanao can assist you in 3 stages</span></h1>
      <div className="relative flex flex-wrap justify-center items-center gap-14 py-10 ">
        
      {stages.map((item, i) => (
        /* Individual card */
        
        <div
          key={i}
          className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-primaryBtn text-gray-50 p-5 rounded-lg"
        >
          <div className="absolute top-2 left-2 bg-white text-primaryBtn text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg z-10">
              {item.id}
            </div>
          <div>
            {/* Card image */}
            <div className="group-hover:scale-110 w-full h-60 duration-500 rounded-t-lg">
              <img src={item.img} className="h-full rounded-t-lg" />
            </div>
            {/* Card content */}
            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-pink-500"></div>
              <span className="text-xl font-bold">{item.title}</span>
              <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
