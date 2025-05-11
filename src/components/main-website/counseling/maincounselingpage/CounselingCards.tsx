import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type CounselingType = {
  id: number;
  name:string
  title: string;
  description: string;
  icon: string;
  slug?: string | null;
};

const CounselingCards: React.FC = () => {
  const [cardData, setCardData] = useState<CounselingType[]>([]);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardsRes, collectionsRes] = await Promise.all([
          axios.get('http://localhost:3000/api/counseling-cards'),
          axios.get('http://localhost:3000/api/counseling_collections'),
        ]);
  
        const cards = cardsRes.data;
        const collections = collectionsRes.data;
        console.log(collections, 'all');
  
        const mergedData = cards.map((card: any) => {
          const normalizedCardName = card.name.trim().toLowerCase(); // name ke basis pe normalize
  
          let matchedSlug: string | null = null;
  
          for (const collection of collections) {
            const normalizedCollectionTitle = collection.title.trim().toLowerCase();
  
            // Ab name se match kar rahe
            if (
              normalizedCardName.includes(normalizedCollectionTitle) || 
              normalizedCollectionTitle.includes(normalizedCardName)
            ) {
              matchedSlug = collection.slug;
              break;
            }
          }
  
          console.log('Matched Slug for', card.name, ':', matchedSlug);
  
          return { ...card, slug: matchedSlug };
        });
  
        setCardData(mergedData);
      } catch (err) {
        console.error('Error fetching counseling data:', err);
      }
    };
  
    fetchData();
  }, []);
  
  
  
  return (
    <section id="counseling-cards">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            College <span className="text-pink-500">Counselling Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide expert guidance for various engineering and medical counselling processes
            across India, helping you secure the best possible college based on your rank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-6 bg-primaryBtn hover:bg-hoverBtn text-white">
                  <div className="flex justify-between items-center">
                    <div className='flex gap-2 justify-center items-center'>
                    <span className="text-4xl">{card.icon}</span>
                    <div className='border-2 border-gray-400 px-4 rounded-md'>
                      <p className='text-sm'>{card.name}</p>
                    </div>
                    </div>
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                      {Number(card.id) <= 2 ? 'Central' : 'State'}
                    </span>
                  </div>
                  <h1 className="text-xl font-bold mt-4">{card.title}</h1>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <div className="mt-auto">
                    {card.slug ? (
                      <Link
                        to={`/counseling/${card.slug}`}
                        className="inline-flex items-center text-primaryBtn hover:text-hoverBtn font-medium"
                      >
                        View more
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="text-sm text-gray-400 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#counselor"
            className="bg-primaryBtn hover:bg-hoverBtn text-white font-medium px-8 py-3 rounded-full transition-all inline-flex items-center justify-center"
          >
            Get Personalized Counselling
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CounselingCards;
