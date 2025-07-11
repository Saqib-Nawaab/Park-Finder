import { IoMdSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { IoMapOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import NavBar from "../components/NavBar";
import { useState } from "react";
import ParkCard from "../components/ParkCard";
import ParkMap from "../components/ParkMap";
import { parkData } from "../assets/parksData";
import { CiHeart } from "react-icons/ci";

function Parks() {
  const [isMapView, setIsMapView] = useState(true);
  const [isListView, setIsListView] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredParks, setFilteredParks] = useState(parkData);
  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    playground: false,
    joggingTrack: false,
    openField: false,
    seatingArea: false,
    dogFriendly: false,
  });

  const featureLabelMap = {
    playground: "Playground",
    joggingTrack: "Jogging Track",
    openField: "Open Field",
    seatingArea: "Seating Area",
    dogFriendly: "Dog Friendly",
  };

  const applyfilter = (value) => {
    const activeFilters = Object.keys(value)
      .filter((key) => value[key])
      .map((key) => featureLabelMap[key]);

    const filtered = parkData.filter((park) =>
      activeFilters.every((filterKey) => park.features.includes(filterKey))
    );

    console.log(filtered);

    if (activeFilters.length === 0) {
      setFilteredParks(parkData);
    } else {
      setFilteredParks(filtered);
    }
  };

  const handleClearAll = () => {
    setFilters({
      playground: false,
      joggingTrack: false,
      openField: false,
      seatingArea: false,
      dogFriendly: false,
    });
    setFilteredParks(parkData);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = parkData.filter((park) =>
      park.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredParks(filtered);
  };

  return (
    <div className="bg-[#020817] min-h-screen flex flex-col">
      <NavBar />
      <div className="flex items-center mt-1 p-3">
        <div className="flex flex-1 bg-[#1A2130] rounded-md overflow-hidden">
          <div className="p-2 px-3 flex items-center justify-center text-xl text-gray-300 hover:bg-[#232a3b] cursor-pointer transition-colors">
            <IoMdSearch />
          </div>
          <input
            type="text"
            placeholder="Search Parks by Name and Area..."
            className="flex-1 w-full bg-transparent text-white px-4 py-2 outline-none"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div
            onClick={() => setIsFilterOpen(true)}
            className="p-2 px-3 flex items-center justify-center text-xl text-gray-300 hover:bg-[#232a3b] cursor-pointer transition-colors"
          >
            <VscSettings />
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-[9999]">
          <div className="bg-[#0d1117] text-white rounded-lg w-full max-w-md p-6 relative shadow-lg">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl cursor-pointer"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-2">Filter Parks</h2>
            <p className="text-gray-400 mb-4">
              Select features to filter parks
            </p>
            {Object.keys(filters).map((key, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters[key]}
                  onChange={() =>
                    setFilters({ ...filters, [key]: !filters[key] })
                  }
                  className="w-4 h-4 accent-green-500 cursor-pointer"/>
                <span>{featureLabelMap[key]}</span>
              </label>
            ))}

            <div className="flex justify-between mt-6">
              <button
                onClick={handleClearAll}
                className="px-4 py-2 border border-gray-600 rounded-md text-white hover:bg-gray-800 transition"
              >
                Clear All
              </button>
              <button
                onClick={() => {
                  setIsFilterOpen(false);
                  applyfilter(filters);
                }}
                className="px-5 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md font-medium transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-4 ">
        <div className="flex rounded-md overflow-hidden border border-[#2a2f3d] bg-[#1A2130]">
          <button
            onClick={() => {
              setIsMapView(true);
              setIsListView(false);
            }}
            className={`flex items-center cursor-pointer justify-center text-center gap-2 w-96 px-3 py-3 text-sm font-medium transition-colors ${
              isMapView
                ? "bg-[#020817] text-white"
                : "text-gray-400 hover:bg-[#2a2f3d]"
            }`}
          >
            <IoMapOutline className="text-lg" />
            Map View
          </button>
          <button
            onClick={() => {
              setIsMapView(false);
              setIsListView(true);
            }}
            className={`flex items-center cursor-pointer justify-center text-center w-96 gap-2 px-4 py-2 text-sm font-medium transition-colors ${
              isListView
                ? "bg-[#020817] text-white"
                : "text-gray-400 hover:bg-[#2a2f3d]"
            }`}
          >
            <IoIosList className="text-lg" />
            List View
          </button>
        </div>
      </div>
      <div className="flex-1 mt-4">
        {isListView && <ParkCard parks={filteredParks} />}
        {isMapView && <ParkMap parks={filteredParks} />}
      </div>
    </div>
  );
}

export default Parks;
