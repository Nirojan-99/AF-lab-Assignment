import { Route, Routes } from "react-router";
import Header from "../Components/Header";
import Cart from "./Cart/Cart";
import Dashboard from "./Dashboard/DashBoard";
import Favorites from "./Favorites/Favorites";
import Products from "./Products/Products";
import Profile from "./Profile/Profile";
import NewPromo from "./Promo/NewPromo";

function Pages() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "4rem" }} />
      <Routes>
        <Route eaxct path="/checkout" element={<></>} />
        <Route eaxct path="/promo/add" element={<NewPromo/>} />
        <Route eaxct path="/product/new" element={<Products />} />
        <Route eaxct path="/product/edit/:id" element={<Products />} />
        <Route eaxct path="/favorites" element={<Favorites />} />
        <Route eaxct path="/profile" element={<Profile />} />
        <Route eaxct path="/cart" element={<Cart />} />
        <Route eaxct path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Pages;
