
import FinderCard from "./FinderCard"
import ReviewCard from "./ReviewCard"
import SearchCollege from "./SearchCollege"
import TopUni from "./TopUni"
import Videos from "./Videos"

const Sidebar = () => {
  return (
    <>
     <div className="bg-white  rounded-md ">
     <div className="font-poppins p-4 h-full z-50 "
          style={{
            scrollbarWidth: "none"
          }}>
       <h1 className="text-3xl font-semibold text-gray-800 text-center pt-5">Are You Interested in this College?</h1>
       <div className="mt-4 text-center">
        <button className="px-4 py-2 border-2 border-primaryBtn hover:bg-primaryBtn hover:text-white text-1xl rounded-lg w-[300px]">Apply Now</button>
        <button className="px-4 py-2 border-2 border-hoverBtn hover:bg-hoverBtn hover:text-white text-1xl rounded-lg w-[300px] mt-2">Download Brochure</button>
       </div>
       <div className="mt-4"><FinderCard/></div>
       <div className="mt-4"><ReviewCard/></div>
       <div className="mt-4"><SearchCollege/></div>
       <div><TopUni/></div>
       <div><Videos/></div>
    </div>
     </div>
    
    </>
  )
}

export default Sidebar