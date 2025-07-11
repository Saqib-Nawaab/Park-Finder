import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Favorites from "./pages/Favorites";
import Setting from "./pages/Setting";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
