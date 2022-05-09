import { Owner } from "../interface"
import { ExerciseInterface } from "../Interfaces/interfaceExercise"

export const ownerTemplate: Owner= {
  _id:"",
  user_name: "",
  profile_picture: "",
  role: 0,
  avatar: "",
}

export const exerciseTemplate: ExerciseInterface = {
  _id: "",
  owner: ownerTemplate,
  title: "",
  tags: [],
  description: "",
  code: "",
  test:"",
  createdAt: "",
  updatedAt: "",
}
