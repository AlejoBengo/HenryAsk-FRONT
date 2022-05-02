import axios from "axios";

export const getAllTheoric = async () => {
  try {
    let post = await (await axios.get(`/theoric`)).data;
    return post;
  } catch (error) {
    console.log(error);
  }
};
