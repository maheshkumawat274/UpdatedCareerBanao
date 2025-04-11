import React, { useState, useEffect, useCallback } from 'react';

interface FormData {
  title: string;
  review: string;
  rating: number;
  file: File | null;
}

interface ReviewSectionProps {
  onComplete: () => void; // Prop to notify parent about form completion
}

const ReviewSection3: React.FC<ReviewSectionProps> = ({ onComplete }) => {
  const [infrastructure, setInfrastructure] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });
  const [faculty, setFaculty] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Memoize the onComplete function to prevent unnecessary re-renders
  const memoizedOnComplete = useCallback(onComplete, []);

  // Validate form whenever the state changes
  useEffect(() => {
    const infraValid =
      Boolean(infrastructure.title.trim()) &&
      infrastructure.rating > 0;
      // Removed file validation

    const facultyValid =
      Boolean(faculty.title.trim()) &&
      faculty.rating > 0;
      // Removed file validation

    setIsFormValid(infraValid && facultyValid);
  }, [infrastructure, faculty]);

  useEffect(() => {
    if (isFormValid) {
      memoizedOnComplete(); // Notify parent that this section is complete
    }
  }, [isFormValid, memoizedOnComplete]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData,
    section: 'infrastructure' | 'faculty'
  ) => {
    const value = e.target.value;
    if (section === 'infrastructure') {
      setInfrastructure((prev) => ({ ...prev, [field]: value }));
    } else {
      setFaculty((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: 'infrastructure' | 'faculty'
  ) => {
    const file = e.target.files?.[0] || null;
    if (section === 'infrastructure') {
      setInfrastructure((prev) => ({ ...prev, file }));
    } else {
      setFaculty((prev) => ({ ...prev, file }));
    }
  };

  const handleRatingChange = (
    rating: number,
    section: 'infrastructure' | 'faculty'
  ) => {
    if (section === 'infrastructure') {
      setInfrastructure((prev) => ({ ...prev, rating }));
    } else {
      setFaculty((prev) => ({ ...prev, rating }));
    }
  };

  return (
    <div className='flex justify-center w-full pt-1 sm:pt-8 font-poppins'>
      <div className="p-8  w-full sm:w-1/2 rounded-md bg-transparent sm:bg-white">
        <div className="w-full ">
          {/* Infrastructure Section */}
          <div className="mb-8">
            <h1 className="text-lg font-bold mb-4 text-primaryBtn">Infrastructure *</h1>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Title"
                value={infrastructure.title}
                onChange={(e) => handleInputChange(e, 'title', 'infrastructure')}
                className="border p-2 w-full rounded"
              />
              <textarea
                placeholder="Review"
                value={infrastructure.review}
                onChange={(e) => handleInputChange(e, 'review', 'infrastructure')}
                className="border p-2 w-full rounded"
              />
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRatingChange(star, 'infrastructure')}
                    className={`cursor-pointer ${
                      star <= infrastructure.rating
                        ? 'text-yellow-500'
                        : 'text-gray-400'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, 'infrastructure')}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          {/* Faculty Section */}
          <div className="mb-8">
            <h1 className="text-lg font-bold mb-4 text-primaryBtn">Faculty *</h1>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Title"
                value={faculty.title}
                onChange={(e) => handleInputChange(e, 'title', 'faculty')}
                className="border p-2 w-full rounded"
              />
              <textarea
                placeholder="Review"
                value={faculty.review}
                onChange={(e) => handleInputChange(e, 'review', 'faculty')}
                className="border p-2 w-full rounded"
              />
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRatingChange(star, 'faculty')}
                    className={`cursor-pointer ${
                      star <= faculty.rating
                        ? 'text-yellow-500'
                        : 'text-gray-400'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, 'faculty')}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection3;