import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Content" element={<Content />} />
      </Routes>
    </>
  );
};
export default App;
