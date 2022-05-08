
export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
  type: string;
  role: 0 | 1 | 2 | 3 | 4 | 5;
  user_name: string;
  profile_picture: string;
  banner: string;
  biography: string;
  posts: Array<string>;
  answers: Array<string>;
  comments: Array<string>;
  own_henry_coin: number;
  give_henry_coin: number;
  theoric: Array<string>;
  excersices: Array<string>;
  github: string;
  linkedin: string;
  avatar:"https://res.cloudinary.com/henryask/image/upload/v1651459729/avatares/unicorn_ntmtyp.png" | "https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pig_tzhrjl.png" | "https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pigeon_yfv9ka.png"| "";
}
export interface InitialState {
  data: User;
  loading: string;
  profile: User;
}

export interface isAlumnOrInstructor {
  user: Array;
  height: number;
}
export interface Answer {
  _id: string;
  owner: Owner;
  content: string;
  post: string;
  comments: Array<Comment>;
  createdAt: string;
}

export interface Theoric {
  _id: string;
  owner: Owner;
  title: string;
  content: string;
  author: string;
  images: Array[string];
  comments: Array[string];
}

export interface Comment {
  _id: string;
  owner: Owner;
  answer: string;
  content: string;
}
// INTERFACES PARA GET POST './getPostsForum.ts';

/*   export enum Type {
    prep,
    learning,
  } */

export enum Tags {
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
}

export interface Column {
  id: "name" | "question" | "description" | "tags" | "open";
  label: string;
  maxWidth?:number | string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

export interface isAlumnOrInstructor {
  user: Array;
  height: number;
}

export interface Owner {
  _id: string;
  user_name: string;
  profile_picture: string;
  avatar:string;
  role: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Posts {
  _id: string;
  question: string;
  description: string;
  owner: Owner; //cambiado de string a any por Agus ya que se resolvió el tema de las Refs
  ownerData: Array<string>;
  createdAt: string;
  open: boolean;
  answers: Array<string>;
  type: number;
  tags: Array<string>;
}

export interface propsPost {
  post: Array<Posts>;
}

export interface height {
  height: number;
}
// ----------------------------------> Termina interfaces posts
// ---------------------------------->

export interface InitialState {
  data: User;
  loading: string;
  profile: User;
}
export interface Error {
  errorTag: string;
  errorSubmit: string;
}
/**
 * @TableExercise
*/
export interface ColumnTableExercise {
  id: "owner" | "title" | "description" | "code" | "test" | "tags";
  label: "Creador" | "Título" | "Descripción" | "Código" | "Test" | "Tags";
  maxWidth?:number | string;
  minWidth?: number;
  align?: "center";
  format?: ( value: string & Array<string> ) => string;
}
/**
 * @TableTheoric
*/
export interface ColumnTableTheoric {
  id: "owner" | "title" | "content" | "author" | "images" | "comments";
  label: "Creador" | "Título" | "Contenido" | "Autor" | "Imágenes" | "Comentarios";
  maxWidth?:number | string;
  minWidth?: number;
  align?: "center";
  format?: ( value: string & Array<string> ) => string;
}