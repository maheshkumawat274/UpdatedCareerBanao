// import ApplicationApplyPage from "pages/main-website/applicationapply";
// import ProtectedRoutes from "pages/main-website/protected";
// import Counselling from "pages/main-website/protected/counselling";

import CounselingLandingPageMain from "src/pages/counselinglandingpage.tsx";
import CounsellingPage from "src/pages/main-website/counselling";

const protectedRoutes = [
  // {
  //   path:"/counselling/:category",
  //   protected:ProtectedRoutes,
  //   element:Counselling
  // },
  // {
  //   path:"/counselling/:category/apply/:college",
  //   protected:ProtectedRoutes,
  //   element:ApplicationApplyPage
  // },
  {
    path:"/counselling/engineering",
    element: CounsellingPage
  },
  {
    path:"/counselling/management",
    element: CounselingLandingPageMain
  },
]

export default protectedRoutes;