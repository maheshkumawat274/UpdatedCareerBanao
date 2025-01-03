import CollegeAbout from "src/components/main-website/admissions/landingpage/CollegeAbout"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"
import CourseFees from "src/components/main-website/admissions/landingpage/CourseFees"
import Updates from "src/components/main-website/admissions/landingpage/Updates"

const LandingPages = () => {
  return (
    <>
     <CollegeLandingPage/>
     <CollegeAbout/>
     <Updates/>
     <CourseFees/>
    </>
  )
}

export default LandingPages