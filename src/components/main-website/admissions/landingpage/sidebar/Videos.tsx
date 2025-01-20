import { useState } from "react";

const Videos: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const videos = [
    "https://www.youtube.com/embed/cgJAwWfWW2g?si=PaqGlM9AN4APzSek",
    "https://www.youtube.com/embed/pvcrDGzVS28?si=ICIUWropT4GxdFW9",
    "https://www.youtube.com/embed/u9n4T7OcRjA?si=-VLrEUhJbfHtzUhy",
    "https://www.youtube.com/embed/4ayOAtUHwZM?si=01eL-Lpn8wmaYACW",
    "https://www.youtube.com/embed/Ako9mZC7uJE?si=gE6TORKwq7eFPFMh"
  ];
  const visibleVideos = showAll ? videos : videos.slice(0, 3);

  return (
    <div className="bg-gray-100 p-6 mt-2 rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800">Youtube Videos</h1>
      <div className="grid gap-5 mt-3">
        {visibleVideos.map((video, index) => (
          <div key={index} className="h-[30vh]">
            <iframe
              src={video}
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
export default Videos