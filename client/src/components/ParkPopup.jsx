import React from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import toast from "react-hot-toast";

function ParkPopup({ popupcard, onClose }) {
  const { isfavorite, addFavorite, removeFavorite } = useAppContext();

  const handleFavorite = () => {
    if (isfavorite(popupcard.id)) {
      removeFavorite(popupcard.id);
      toast.success("Park remove from favorites");
    } else {
      addFavorite(popupcard.id);
      toast.success("Park add to favorites");
    }
  };

  const handleGetDirectiom = () => {
    const lat = popupcard.latitude;
    const lng = popupcard.longitude;
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      window.open(mapUrl, "_blank");
  };

  return (
    <div>
      {popupcard && (
        <div
          className="fixed inset-0  bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div
            className="bg-[#0d1117] text-white rounded-lg w-full max-w-md p-6 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-60 bg-gray-800 flex items-center justify-center mb-4 overflow-hidden rounded-md">
              {popupcard.image_url ? (
                <img
                  src={popupcard.image_url}
                  className="w-full h-full object-cover"
                />
              ) : (
                <CiImageOn className="text-6xl text-gray-500" />
              )}
            </div>

            <h2 className="text-xl font-bold mb-1">{popupcard.name}</h2>
            <p className="text-sm text-gray-300 mb-2">
              {popupcard.description}
            </p>

            <div className="mt-2 flex flex-row gap-2">
              <p className="text-sm text-gray-400 font-semibold mb-1">
                Features :
              </p>
              <div className="flex flex-wrap gap-2">
                {popupcard.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-blue-700/20 text-blue-400 text-xs px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-2 mt-4">
              <FaLocationDot className="text-green-500 mt-0.5" />
              <p className="text-sm text-gray-400">
                <strong>Address:</strong> {popupcard.address}
              </p>
            </div>

            <div>
              {isfavorite(popupcard.id) ? (
                <button
                  onClick={handleFavorite}
                  className="mt-4 w-full flex items-center justify-center gap-2 border border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-colors duration-200 px-5 py-2 rounded-full"
                >
                  <CiHeart className="text-2xl" />
                  <span className="font-medium">Remove from favorites</span>
                </button>
              ) : (
                <button
                  onClick={handleFavorite}
                  className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 px-5 py-2 rounded-full"
                >
                  <CiHeart className="text-2xl" />
                  <span className="font-medium">Add to favorites</span>
                </button>
              )}
              <div className="w-full " onClick={handleGetDirectiom}>
                <button className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-500 text-gray-300 hover:bg-green-800 cursor-pointer hover:text-white transition-colors duration-200 px-5 py-2 rounded-full">
                  Get Direction
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ParkPopup;
