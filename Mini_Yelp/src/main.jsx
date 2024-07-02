import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/Footer";
import AllRestaurants from "./pages/AllRestaurants";
import RestaurantProfile from "./pages/RestaurantProfile";
import SearchResultPage from "./pages/SearchResultPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/restaurants" element={<AllRestaurants />} />
      <Route path="/profile" element={<RestaurantProfile />} />
      <Route path="/results" element={<SearchResultPage />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);