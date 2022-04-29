import { Route, Routes } from "react-router";
import Header from "../Components/Header";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Dashboard from "./Dashboard/DashBoard";
import Favorites from "./Favorites/Favorites";
import Products from "./Products/Products";
import Profile from "./Profile/Profile";
import NewPromo from "./Promo/NewPromo";
import { Navigate } from "react-router-dom";

function Pages() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "4rem" }} />
      <Routes>
        <Route eaxct path="/auth/login" element={<Login />} />
        <Route eaxct path="/auth/register" element={<Register />} />
        <Route eaxct path="/checkout" element={<Checkout />} />
        <Route eaxct path="/promo/add" element={<NewPromo />} />
        <Route eaxct path="/product/new" element={<Products />} />
        <Route eaxct path="/product/edit/:id" element={<Products />} />
        <Route eaxct path="/favorites" element={<Favorites />} />
        <Route eaxct path="/profile" element={<Profile />} />
        <Route eaxct path="/cart" element={<Cart />} />
        <Route eaxct path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default Pages;
