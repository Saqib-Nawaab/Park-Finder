import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import LocationMarker from "../assets/location.png";
import { CiImageOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import ParkPopup from "./ParkPopup";
import MapPopup from "./MapPopup";
import { CiHeart } from "react-icons/ci";
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const customIcon = new L.Icon({
  iconUrl: LocationMarker,
  iconSize: [27, 28],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function ParkMap({ parks }) {

  const position = [31.4935, 74.2997];

  return (
    <div className="w-full h-[600px]">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {parks.map((park) => (
          <Marker
            key={park.id}
            position={[park.latitude, park.longitude]}
            icon={customIcon}
          >
            <Popup>
              <MapPopup park={park} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ParkMap;
