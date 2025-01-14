
const Sidebar = () => {
  return (
    <>
     <div className="bg-white font-poppins p-4 h-full text-center">
       <h1 className="text-black text-3xl text-center font-semibold">Are You Interested in this College?</h1>
       <div className="mt-4">
        <button className="px-4 py-2 border-2 border-primaryBtn hover:bg-primaryBtn hover:text-white text-1xl rounded-lg w-[300px]">Apply Now</button>
        <button className="px-4 py-2 border-2 border-hoverBtn hover:bg-hoverBtn hover:text-white text-1xl rounded-lg w-[300px] mt-2">Download Brochure</button>
       </div>
    </div>
    </>
  )
}

export default Sidebar