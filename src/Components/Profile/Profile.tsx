import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchProfile, clearProfile } from "../../app/Reducers/userProfileSlice";

export default function Profile(){
    const {id}:any = useParams(); 
    const dispatch = useAppDispatch();
    const userProfile = useAppSelector((state) => state.profile.profile); //state.profile?
    useEffect(() => {
        dispatch(fetchProfile(id));
      }, []);

    function role(role:number){
      if(role === 0) return "Usuario logeado";
      if(role === 1) return "Estudiante";
      if(role === 2) return "Teaching Assistant";
      if(role === 3) return "Instructor";
      if(role === 4) return "Administrador";
    }
  return (
    <div>
        <h1>NAME:{userProfile.first_name}</h1>
        <h1>LASTNAME:{userProfile.last_name}</h1>
        <h1>COUNTRY:{userProfile.country}</h1>
        <h1>BIOGRAPHY:{userProfile.biography}</h1>
        <h1>EMAIL: {userProfile.email}</h1>
        <h1>Rol: {role(userProfile.role)}</h1>
    </div>
  );
};
