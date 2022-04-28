import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getUser } from "../../app/Reducers/userProfileSlice";


export default function Profile(){
    const {id}:any = useParams(); 
    const dispatch = useAppDispatch();
    const UserProfile = useAppSelector((state) => state.getUser);

    useEffect(() => {
        dispatch(getUser(id))
      }, []);

 //role     
      //0 = persona logueada pero no aprobo hernyChallenge
      //1 = estudiante 
      //2 = instructor 
      //3 = administrador
  return (
    <div>
        
    </div>
  );
};
