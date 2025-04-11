import { useEffect, useState } from "react";

export const KeyPointsSection: React.FC = () => {
  const [keyPoints, setKeyPoints] = useState<string[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    // 👉 Abhi ke liye static data use kar rahe hain:
    const staticData = {
      name: "WBJEE",
      keyPoints: [
        "Admission to engineering colleges in West Bengal",
        "Based on WBJEE rank",
        "Online counselling process",
        "Multiple rounds of seat allocation",
        "Special provisions for domicile candidates"
      ]
    };

    setName(staticData.name);
    setKeyPoints(staticData.keyPoints);

    // ✅ Future mein yeh fetch logic use kar sakte ho:
    /*
    fetch("/api/counseling/wbjee")
      .then(res => res.json())
      .then(data => {
        setName(data.name);
        setKeyPoints(data.keyPoints);
      })
      .catch(err => console.error("Failed to fetch counseling data", err));
    */
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Highlights</h2>
          <p className="text-lg text-gray-600">
            Important points to know about {name} counselling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <div
              key={`key-point-${index}`}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl font-semibold text-blue-600">{index + 1}</span>
              </div>
              <p className="text-gray-800 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

