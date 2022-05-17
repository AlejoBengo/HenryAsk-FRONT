/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useRoutes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createOptions } from "./Assets/theme/options";
import { Box, Skeleton } from "@mui/material";
import { useCookies } from "react-cookie";
/*-----------IMPORT REDUCER-----------*/
import { fetchUserByEmail } from "./app/Reducers/userSlice";
/*-----------IMPORT COMPONENTS-----------*/
import Content from "./Views/Content";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Views/Profile";
import { EditProfile } from "./Components/Profile/EditProfile/EditProfile";
import Foro from "./Views/Foro";
import PostDetails from "./Views/PostDetails";
import CreatePost from "./Components/Creators/CreatePost/CreatePost";
import { CreateTheoric } from "./Components/Creators/CreateTheoric/CreateTheoric";
import LateralMenu from "./Components/Navbar/LateralMenu/LateralMenu";
import TheoricView from "./Views/TheoricView";
import ExerciseDetails from "./Views/ExerciseDetails";
import Home from "./Views/Home";
import AboutUs from "./Views/AboutUs";
import About from "./Views/About";
import Careers from "./Views/Careers";
import Contact from "./Views/Contact";
import Qa from "./Views/Q&A";
import Privacy from "./Views/PrivacyPolitics";
import PanelAdm from "./Views/PanelAdm";
import CreateExercise from "./Components/Creators/CreateExercise/CreateExercise";
import Footer from "./Components/Home/Footer/FooterSenior";
import Header from "./Components/HomeSenior/Header";
import Search from "./Views/Search";
import HenryCoinsRanking from "./Views/HenryCoinsRanking";
import { toggleMode, setMode } from "./app/Reducers/modeReducer";
import ForumNews from "./Views/ForumNews";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const DBUser = useAppSelector((state) => state.user.data);
  const mode = useAppSelector((state) => state.mode.mode);
  const [theme, setTheme] = useState(createTheme(createOptions(mode)));
  const [charged, setCharged] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setCharged(true);
    }, 4000);
    if (isAuthenticated) {
      dispatch(fetchUserByEmail(user?.email));
    }
  }, [user]);

  useEffect(() => {
    let colorMode = cookies.colorMode;
    if (colorMode) dispatch(setMode(colorMode));
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && DBUser.user_name === "") {
      navigate(`/Profile/${DBUser?._id}/Edit`);
    }
  }, [DBUser]);

  useEffect(() => {
    setCookie("colorMode", mode, {
      path: "/",
      expires: new Date("December 31, 2038"),
    });

    setTheme(createTheme(createOptions(mode)));
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      {charged ? <Header /> : <Skeleton animation="wave" height={50} />}
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          p: 0,
          paddingTop: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "background.main",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/qya" element={<Qa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careeers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Theoric/:id" element={<TheoricView />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Profile/:id/Edit" element={<EditProfile />} />
          <Route path="/Post/:id" element={<PostDetails />} />
          <Route path="/Forum/" element={<Foro />} />
          <Route path="/Ask" element={<CreatePost />} />
          <Route path="/Theoric/Create" element={<CreateTheoric />} />
          <Route path="/Exercise/Create" element={<CreateExercise />} />
          <Route path="/PanelAdm" element={<PanelAdm />} />
          <Route path="/Exercise/:id" element={<ExerciseDetails />} />
          <Route path="/Search/" element={<Search />} />
          <Route path="/Ranking/" element={<HenryCoinsRanking />} />
          <Route path="/Forum/News" element={<ForumNews />} />
        </Routes>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
