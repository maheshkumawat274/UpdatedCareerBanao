import { useNavigate } from "react-router-dom";

export const Sec4Counseling = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to page and target specific section by ID
    navigate('/contactus#counselor');
  };
  return (
    <div className="p-4 border-b">
      <h3 className="text-xl sm:text-3xl font-semibold mb-2">Contact Us</h3>
      <p className="text-sm">Have questions? Reach out to us anytime!</p>
      <button onClick={handleClick} className="mt-2 bg-green-600 text-white px-4 py-2 rounded w-full">
        Contact Now
      </button>
    </div>
  );
};