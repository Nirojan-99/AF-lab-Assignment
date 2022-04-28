import { Route, Routes } from "react-router";
import Header from "../Components/Header";

function Pages() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "5%" }} />
      <Routes>
        <Route eaxct path="/" element={<></>} />
      </Routes>
    </>
  );
}

export default Pages;
