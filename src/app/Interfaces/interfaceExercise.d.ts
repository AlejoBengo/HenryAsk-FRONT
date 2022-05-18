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

export interface ExerciseInterface{
  _id: string
  owner: Owner
  title: string
  tags: Array<string>
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