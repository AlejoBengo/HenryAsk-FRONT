import axios from "axios";
import { User } from "../interface";


export const editIsBanned = async (user:User) => {
        let aux = { ...user, id: user._id };
        const response = (await axios.put("/user", aux)).data;
        return response;
}   


export const fetchIdUserBan = async (id:string) =>{
    const response = await (await axios.get(`/user/${id}`)).data;
    return response;
}
   
  
     
export const deleteUserPanel = async (id:string) =>{
    try{
        const response = await (await axios.delete(`/user/?id=${id}`)).data;
        return response;
    } catch(error){
        console.log("catch delete user panel" , error)
    }
}
   
   