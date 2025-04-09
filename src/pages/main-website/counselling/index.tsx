
import ContactusCounseling from 'src/components/main-website/counseling/maincounselingpage/ContactusCounseling'
import CounselingCards from 'src/components/main-website/counseling/maincounselingpage/CounselingCards'
import CounselingHome from 'src/components/main-website/counseling/maincounselingpage/CounselingHome'
import InfoSection from 'src/components/main-website/counseling/maincounselingpage/CounselingWhy'

const CounsellingPage = () => {
  return (
    <>
     <div className='px-4 font-poppins'>
     <CounselingHome/>
     <CounselingCards/>
     <InfoSection/>
     <ContactusCounseling/>
     </div>
    </>
  )
}

export default CounsellingPage