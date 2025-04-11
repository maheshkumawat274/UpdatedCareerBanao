
import { useState, useEffect } from "react";
import default_img from "../../../assets/defaultCardLogo.jpeg";
import { Link } from "react-router-dom";
import { Checkbox, Form } from "antd";
import { toast } from "react-toastify";
import axios from "axios";
import BaseUrl from "utils/baseurl";
import MyForm from "src/components/ui/MyForm";
import FormInput from "src/components/ui/FormItems/FormInput";

const customStyle = {
    boxShadow: "rgb(52 51 51) 3px 6px 17px 1px",
};
const personIconPath = "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z";
const phoneIconPath = "M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z";
const options = [
    { value: "-- Select Stream --", label: "-- Select Stream --" },
    { value: "Engineering", label: "Engineering" },
    { value: "Management", label: "Management" },
    { value: "Commerce and Banking", label: "Commerce and Banking" },
    { value: "Medical", label: "Medical" },
    { value: "Science", label: "Science" },
    { value: "Hotel Management", label: "Hotel Management" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Arts & Humanities", label: "Arts & Humanities" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Law", label: "Law" },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Education", label: "Education" },
    { value: "Design", label: "Design" },
    { value: "Media and Mass Combination", label: "Media and Mass Combination" },
    { value: "Retail", label: "Retail" },
    { value: "Vocational", label: "Vocational" },
    { value: "Physical Education", label: "Physical Education" },
    { value: "Paramedical", label: "Paramedical" },
    { value: "Nursing", label: "Nursing" },
    { value: "Dental", label: "Dental" },
    { value: "Performing Arts", label: "Performing Arts" },
    { value: "Others", label: "Others" },
];

const levelOptions = [
    { value: "Undergraduate", label: "Undergraduate" },
    { value: "Postgraduate", label: "Postgraduate" },
    { value: "Diploma", label: "Diploma" },
    { value: "Certificate", label: "Certificate" },
    { value: "Doctorate", label: "Doctorate" },
];
const statesOptions = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Delhi", label: "Delhi" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
];

