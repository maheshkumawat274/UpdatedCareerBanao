import { Sec1Counseling } from "src/components/main-website/counseling/sidebar/Sec1Counseling"
import { Sec2Counseling } from "src/components/main-website/counseling/sidebar/Sec2Counseling"
import Sec3Counseling from "src/components/main-website/counseling/sidebar/Sec3Counseling"
import { Sec4Counseling } from "src/components/main-website/counseling/sidebar/Sec4Counseling"
import Sec5Counseling from "src/components/main-website/counseling/sidebar/Sec5Counseling"

const SidebarCounseling = () => {
  return (
    <>
     <div className="bg-white  rounded-md ">
     <div className="font-poppins p-4 h-full z-50 "
          style={{
            scrollbarWidth: "none"
          }}>
       {/* <h1 className="text-3xl font-semibold text-gray-800 text-center pt-5">Are You Interested in this College?</h1>
       <div className="mt-4 text-center">
        <button className="px-4 py-2 border-2 border-primaryBtn hover:bg-primaryBtn hover:text-white text-1xl rounded-lg w-[300px]">Apply Now</button>
        <button className="px-4 py-2 border-2 border-hoverBtn hover:bg-hoverBtn hover:text-white text-1xl rounded-lg w-[300px] mt-2">Download Brochure</button>
       </div> */}
       <div className="mt-4"><Sec1Counseling/></div>
       <div className="mt-4"><Sec2Counseling/></div>
       <div className="mt-4"><Sec3Counseling/></div>
       
       <div><Sec5Counseling/></div>
       <div><Sec4Counseling/></div>
    </div>
     </div>
    
    </>
  )
}

export default SidebarCounseling