import React from "react";
import {
  Route,
  Routes,
  useRoutes,
  BrowserRouter as Router,
} from "react-router-dom";
import CompleteSignUp from "./Components/CompleteSignUp/CompleteSignUp";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Content" element={<Content />} />
        <Route path="/CompleteSignUp" element={<CompleteSignUp />} />
      </Routes>
    </>
  );
};
export default App;
