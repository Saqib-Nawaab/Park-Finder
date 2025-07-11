import React, { useState } from "react";
import { LocationMarker } from "../assets";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useAppContext } from "../context/AppContext";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const { navigate } = useAppContext();

  return (
    <div>
      <div className="bg-[#09361b] text-white h-screen flex flex-col justify-center items-center gap-13 ">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <div className=" bg-[#23c45e] rounded-full p-2 w-[80px] h-[80px] flex justify-center items-center  ">
            <img src={LocationMarker} className="w-[50px] h-[50px]  " />
          </div>
          <h1 className="text-white text-4xl font-bold">ParkMate</h1>
          <p className="text-gray-300">Discover parks near you with ease</p>
        </div>

        <div className="flex gap-5 flex-col justify-between items-center text-center ">
          <button
            onClick={() => navigate("/parks")}
            className="flex gap-2 items-center w-[400px]  bg-[#23c45e] hover:bg-green-600 text-black py-2 px-4 rounded  text-center justify-center text-[20px] cursor-pointer "
          >
            {" "}
            <FaMapMarkerAlt />
            Find Parks
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="flex gap-2 items-center w-[400px]  bg-black  text-white py-2 px-4 rounded  text-center justify-center text-[20px] hover:bg-gray-800 cursor-pointer "
          >
            <IoIosInformationCircle />
            How it Works
          </button>
        </div>
      </div>

      {isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-green-400 mb-6 tracking-tight">
        How ParkMate Works
      </h2>
      <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
        <li className="flex items-start gap-3">
          <span className="text-green-400 font-semibold">1.</span>
          <p>
            <strong>Find Parks:</strong> View parks on an interactive map or in a list view. Click on pins to see details.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-400 font-semibold">2.</span>
          <p>
            <strong>Filter Parks:</strong> Use filters to find parks with specific features like playgrounds, jogging tracks, and more.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-400 font-semibold">3.</span>
          <p>
            <strong>Save Favorites:</strong> Mark parks as favorites for quick access later.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-400 font-semibold">4.</span>
          <p>
            <strong>Get Directions:</strong> Easily get directions to any park with a single tap.
          </p>
        </li>
      </ul>
      <button
        onClick={() => setIsOpen(false)}
        className="mt-6 w-full bg-green-500 cursor-pointer hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default Home;
