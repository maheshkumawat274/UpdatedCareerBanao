
import { HeroSectionCounseling } from "src/components/main-website/counseling/counselinglandingpage/CounselingHero";
import CounselingLandingPageMain from ".";
import SidebarCounseling from "./SidebarCounseling";

type CounselingLayoutProps = {
  data: any; // You can replace `any` with a more specific type later
};
const CounselingLayoutpage: React.FC<CounselingLayoutProps> = ({data}) => {
  
  return (
    <>
      <div>
        <HeroSectionCounseling data = {data.sections.hero}/>
        <div className="flex flex-col md:flex-row">
          {/* Main Content */}
          <div
            className="w-full md:w-4/5 h-auto sm:h-screen md:h-auto overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
            }}
          >
            <CounselingLandingPageMain data = {data.sections}/>
          </div>
          {/* Sidebar */}
          <div
            className="hidden md:block w-full md:w-2/5 h-auto"
            style={{
              position: "sticky",
              top: "10vh", // Sidebar top se fix rahega jab tak scroll na ho.
              height: "90vh", // Full height tak fix.
              overflowY: "auto",
            }}
          >
            <SidebarCounseling />
          </div>
        </div>
      </div>
    </>
  );
};

export default CounselingLayoutpage;
