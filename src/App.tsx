import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useRoutes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { fetchUserByEmail } from "./app/Reducers/userSlice";
import CompleteSignUp from "./Components/CompleteSignUp/CompleteSignUp";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
import { QuestionCreate } from "./Components/QuestionCreate.tsx/QuestionCreate";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Profile from "./Components/Profile/Profile";
import { EditProfile } from "./Components/EditProfile/EditProfile";
import PostDetails from "./Components/PostDetails/PostDetails";
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
        <Route path="/CompleteSignUp" element={<CompleteSignUp />} />
        <Route path="/Ask" element={<QuestionCreate />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Profile/:id/Edit" element={<EditProfile />} />
        <Route path="/Post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
};
export default App;
