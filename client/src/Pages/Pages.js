import { Route, Routes } from "react-router";
import Header from "../Components/Header";
import Cart from "./Cart/Cart";
import Dashboard from "./Dashboard/DashBoard";
import Favorites from "./Favorites/Favorites";
import Profile from "./Profile/Profile";

function Pages() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "4rem" }} />
      <Routes>
        <Route eaxct path="/checkout" element={<></>} />
        <Route eaxct path="/product/new" element={<></>} />
        <Route eaxct path="/favorites" element={<Favorites />} />
        <Route eaxct path="/profile" element={<Profile />} />
        <Route eaxct path="/cart" element={<Cart />} />
        <Route eaxct path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Pages;
