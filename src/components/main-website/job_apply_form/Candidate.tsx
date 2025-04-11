import "./apply.css";
import { useState } from "react";
import axios from "axios";
import BaseUrl, { FileUploadUrl } from "utils/baseurl";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import FormInput from "src/components/ui/FormItems/FormInput";
import { Form as MyForm } from "antd";

const Candidate = () => {

  return (
    <div className="px-4 sm:px-8 pt-6">
      <h1 className="font-semibold text-center text-3xl font-poppins">Basic Details</h1>
      <Form />
    </div>
  );
};

export default Candidate;

const EducationOptions = [
  {
    value: "Select Education",
    label: "Select Education",
    disabled: true,
  },
  {
    value: "10th",
    label: "10th",
  },
  {
    value: "12th",
    label: "12th",
  },
  {
    value: "Bachelor's Degree",
    label: "Bachelor's Degree",
  },
  {
    value: "Master's Degree",
    label: "Master's Degree",
  },
  {
    value: "PhD",
    label: "PhD",
  },
];

const ExperienceOptions = Array.from({ length: 10 }, (_, i) => ({
  value: i + 1 + " Year",
  label: i + 1 + " Year",
}));

const Form = () => {
  const jobId = useParams().job_id
  const [form] = MyForm.useForm();

  const [file, setFile] = useState<any | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // async function fileUpload() {
  //   const fileData = new FormData();
  //   fileData.append("file", (file as any));

  //   if (file == null) {
  //     toast.error("please upload resume first")
  //     setFile(null)
  //     setIsSubmitted(false)
  //   } else {
  //     try {
  //       const response = await axios.post(FileUploadUrl, fileData);
  //       return response.data.url;
  //     } catch (error) {
  //       toast.error("please upload resume in only pdf format")
  //       console.log(error);
  //       return null;
  //     }
  //   }
  // }
  async function fileUpload() {
    if (file == null) {
      toast.error("Please upload a resume first.");
      setIsSubmitted(false);
      return null;
    }
  
    // Check the file type
    if (file.type !== "application/pdf") {
      toast.error("Please upload a valid PDF file.");
      setFile(null);
      setIsSubmitted(false);
      return null;
    }
  
    const fileData = new FormData();
    fileData.append("file", file);
  
    try {
      const response = await axios.post(FileUploadUrl, fileData);
      return response.data.url;
    } catch (error) {
      toast.error("An error occurred while uploading. Please try again.");
      console.error(error);
      return null;
    }
  }
  
  const handleSubmit = async () => {
    setIsSubmitted(true)
    const fileUploadUrl = await fileUpload();

    if (fileUploadUrl !== undefined) {
    const values = await form.validateFields();

    const payload = {
      first_name: values.Fname,
      last_name: values.Lname,
      email: values.Email,
      phone: values.PhoneNo,
      education: values.Education,
      experience: values.Experience,
      address: values.Address,
      // resume: fileUploadUrl,
      job_id: jobId
    };  
    try {
      const response = await axios.post(
        `${BaseUrl}/postJobApplication`,
        JSON.stringify(payload)
      );
      if (response.status == 200) {
        toast.success("Applied Successfully");
        form.resetFields();
        setFile(null)
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Please Check your Network Connection");
    } finally {
      setIsSubmitted(false)
    }
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setFile(null)
  };

  return (
    <div className="mt-8 px-4 sm:px-14">
      <MyForm onFinish={handleSubmit} form={form} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <label htmlFor="firstName">First Name <span className="text-red-500 text-sm ml-1">*</span></label>
            <FormInput

              name="Fname"

              showName="First Name"
              required={true}
              type="text"
              pattern={/^[a-zA-Z\s]*$/}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name <span className="text-red-500 text-sm ml-1">*</span></label>
            <FormInput

              name="Lname"

              showName="Last Name"
              required={true}
              type="text"
              pattern={/^[a-zA-Z\s]*$/}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="email">Email <span className="text-red-500 text-sm ml-1">*</span></label>
            <FormInput
              name="Email"
              required={true}
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number <span className="text-red-500 text-sm ml-1">*</span></label>
            <FormInput

              name="PhoneNo"

              required={true}
              type="text"
              pattern={/^[0-9]{10}$/}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="education">Education <span className="text-red-500 text-sm ml-1">*</span></label>
            <FormInput
              name="Education"
              select={true}
              required={true}
              options={EducationOptions}
            />
          </div>
          <div>
            <label htmlFor="Experience">Years of Experience <span className="text-red-500 text-sm ml-1">*</span></label>
            <FormInput
              name="Experience"
              select={true}
              required={true}
              options={ExperienceOptions}
            />
          </div>
          <div>
            <label htmlFor="resume">Upload Resume <span className="text-red-500 text-sm ml-1">*</span></label><br/>
            <div className="mt-4">
            <input
              style={{ display: "none" }}
              type="file"
              id="resume"
              accept=".pdf"
              onChange={(e: any) => setFile(e.target.files[0] || null)}
              className="border hidden border-gray-300 rounded-md px-3 py-2 mt-1"
            />
            <label htmlFor="resume" className="p-3 ml-2 border border-gray-300 cursor-pointer">
              <span className="border border-gray-800 p-1 mr-2">Choose File</span>
              {file ? file.name : "No File Chosen"}
            </label>
            </div>
          </div>
          <div>
            <label htmlFor="address">Address <span className="text-red-500 text-sm ml-1">*</span></label>

            <FormInput name="Address" required={true} type="text" pattern={/^[0-9A-Za-z\s,'-]+$/} textArea={true} />

          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitted}
              className={`bg-primaryBtn hover:bg-hoverBtn text-white px-4 py-2 rounded-md mr-2 ${isSubmitted ? "bg-gray-500 cursor-not-allowed" : ""}`}

            >
              {isSubmitted ? "Please Wait" : "Submit"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </MyForm>
    </div>
  );
};
