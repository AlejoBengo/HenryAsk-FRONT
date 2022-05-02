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
  owner: any;
  content: string;
  posts: string;
}

export interface Theoric {
  owner: string;
  title: string;
  content: string;
  author: string;
  images: Array[string];
  comments: Array[string];
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
  id: "name" | "question" | "description" | "tags";
  label: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

export interface isAlumnOrInstructor {
  user: Array;
  height: number;
}

export interface PostOwner {
  _id: string;
  user_name: string;
  profile_picture: string;
  role: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Posts {
  _id: string;
  question: string;
  description: string;
  owner: PostOwner; //cambiado de string a any por Agus ya que se resolvió el tema de las Refs
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

//Para agus modelo solucionado
/* export interface Posts {
  _id: string;
  question: string;
  description: string;
  owner: User;
  //createdAt: string;
  open: boolean;
  answers: Array<string>;
  type: number;
  tags: Array<string>;
} */

export interface Error {
  errorTag: string;
  errorSubmit: string;
}
