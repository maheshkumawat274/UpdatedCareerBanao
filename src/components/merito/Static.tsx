import { useEffect } from "react";

const Static = () => {
  useEffect(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script); // Cleanup on unmount
      };
    }, []);
  return (
    <div className="npf_wgts" data-height="400px" data-w="b214bb41b7025009877617366f69b11c"></div>
  )
}

export default Static