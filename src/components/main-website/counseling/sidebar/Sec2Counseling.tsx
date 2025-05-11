import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type CounselingType = {
  id: number;
  name: string;
  slug?: string | null;
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/counselling|counseling/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const Sec2Counseling = () => {
  const [counselingData, setCounselingData] = useState<CounselingType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [counselingsRes, collectionsRes] = await Promise.all([
          axios.get("http://localhost:3000/sidebar/counselings"),
          axios.get("http://localhost:3000/api/counseling_collections"),
        ]);

        const counselings = counselingsRes.data;
        const collections = collectionsRes.data;

        const collectionMap: Map<string, string> = new Map(
          collections.map((item: any) => {
            const normalizedTitle = slugify(item.title);
            return [normalizedTitle, item.slug];
          })
        );

        const mergedData = counselings.map((counseling: any) => {
          const normalizedName = slugify(counseling.name);
          let matchedSlug: string | null = null;

          for (const [collectionTitle, slug] of collectionMap.entries()) {
            if (normalizedName.includes(collectionTitle)) {
              matchedSlug = slug;
              break;
            }
          }

          return { ...counseling, slug: matchedSlug };
        });

        setCounselingData(mergedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  if (!counselingData.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 border-b">
      <h3 className="text-xl sm:text-3xl font-semibold mb-3">Available Counselings</h3>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3">
        {counselingData.map((item) => (
          <button
            key={item.id}
            className="bg-gray-100 hover:bg-blue-100 text-gray-800 text-sm font-medium py-2 px-4 rounded text-left shadow-sm transition-all duration-200"
            onClick={() => {
              if (item.slug) {
                navigate(`/counseling/${item.slug}`);
              } else {
                alert("Coming soon...");
              }
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
