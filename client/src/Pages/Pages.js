import { Route, Routes } from "react-router";
import Header from "../Components/Header";
import Cart from "./Cart/Cart";
import Dashboard from "./Dashboard/DashBoard";
import Favorites from "./Favorites/Favorites";

function Pages() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "4rem" }} />
      <Routes>
        <Route eaxct path="/favorites" element={<Favorites />} />
        <Route eaxct path="/cart" element={<Cart />} />
        <Route eaxct path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Pages;
