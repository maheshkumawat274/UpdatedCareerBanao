
import { useSelector } from 'react-redux';
// import { setShowPopUp } from 'src/redux/loginSignupSlice';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { menuConfig } from 'src/utils/constants';
import HeaderMain from "./HeaderMain";
import HomePopUp from '../homePage/HomePopUp';

function Header() {
  // const isLoginSignUpPopUp = useSelector((state:any)=> state.loginSignUpPopUp);
  // const dispatch = useDispatch();
  const [showHomePopup,setShowHomePopup] = useState(false)
  const location = useLocation()
  // const closeModal = () => {
  //   dispatch(setShowPopUp());
  // };
  const homepopup:ApplicationConfigType[] = useSelector((state: any) => state.navList.data);

  useEffect(()=>{
    if(location.pathname.split("/")[1] == "" && homepopup?.findIndex((item)=>item.status == "0" && item.module_name == menuConfig.homePopup) != -1){
     setShowHomePopup(true)
    }
  },[])
  return ( 
    <div>
      <ToastContainer pauseOnHover={false}/>
      {showHomePopup && <HomePopUp/>}
      {/* <NavBar/> */}
       <HeaderMain/>
    </div>
  )
}

export default Header
