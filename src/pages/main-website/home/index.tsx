// home page for the website
import Section1 from "components/main-website/homePage/Section1";
import Section2 from "components/main-website/homePage/Section2";
import Section3 from "components/main-website/homePage/Section3";
import Section4 from "components/main-website/homePage/Section4";
import Section5 from "components/main-website/homePage/Section5";
import Section6 from "components/main-website/homePage/Section6";
import FinderContent from "src/components/main-website/collegefinder/FinderContent";
import Meeting from "src/components/main-website/homePage/Meeting";
import CollegeFound from "src/components/main-website/homePage/CollegeFound";
import HomeFaq from "src/components/main-website/homePage/HomeFaq";
import SliderYoutube from "src/components/main-website/homePage/SliderYoutube";
import UnivercitiesLogoSlider from "src/components/main-website/homePage/UnivercitiesLogoSlider";
import PrivacyForm from "src/components/main-website/privacypolicy/PrivacyForm";
import Section7 from "src/components/main-website/homePage/Section7";
import CollegeCards from "src/components/main-website/homePage/CollegeCards.";
function HomePage() {
  return (
    <div className="relative p-[20px] overflow-x-hidden">
      <Section1 />
      <Meeting/>
      <Section2 />
      <Section3 />
      <FinderContent/>
      <CollegeFound/>
      <Section4 />
      <div className="mt-5"><UnivercitiesLogoSlider/></div>
      <Section5 />
      <CollegeCards/>
      <div className="mt-3"><SliderYoutube/></div>
      <Section6 />
      
      <Section7/>
      <div className="mt-7">
      <PrivacyForm/>
      </div>
      <HomeFaq/>
    </div>
  );
}

export default HomePage;