function HomePopUp() {
    const [form] = Form.useForm();

    const [isShowPopup, setIsShowPopup] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    async function validateHandler() {
        const values = await form.validateFields();
        for (const key in values) {
            if (values.hasOwnProperty(key) && values[key] === "") {
                return;
            }
        }
        setIsCheck(!isCheck);
    }

    async function submitHandler(e:any) {
        e.preventDefault();
        const values = await form.getFieldsValue();
        const payload = {
            name: values.Name,
            email: values.Email,
            phone: values.Phone,
            // address: values.address,
            // state: values.state,
            // course_query: values.interest,
            // level: values.level,
            category: "Home-popup",

        };
        try {
            const response = await axios.post(`${BaseUrl}userQueryAPI`, JSON.stringify(payload));
            if (response.status === 200) {
                setIsShowPopup(false);
                toast.success("Register Successfully");
                form.resetFields();
            } else {
                toast.error("Registration Failed");
            }
        } catch (error) {
            toast.error("Please check your Network");
        }
    }

    function handleScroll() {
        if (window.scrollY > 800 && location.pathname.split("/")[1] === "") {
            setIsShowPopup(true);
            window.removeEventListener("scroll", handleScroll);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (isShowPopup) {
        return (
            <div className="pop-container transition-all fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000] bg-black bg-opacity-50 p-5 overflow-y-auto">
            <div
                style={customStyle}
                className="main-popup w-full lg:w-4/6 bg-[#f7f7f7] p-2 pb-5 rounded-lg max-h-[90vh] overflow-y-auto"
            >
                <div className="popup-content flex flex-col-reverse lg:flex-row">
                    {/* Left Content Section */}
                    <div className="popup-left-content bg-[#983fd4] p-5 justify-center items-center rounded-l-lg hidden md:flex">

                      <div className="why-register font-poppins mt-4 p-4 rounded-lg text-sm text-white">
                        <h1 className="font-semibold text-white text-2xl mb-2">Why register with us?</h1>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>25000+ Students Counseled, Absolutely Free of Cost</li>
                            <li>Get help from our experts in finding the right college for you</li>
                            <li>With a totally online admission process, we help you get college admission without having to step out</li>
                            <li>You won’t get unwanted calls from third parties</li>
                        </ul>
                      </div>
                    </div>
        
                    {/* Right Section */}
                    <div className="popup-right w-full lg:w-2/3 p-2 sm:p-5">
                        <div className="popup-header max-h-[60px] lg:max-h-full mt-5 flex sm:gap-2">
                            <div className="pop-header-left w-[15%] lg:w-[20%] flex justify-center items-center">
                                <div className="w-[70px] h-[50px] lg:w-[100px] flex items-center lg:h-[100px] rounded-full">
                                    <img src={default_img} alt="logo" className="rounded-full" />
                                </div>
                            </div>
                            <div className="pop-header-center w-[75%] flex flex-col justify-center items-center lg:items-start">
                                <h1 className="text-purple-700 text-lg lg:text-2xl font-semibold">
                                    Register Now To Apply
                                </h1>
                                <h1 className="text-primaryNavText text-base lg:text-1xl">
                                    Get details and latest updates
                                </h1>
                            </div>
                            <div className="pop-header-right">
                                <span
                                    className="text-3xl sm:text-4xl cursor-pointer text-purple-500 hover:text-hoverBtn"
                                    onClick={() => {
                                        setIsShowPopup(false);
                                    }}
                                >
                                    x
                                </span>
                            </div>
                        </div>
                        <div className="px-0 sm:px-5">
                            <MyForm form={form}>
                                <div className="popup-form-inputs mt-8 flex flex-col lg:flex-row lg:gap-5">
                                    <div className="popup-form-left w-full lg:w-2/4">
                                        <MyInput
                                            name="Name"
                                            label={"Full Name"}
                                            pattern={/^[a-zA-Z\s]*$/}
                                            prefix={<Icon path={personIconPath} />}
                                        />
                                        <MyInput
                                            name="Phone"
                                            type="tel"
                                            max={10}
                                            pattern={/^[0-9]{10}$/}
                                            label={"Mobile Number"}
                                            prefix={<Icon path={phoneIconPath} />}
                                        />
                                        <MyInput
                                            name="interest"
                                            label={"Course interested in"}
                                            select={true}
                                            options={options}
                                        />
                                    </div>
                                    <div className="popup-form-right w-full lg:w-2/4">
                                        <MyInput
                                            name="Email"
                                            type="email"
                                            label={"Email Address"}
                                            prefix={<Icon path={""} />}
                                        />
                                        {/* <MyInput
                                            name="address"
                                            type="text"
                                            label={"Address"}
                                            prefix={<Icon path={""} />}
                                            pattern={/^[0-9A-Za-z\s,'-]+$/}
                                        /> */}

                                        <MyInput
                                            name="state"
                                            label="State"
                                            select={true}
                                            options={statesOptions}
                                        />
                                        <MyInput
                                             name="level"
                                             label="Select Level"
                                             select={true}
                                             options={levelOptions}
                                         />
                                    </div>
                                </div>
                            </MyForm>
                            <div className="form-footer flex flex-col lg:flex-row">
                                <div className="form-footer-left w-full lg:w-3/4">
                                    <p className="text-primaryNavText text-xs">
                                        <Checkbox
                                            onChange={validateHandler}
                                            checked={isCheck}
                                        />{" "}
                                        By submitting this form, you accept <br/> and agree to
                                        our{" "}
                                        <Link
                                            to={"/terms-and-conditions"}
                                            className="text-blue-600"
                                            onClick={() => {
                                                setIsShowPopup(false);
                                            }}
                                        >
                                            Terms of Use.
                                        </Link>
                                    </p>
                                </div><br/>
                                <div className="form-footer-right w-full lg:w-1/4 flex items-end">
                                    <button
                                        type="submit"
                                        onClick={submitHandler}
                                        disabled={!isCheck}
                                        className={`w-full lg:w-[80] lg:h-[80%] text-white p-1 rounded-md ${
                                            isCheck
                                                ? "bg-[#e46ab3] hover:bg-[#e258ab] cursor-pointer"
                                                : "bg-[#983fd4] cursor-not-allowed"
                                        }`}
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }

    return null;
}

export default HomePopUp;

function MyInput({ label, type = "text", ...props }:any) {
    return (
        <div>
            <label htmlFor={label} className="block lg:mb-2 text-sm font-medium text-gray-900">{label}<span className="text-red-500 text-sm ml-1">*</span></label>
            <div className="relative mb-2 lg:mb-6">
                <FormInput
                    name={props.name}
                    max={props.max}
                    required={true}
                    type={type}
                    pattern={props.pattern}
                    className=" border border-gray-200 text-gray-900 text-md rounded-lg focus-visible:outline-none focus:ring-purple-700 focus:border-purple-700 w-full flex p-2.5"
                    prefix={props.prefix}
                    select={props.select}
                    options={props.options}
                />
            </div>
        </div>
    );
}

function Icon({ path }:any) {
    return (
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            {path ?
                <path d={path} />
                :
                <>
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </>
            }
        </svg>
    );
}
