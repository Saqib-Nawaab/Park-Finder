import { CiImageOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { useAppContext } from "../context/AppContext";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
function MapPopup({ park }) {
  const { isfavorite, addFavorite, removeFavorite } = useAppContext();

  const handleFavorite = () => {
    if (isfavorite(park.id)) {
      toast.success("Park removed from favorite");
      removeFavorite(park.id);
    } else {
      addFavorite(park.id);
      toast.success("Park add to favorite");
    }
  };

  const handleGetDirectiom = () => {
    const lat = park.latitude;
    const lng = park.longitude;

    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    console.log(mapUrl);

    window.open(mapUrl, "_blank");
  };

  return (
    <div className="w-64 max-w-[260px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-4 text-white transition-all duration-200 hover:shadow-xl">
      <div className="w-full cursor-pointer h-28 bg-gray-700 rounded-lg overflow-hidden mb-3 relative">
        {park.image_url ? (
          <img
            src={park.image_url}
            alt={park.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-600">
            <CiImageOn className="text-4xl text-gray-400 hover:text-gray-500 cursor-pointer" />
          </div>
        )}
      </div>
      <h2 className="text-base font-bold mb-1 truncate">{park.name}</h2>
      <p className="text-xs text-gray-300 mb-3 line-clamp-2 leading-snug">
        {park.description}
      </p>
      <div className="mb-3">
        <p className="text-xs text-gray-200 font-semibold mb-1.5">
          Features :{" "}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {park.features.map((feature, i) => (
            <span
              key={i}
              className="bg-blue-600/30 text-blue-300 text-[10px] px-2.5 py-0.5 rounded-full font-medium transition-colors duration-200 hover:bg-blue-600/50"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-2">
        <FaLocationDot className="text-green-400 mt-4.5 text-sm flex-shrink-0" />
        <p className="text-xs text-gray-300 leading-tight">
          <strong className="font-semibold text-white">Address:</strong>{" "}
          {park.address}
        </p>
      </div>
      <div>
        {isfavorite(park.id) ? (
          <button
            onClick={handleFavorite}
            className="mt-1 cursor-pointer w-full flex items-center justify-center gap-2 border border-red-500 text-red-500 hover:bg-red-800 hover:text-white transition-colors duration-200 px-5 py-2 rounded-full"
          >
            <CiHeart className="text-2xl " />
            <span className="font-medium">Remove from favorites</span>
          </button>
        ) : (
          <button
            onClick={handleFavorite}
            className="mt-1  w-full flex items-center cursor-pointer justify-center gap-2 border border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 px-5 py-2 rounded-full"
          >
            <CiHeart className="text-2xl" />
            <span className="font-medium">Add to favorites</span>
          </button>
        )}
        <div className="mt-1" onClick={handleGetDirectiom}>
          <button className="mt-1  w-full flex items-center cursor-pointer justify-center gap-2 border border-gray-500 text-gray-300 hover:bg-green-800 hover:text-white transition-colors duration-200 px-5 py-2 rounded-full">
            Get Directon
          </button>
        </div>
      </div>
    </div>
  );
}

export default MapPopup;
