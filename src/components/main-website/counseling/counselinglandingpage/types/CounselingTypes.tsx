export interface CounselingData {
  id: string;
  name: string;
  title: string;
  description: string;
  keyPoints: string[];
  eligibility: string[];
  process: {
    title: string;
    steps: Array<{
      id: number;
      title: string;
      description: string;
    }>;
  };
  importantDates: Array<{
    event: string;
    date: string;
  }>;
  fees: {
    general: string;
    reserved: string;
    female: string;
  };
  documents: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  additionalResources: Array<{
    title: string;
    link: string;
  }>;
}
