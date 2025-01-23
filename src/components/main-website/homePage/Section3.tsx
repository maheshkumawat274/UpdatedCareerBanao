import { FaShieldAlt, FaHeadset, FaLaptop, FaUserTie } from "react-icons/fa"; // Import React Icons
import MyRow from "ui/MyRow";

const Section3 = () => {
  return (
    <MyRow
      justify="center"
      className=" py-12 px-6"
      align="middle"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
            <h5 className="text-lg font-semibold text-center text-gray-800">
              {item.text}
            </h5>
          </div>
        ))}
      </div>
    </MyRow>
  );
};

export default Section3;

const items = [
  {
    text: "Safe and Secure",
    icon: <FaShieldAlt />, // React Icon for shield
  },
  {
    text: "24X7 Counselling Support",
    icon: <FaHeadset />, // React Icon for headset
  },
  {
    text: "Conducted 1 Lakh+ Sessions",
    icon: <FaLaptop />, // React Icon for laptop
  },
  {
    text: "Expert Guidance at Every Step",
    icon: <FaUserTie />, // React Icon for guidance
  },
];
