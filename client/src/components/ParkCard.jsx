import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { useAppContext } from "../context/AppContext";
import { CiHeart } from "react-icons/ci";
import ParkPopup from "./ParkPopup";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";

function ParkCard({ parks, isFavoritesPage }) {
  const [selectedPark, setSelectedPark] = useState(null);
  const [showpopup, setShowPopup] = useState(true);
  const { isfavorite, removeFavorite } = useAppContext();

  const handleCardClick = (park) => {
    setSelectedPark(park);
    setShowPopup(true);
  };

  const handleCardDelete = (id) => {
    if(isFavoritesPage){
      removeFavorite(id);
      toast.success("Park removed from favorites!");
      setShowPopup(false);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {parks.map((park) => (
        <div
          key={park.id}
          onClick={() => handleCardClick(park)}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="relative w-full h-48 bg-gray-700 rounded-t-xl overflow-hidden">
            {park.image_url ? (
              <img
                src={park.image_url}
                alt={park.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-600">
                <CiImageOn className="text-5xl text-gray-400" />
              </div>
            )}
            {isfavorite(park.id) && (
              <div
                className="absolute top-2 right-2 text-2xl text-red-500 bg-gray-800/70 rounded-full p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardDelete(park.id);
                }}
              >
                {isFavoritesPage ? (
                  <MdDeleteOutline className="text-2xl hover:size-8" />
                ) : (
                  <CiHeart />
                )}
              </div>
            )}
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold text-white mb-1 truncate">
              {park.name}
            </h2>
            <p className="text-sm text-gray-300 mb-3 line-clamp-2">
              {park.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {park.features.map((feature, i) => (
                <span
                  key={i}
                  className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full font-medium transition-colors duration-200 hover:bg-blue-600/50"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {showpopup && selectedPark && (
        <ParkPopup
          popupcard={selectedPark}
          onClose={() => setSelectedPark(null)}
        />
      )}
    </div>
  );
}

export default ParkCard;
