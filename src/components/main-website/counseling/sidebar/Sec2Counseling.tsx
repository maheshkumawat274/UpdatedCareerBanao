export const Sec2Counseling = () => {
  const counselingList = [
    { id: 1, name: 'JoSAA Counseling' },
    { id: 2, name: 'CSAB Counseling' },
    { id: 3, name: 'MHT CET CAP' },
    { id: 4, name: 'REAP Rajasthan' },
    { id: 5, name: 'MP DTE' },
    { id: 6, name: 'WBJEE Counseling' },
    { id: 7, name: 'TS EAMCET' },
    { id: 8, name: 'AP EAMCET' },
  ];

  return (
    <div className="p-4 border-b">
      <h3 className="text-xl sm:text-3xl font-semibold mb-3">Available Counselings</h3>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3">
        {counselingList.map((item) => (
          <button
            key={item.id}
            className="bg-gray-100 hover:bg-blue-100 text-gray-800 text-sm font-medium py-2 px-4 rounded text-left shadow-sm transition-all duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
