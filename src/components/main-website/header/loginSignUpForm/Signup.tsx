import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "src/utils/services";

const registerDataInitalState = {
  email: "",
  password: "",
  name: "",
  phone: "",
  stream: "",
  level: ""
};

export default function Signup({ setShowLoginForm, setShowRegisterForm, closeModal }: any) {
  const [registerData, setRegisterData] = useState(registerDataInitalState);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const payload = {
      name: registerData.name,
      email: registerData.email,
      phone: registerData.phone,
      password: registerData.password,
      // stream: registerData.stream,
      // level: registerData.level
    };


    if (!isChecked) {
      setErrorMessage("Please accept the terms and conditions to proceed.");
      return;
    }

    const resp = await register(payload);
    if (resp) {
      setShowLoginForm(true);
      setShowRegisterForm(false);
      setRegisterData(registerDataInitalState);
    } else {
      setErrorMessage("Registration failed. Please try again.");
    }
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  }

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    setErrorMessage(""); // Clear error when checkbox is checked
  }

  function CloseModelHandler(){
    closeModal();
  }
  return (
    <form className="font-popins w-full" onSubmit={handleSubmit}>
      <div className="google-btn w-full h-full mt-7 flex justify-center">
        <h1 className="font-bold font-poppins text-2xl">Registration Form</h1>
      </div>
      <div className="user-form">
        <div className="form-middle lg:px-5">
          <div className="user-login-form mt-8 max-h-[300px] overflow-y-auto pr-2">
            <MyInput
              placeholder="Full Name"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              required
              pattern="^[a-zA-Z\s]*$"
              title="Please enter a valid name"
            />
            <MyInput
              placeholder="Your Email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              type="email"
              required
            />
            <MyInput
              placeholder="Password"
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              required
            />
            <MyInput
              placeholder="Mobile No"
              type="tel"
              name="phone"
              value={registerData.phone}
              onChange={(e) => {
                let phone = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
                if (phone.length <= 10) {
                  setRegisterData({
                    ...registerData,
                    phone: phone
                  });
                }
              }}
              required
              maxLength={10}
              pattern="^[0-9]{10}$"
              title="Please enter a valid number"
            />

            <div className="mb-4">
              <select
                id="stream"
                name="stream"
                value={registerData.stream}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-[#a7acb4] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {[
                  "-- Select Stream --",
                  "Engineering",
                  "Management",
                  "Commerce and Banking",
                  "Medical",
                  "Science",
                  "Hotel Management",
                  "Information Technology",
                  "Arts & Humanities",
                  "Agriculture",
                  "Law",
                  "Pharmacy",
                  "Education",
                  "Design",
                  "Media and Mass Communication",
                  "Retail",
                  "Vocational",
                  "Physical Education",
                  "Nursing",
                  "Dental",
                  "Performing Arts",
                  "Others"
                ].map((stream) => (
                  <option key={stream} value={stream}>
                    {stream}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <select
                id="level"
                name="level"
                value={registerData.level}
                onChange={handleChange}
                required
                className="mt-1 block text-[#a7acb4] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {[
                  "-- Select Level --",
                  "Undergraduate",
                  "Postgraduate",
                  "Diploma",
                  "Certificate",
                  "Doctorate"
                ].map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-footer mt-8 lg:px-5">
              <div className="mx-2 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mt-[3px]"
                />
                <label htmlFor="termsCheckbox" className="text-xs text-slate-600">
                  By submitting this form, you accept and agree to our{" "}
                  <Link to={"/terms-and-conditions"}onClick={CloseModelHandler}>
                    <span className="text-xs text-purple-700">terms and conditions</span>
                  </Link>
                </label>
              </div>
              {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
            </div>
          </div>
        </div>

        <div className="form-footer mt-8 lg:px-5">
          <div className="submit-btn w-full flex justify-center">
            <button
              type="submit"
              className="popUpDropBox w-3/4 h-10 lg:h-12 font-bold rounded-[5px] border-[#e3e3e3] border-[1px] shadow-md bg-[#fefefe] text-purple-700 hover:text-[#e67e22] transition-all duration-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

function MyInput({
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <div className="mb-4 relative">
      <input
        {...props}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border h-[2.5rem] rounded-[5px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-[45px]"
        type={type}
        placeholder={placeholder}
      />
      {props.name === "phone" && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+91</span>
      )}
    </div>
  );
}
