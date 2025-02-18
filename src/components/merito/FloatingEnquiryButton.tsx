import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FloatingEnquiryButton = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://in6cdn.npfs.co/js/widget/npfwpopup.js";
    script.async = true;
    document.body.appendChild(script);

    const initScript = document.createElement("script");
    initScript.innerHTML = `
      let npfWb214bb41b7025009877617366f69b11c = new NpfWidgetsInit({
        widgetId: 'b214bb41b7025009877617366f69b11c',
        baseurl: 'widgets.in6.nopaperforms.com',
        formTitle: 'Enquiry Form',
        titleColor: '#FF0033',
        backgroundColor: '#ddd',
        iframeHeight: '500px',
        buttonbgColor: '#4c79dc',
        buttonTextColor: '#FFF'
      });
    `;
    document.body.appendChild(initScript);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const Contacthandle = () =>{
    navigate('/contact')
  }

  return (
    <div className="fixed top-[30vh] z-20 right-0 transform -translate-y-1/2 bg-purple-700 text-white font-bold px-4 py-2 rounded-l-lg shadow-lg hover:bg-pink-500 transition-all rotate-[-90deg] origin-bottom-right flex items-center gap-2">
      <button onClick={Contacthandle} type="button" className="npfWidgetButton npfWidget-b214bb41b7025009877617366f69b11c">
        Enquire Now!
      </button>
    </div>
  );
};

export default FloatingEnquiryButton;
