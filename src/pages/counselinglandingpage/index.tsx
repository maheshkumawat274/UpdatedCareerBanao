
import React from "react"
import AboutCounseling from "src/components/main-website/counseling/counselinglandingpage/AboutCounseling"
import ContactCounseling from "src/components/main-website/counseling/formpop/ContactCounseling"
import ImportantDatesSection from "src/components/main-website/counseling/counselinglandingpage/DatesCounseling"
import DocumentCounseling from "src/components/main-website/counseling/counselinglandingpage/DocumentCouseling"
import { EligibilitySection } from "src/components/main-website/counseling/counselinglandingpage/EligibilityCounseling"
import FAQCounseling from "src/components/main-website/counseling/counselinglandingpage/FAQCounseling"
import { KeyPointsSection } from "src/components/main-website/counseling/counselinglandingpage/KeypointsCounseling"
import ProcessSection from "src/components/main-website/counseling/counselinglandingpage/ProcessCounseling"

type counselingalldata = {
  data: any
}

const CounselingLandingPageMain: React.FC<counselingalldata> = ({data}) => {
  
  return (
    <>
     
     <AboutCounseling data={data.about}/>
     <KeyPointsSection data = {data.keypoints}/>
     <ProcessSection data = {data.process}/>
     <EligibilitySection data = {data.eligibility}/>
     <ImportantDatesSection data = {data.dates}/>
     <DocumentCounseling data = {data.documents}/>
     <ContactCounseling/>
     <FAQCounseling data = {data.faqs}/>
     
    </>
  )
}

export default CounselingLandingPageMain