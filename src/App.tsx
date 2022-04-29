import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useRoutes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { fetchUserByEmail } from "./app/Reducers/userSlice";
import Content from "./Views/Content";
import Navbar from "./Components/Navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "./app/hooks";

import PostForm from "../src/Components/PostRequestForm/PostForm";
import Profile from "./Views/Profile";
import { EditProfile } from "./Components/Profile/EditProfile/EditProfile";
import Foro from "./Views/Foro";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const DBUser = useAppSelector((state) => state.user.data);

  useEffect(() => {
    console.log(user);
    if (isAuthenticated) {
      dispatch(fetchUserByEmail(user?.email));
    }
  }, [user]);

  useEffect(() => {
    if (isAuthenticated && DBUser.user_name === "") {
      navigate(`/Profile/${DBUser?._id}/Edit`);
    }
  }, [DBUser]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Content" element={<Content />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Profile/:id/Edit" element={<EditProfile />} />
        <Route path="/Foro" element={<Foro />} />
        <Route path="/" element={<PostForm />} />
      </Routes>
    </>
  );
};
export default App;
