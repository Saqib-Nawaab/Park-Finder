import parkImg from './park.jpeg';
import parkImg2 from './park2.jpeg';
import parkImg3 from './park3.jpeg';

const parkData = [
  {
    id: 1,
    name: "Jilani Park",
    latitude: 31.5320,
    longitude: 74.3408,
    description: "A large and well-maintained park famous for its floral exhibitions.",
    features: ["Jogging Track", "Boating", "Playground"],
    image_url: "",
    address: "Jail Road, Lahore, Punjab",
  },
  {
    id: 2,
    name: "Racecourse Park",
    latitude: 31.5331,
    longitude: 74.3446,
    description: "Popular green space with a kids play area and flower gardens.",
    features: ["Jogging Track", "Seating Area", "Open Field"],
    image_url: parkImg,
    address: "Racecourse Rd, Lahore, Punjab",
  },
  {
    id: 3,
    name: "Model Town Park",
    latitude: 31.4667,
    longitude: 74.3302,
    description: "Sprawling urban park known for walking and jogging tracks.",
    features: ["Jogging Track", "Open Field", "Fitness Area"],
    image_url: parkImg2,
    address: "Model Town, Lahore, Punjab",
  },
  {
    id: 4,
    name: "Gulshan-e-Iqbal Park",
    latitude: 31.5032,
    longitude: 74.2669,
    description: "One of Lahore’s largest parks with multiple attractions.",
    features: ["Playground", "Rides", "Boating"],
    image_url: parkImg3,
    address: "Allama Iqbal Town, Lahore, Punjab",
  },
  {
    id: 5,
    name: "Shahbaz Sharif Park",
    latitude: 31.1186,
    longitude: 74.4465,
    description: "A modern park in the heart of Kasur with fountains and walking areas.",
    features: ["Seating Area", "Fountains", "Jogging Track"],
    image_url: "",
    address: "College Road, Kasur, Punjab",
  },
];

export { parkData };
