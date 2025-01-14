import Sidebar from "src/components/main-website/admissions/landingpage/Sidebar"
import LandingPages from "./LandingPages"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"

const UniversityLayout = () => {
  return (
    <>
      <div>
        <CollegeLandingPage/>
        <div className="flex flex-col md:flex-row h-screen">
         {/* Sidebar */}
         <div className="w-full md:w-1/4 h-1/4 md:h-full">
          <Sidebar />
         </div>
         {/* Main Content */}
         <div className="w-full md:w-3/4 h-3/4 md:h-full overflow-y-auto">
          <LandingPages/>
         </div>
       </div>
      </div>
    </>
  )
}

export default UniversityLayout