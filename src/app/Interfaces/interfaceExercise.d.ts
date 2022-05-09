import { Owner} from "../interface";

export enum RolesEnum{
  ZERO, 
  ONE, 
  TWO,
  THREE,
  FOUR,
  FIVE
}

export interface OwnerInterface{
  _id: string
  profile_picture: string
  role: Roles
  user_name: string
  avatar: string
}

export enum TagsEnum{
  JavaScript = "JavaScript",
  PostgreSQL = "PostgreSQL",
  Sequelize = "Sequelize",
  Nodejs = "Nodejs",
  Express = "Express",
  React = "React",
  Redux = "Redux",
  CSS = "CSS",
  HTML = "HTML",
  SQL = "SQL",
  Modulo = "Modulo",
  Otros = "Otros",
  M1 = "M1",
  M2 = "M2",
  M3 = "M3",
  M4 = "M4",
  PI = "PI",
  PG = "PG",
}

export interface ExerciseInterface{
  _id: string
  owner: Owner
  title: string
  tags: Array<TagsEnum>
  description: string
  code: string
  test: string
  createdAt: string
  updatedAt: string
}

export interface initialStateInterface {
  exercises: Array<ExerciseInterface>
  exercisesFounded: Array<ExerciseInterface>
  exercise: ExerciseInterface
  loading:boolean
}

export type ErrorType = any | unknown;