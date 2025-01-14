import Contact from "components/main-website/contact";
import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
       <div className="w-full h-full flex justify-center items-center">
        <Contact/>
        <Link to='/uni'><button className="bg-slate-500">sidebar</button></Link>
       </div>
    )
};

export default ContactPage;
