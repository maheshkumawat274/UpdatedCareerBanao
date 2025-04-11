
function Heading() {
  return (
    <div className="w-full h-[350px] md:h-[550px] relative">
      {/* Background Image */}
      <img
        src="./logo/pexels-cottonbro-4065137.jpg"
        alt="banner"
        className="xl:object-cover w-full h-full"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-8"></div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] text-center text-white z-10">
        <div className="font-poppins w-full py-8 px-4 sm:px-14 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
            Want to work with CareerBanao?
          </h1>
          <p className="mb-4 text-gray-200">
            If you have what it takes and can give us compelling reasons that
            make you stand out from the rest (for all the right reasons, of
            course!), then we'd like to hear from you.
          </p>
          {/* <Link
            to="#currentOpening"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            View Job Openings
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Heading;
