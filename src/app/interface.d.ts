
export interface User {
    _id:string;
    first_name: string;
    last_name: string;
    email: string;
    country: string;
    city: string;
    type:string;
    role: number;
    user_name: string;
    profile_picture: string;
    biography: string;
    posts: Array<string>;
    answers: Array<string>;
    comments: Array<string>;
    own_henry_coin: number;
    give_henry_coin: number;
    theoric: Array<string>;
    excersices: Array<string>;
  }
  export interface InitialState {
    data: User;
    loading: string;
    profile:User;
  }

  export interface isAlumnOrInstructor {
    user:Array;
    height:number;
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
  export interface Answer{
    owner:User;
    content:string;
    post:string;
  }

  export interface Posts{
    _id:string;
    owner:User;
    question:string;
    type:string;
    description:string;
    open:boolean;
    //answer: Array<Answer>
  }

  export interface propsPost{
    post:Array<Posts>
  }

  export interface height{
    height:number;
  }

  // --------------------->