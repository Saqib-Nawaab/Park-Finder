import React from "react";
import { useAppContext } from "../context/AppContext";
import ParkCard from "../components/ParkCard";
import { parkData } from "../assets/parksData";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
function Favorites() {
  const { favoritepark } = useAppContext();

  const favoriteParks = parkData.filter((park) =>
    favoritepark.includes(park.id)
  );

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 dark:text-white transition-colors duration-300">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-400 mb-8 tracking-tight">
          Your Favorite Parks
        </h1>
        {favoriteParks.length === 0 ? (
          <div className="bg-gray-800/80 backdrop-blur-sm text-gray-300 p-8 rounded-xl shadow-lg text-center max-w-lg mx-auto">
            <p className="text-xl font-medium mb-2">No favorite parks yet</p>
            <p className="text-sm text-gray-400 mb-4">
              Explore and add some parks to your favorites!
            </p>
            <Link to="/parks">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Find Parks
              </button>
            </Link>
          </div>
        ) : (
          <ParkCard parks={favoriteParks} isFavoritesPage={true} />
        )}
      </div>
    </div>
  );
}

export default Favorites;
