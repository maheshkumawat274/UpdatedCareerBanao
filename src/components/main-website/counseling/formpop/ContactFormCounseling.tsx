import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  mobile: number;
  email: string;
  state: string;
  district: string;
  rank: string;
  interest: string;
};

const ContactFormCounseling: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <>
      {isOpen && (
        
          <div className="bg-[#dfdfde] rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button onClick={onClose} className="text-gray-600 hover:text-red-600 text-lg font-bold">
                ✖
              </button>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Counseling Form</h1>
              <p className="text-gray-600">Fill in your details and select your interest to proceed with the counseling process.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                {/* Name */}
                <input
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only alphabets allowed",
                    },
                  })}
                  type="text"
                  inputMode="text"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
                  }}
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Enter your name"
                />
                
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium">Mobile Number</label>
                <div className="flex items-center mt-1">
                  <span className="px-3 py-2 bg-gray-200 rounded-l-md border border-r-0">+91</span>
                  <input
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter valid 10-digit mobile number",
                    },
                  })}
                  type="tel"
                  inputMode="numeric"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                  }}
                  className="w-full p-2 border rounded-r-md"
                  placeholder="1234567890"
                />
                </div>
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium">Email ID</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter valid email address",
                    },
                  })}
                  type="email"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="example@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* State & District */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium">State</label>
                  <input
                    {...register("state", {
                      required: "State is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Only alphabets allowed",
                      },
                    })}
                    type="text"
                    inputMode="text"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
                    }}
                    className="w-full mt-1 p-2 border rounded-md"
                    placeholder="Enter your state"
                  />
                  {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium">District</label>
                  <input
                    {...register("district", {
                      required: "District is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Only alphabets allowed",
                      },
                    })}
                    type="text"
                    inputMode="text"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
                    }}
                    className="w-full mt-1 p-2 border rounded-md"
                    placeholder="Enter your district"
                  />
                  {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
                </div>
              </div>

              {/* Rank & Interest */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium">Your Jee Rank</label>
                  <input
                    {...register("rank", { required: "Rank is required" })}
                    type="text"
                    className="w-full mt-1 p-2 border rounded-md"
                    placeholder="Enter your rank"
                  />
                  {errors.rank && <p className="text-red-500 text-sm">{errors.rank.message}</p>}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium">Counselings</label>
                  <select
                    {...register("interest", { required: "Interest is required" })}
                    className="w-full mt-1 p-2 border rounded-md"
                  >
                    <option value="">Select Counseling</option>
                    <option>JoSSA</option>
                    <option>CSAB</option>
                    <option>UPTAC</option>
                    <option>WBJEE</option>
                    <option>COMEDK</option>
                    <option>JAC DELHI</option>
                    <option>MHT CET</option>
                    <option>JAC Chandigarh</option>
                    <option>PTU</option>
                    <option>MPDTE</option>
                    <option>UGEAC</option>
                    <option>HBTU</option>
                    <option>MMUT</option>
                    <option>REAP</option>
                    <option>OTHER STATE</option>
                  </select>
                  {errors.interest && <p className="text-red-500 text-sm">{errors.interest.message}</p>}
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>
      )}</>
  );
};

export default ContactFormCounseling;
