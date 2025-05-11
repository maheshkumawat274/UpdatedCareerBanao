import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type CounselingType = {
  name: string;
  location: string;
  imgSrc: string;
  route: string;
}

const Sec3Counseling = () => {
  const [counselingData, setCounselingData] = useState<CounselingType[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/sidebar/universities')
      .then((res) => {
        setCounselingData(res.data); // Assuming it's an array
      })
      .catch((err) => {
        console.error('Error fetching counseling data:', err);
      });
  }, []);

  if (!counselingData.length) return <p className="p-4">Loading...</p>;

  const visibleUni = showAll ? counselingData : counselingData.slice(0, 3);

  return (
    <div className="mt-4">
      <h1 className="text-gray-800 font-semibold text-xl lg:text-3xl">
      Low JEE Score? These Universities Have You Covered
      </h1>
      <hr className="mt-2" />

      {visibleUni.map((university, index) => (
        <div key={index}>
          <div className="p-3 rounded-lg flex flex-row items-center justify-between relative overflow-hidden mb-2">
            <div className="text-white mb-6 md:mb-0 md:text-left">
              <h1 className="text-sm sm:text-lg text-gray-800 font-bold mb-1">{university.name}</h1>
              <p className="text-sm text-gray-700 mb-2">{university.location}</p>
              <Link
                to={university.route}
                className="bg-white text-primaryBtn border-2 border-primaryBtn px-4 py-1 rounded shadow hover:bg-primaryBtn hover:text-white"
              >
                Visit Now
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 relative">
              <img
                src={university.imgSrc}
                alt={university.name}
                className="w-30 h-20 object-cover rounded-lg"
              />
            </div>
          </div>
          <hr />
        </div>
      ))}

      <div className="text-center mt-4">
        <button
          className="bg-white text-primaryBtn border-2 border-primaryBtn px-4 py-1 rounded shadow hover:bg-primaryBtn hover:text-white"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Sec3Counseling;
