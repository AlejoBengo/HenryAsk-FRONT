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
  owner: Owner
  title: string
  tags: Array<Tags>
  description: string
  code: string
  test: string

}

export interface initialStateInterface {
  exercises: Array<Exercise>
  exercisesFounded: Array<Exercise>
  exercise: Exercise
  loading:boolean
}

export type ErrorType = any | unknown;