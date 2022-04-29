import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchProfile,
  clearProfile,
} from "../../app/Reducers/userProfileSlice";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
export default function Profile() {
  const roles = [
    "Usuario",
    "Estudiante de Prep",
    "Estudiante de Henry",
    "Teaching Assistant",
    "Instructor",
    "Administrator",
  ];
  const navigate = useNavigate();
  const { id }: any = useParams();
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.profile.profile); //state.profile?
  const user = useAppSelector((state) => state.user.data);
  useEffect(() => {
    dispatch(fetchProfile(id));
  }, []);

  return (
    <div>
      <h1>Perfil</h1>
      {id === user._id ? (
        <Button
          variant="contained"
          onClick={() => navigate(`/Profile/${id}/Edit`)}
        >
          <EditIcon />
        </Button>
      ) : null}
      <h3>NAME:{userProfile.first_name}</h3>
      <h3>LASTNAME:{userProfile.last_name}</h3>
      <h3>COUNTRY:{userProfile.country}</h3>
      <h3>BIOGRAPHY:{userProfile.biography}</h3>
      <h3>EMAIL: {userProfile.email}</h3>
      <h3>Rol: {roles[userProfile.role]}</h3>
    </div>
  );
}
