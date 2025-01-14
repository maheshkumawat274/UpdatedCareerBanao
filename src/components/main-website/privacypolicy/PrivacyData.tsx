import React from "react";

interface TableRow {
  name: string;
  email: string;
  contactNumber: string;
  workingDays: string;
  workingHours: string;
}

const data: TableRow = {
  name: "Mr. Karan Prasad",
  email: "compliance@careerbanao.org",
  contactNumber: "8750092628",
  workingDays: "Monday to Friday",
  workingHours: "10:30 am to 6:30 pm",
};

const PrivacyData: React.FC = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <tbody>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 font-medium border">Name</td>
              <td className="px-4 py-2 border">{data.name}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium border">E-mail</td>
              <td className="px-4 py-2 border">{data.email}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 font-medium border">Contact Number</td>
              <td className="px-4 py-2 border">{data.contactNumber}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium border">Working Days</td>
              <td className="px-4 py-2 border">{data.workingDays}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 font-medium border">Working Hours</td>
              <td className="px-4 py-2 border">{data.workingHours}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrivacyData;
