import { Theoric } from "../interface";
import { ownerTemplate } from "./userUtilities";
import axios from "axios";
export const theoricTemplate: Theoric = {
  owner: ownerTemplate,
  title: "",
  author: "",
  content: "",
  comments: [],
  images: [],
};

export const postTheoric = async (theoric: Theoric) => {
  try {
    let aux = { ...theoric, owner: theoric.owner._id };
    return await (
      await axios.post("/theoric", aux)
    ).data;
  } catch (error) {
    return "Algo salió mal, intente de nuevo";
    console.log(error);
  }
};
