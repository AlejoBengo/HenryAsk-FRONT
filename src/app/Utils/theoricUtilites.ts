import { Theoric } from "../interface";
import { ownerTemplate } from "./userUtilities";
import axios from "axios";
export const theoricTemplate: Theoric = {
  _id: "",
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
    console.log(error);
  }
};
