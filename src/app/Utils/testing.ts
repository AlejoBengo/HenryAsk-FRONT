import axios from "axios";

export const testExercice = async (data: any) => {
  try {
    return await (
      await axios.get("/testing", data)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
