import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CounselingLayoutpage from './CounselingLayout';

const CounselingLanding = () => {
  const { slug } = useParams();
  const [counselingData, setCounselingData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounselingDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/counseling_collections/${slug}`);
        const data = await res.json();

        setCounselingData(data);
      } catch (err) {
        console.error('Error fetching counseling landing data', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCounselingDetails();
  }, [slug]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
 console.log(counselingData)

  return (
    <div>
      {/* Pass the fetched data as props */}
      <CounselingLayoutpage data={counselingData} />
    </div>
  );
};

export default CounselingLanding;
