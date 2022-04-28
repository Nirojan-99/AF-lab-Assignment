import { Route, Routes } from "react-router";
import Header from "../Components/Header";
import Dashboard from "./Dashboard/DashBoard";

function Pages() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "4rem"}} />
      <Routes>
        <Route eaxct path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Pages;
