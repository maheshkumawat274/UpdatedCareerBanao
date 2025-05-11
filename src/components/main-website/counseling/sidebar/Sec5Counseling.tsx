import axios from "axios";
import { useEffect, useState } from "react";
type VideosType = {
 url : string
}
const Sec5Counseling: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [VideosData, setVideosData] = useState<VideosType[]>([]);
  useEffect(() => {
      axios.get('http://localhost:3000/sidebar/videos')
        .then((res) => {
          setVideosData(res.data); // Assuming it's an array
        })
        .catch((err) => {
          console.error('Error fetching Videos data:', err);
        });
    }, []);
  
    if (!VideosData.length) return <p className="p-4">Loading...</p>;
  
  const visibleVideos = showAll ? VideosData : VideosData.slice(0, 3);

  return (
    <div className="bg-gray-100 p-6 mt-2 rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800">Youtube Videos</h1>
      <div className="grid gap-5 mt-3">
        {visibleVideos.map((video, index) => (
          <div key={index} className="h-[30vh]">
            <iframe
              src={video.url}
              title={`${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
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
export default Sec5Counseling