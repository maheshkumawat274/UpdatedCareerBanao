
import AboutCounseling from "src/components/main-website/counseling/counselinglandingpage/AboutCounseling"
import ContactCounseling from "src/components/main-website/counseling/counselinglandingpage/ContactCounseling"
import ImportantDatesSection from "src/components/main-website/counseling/counselinglandingpage/DatesCounseling"
import DocumentCounseling from "src/components/main-website/counseling/counselinglandingpage/DocumentCouseling"
import { EligibilitySection } from "src/components/main-website/counseling/counselinglandingpage/EligibilityCounseling"
import FAQCounseling from "src/components/main-website/counseling/counselinglandingpage/FAQCounseling"
import { KeyPointsSection } from "src/components/main-website/counseling/counselinglandingpage/KeypointsCounseling"
import ProcessSection from "src/components/main-website/counseling/counselinglandingpage/ProcessCounseling"

const CounselingLandingPageMain = () => {
  return (
    <>
     
     <AboutCounseling/>
     <KeyPointsSection/>
     <ProcessSection/>
     <EligibilitySection/>
     <ImportantDatesSection/>
     <DocumentCounseling/>
     <ContactCounseling/>
     <FAQCounseling/>
     
    </>
  )
}

export default CounselingLandingPageMain