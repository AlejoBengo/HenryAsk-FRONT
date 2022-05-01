
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
    github:string;
    linkedin:string
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
  export interface Answer{
    owner:User;
    content:string;
    post:string;
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
    id: 'name' | 'question' | 'description' | 'tags' ;
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
  }
  

  export interface isAlumnOrInstructor {
    user: Array;
    height: number;
  }

  export interface Posts {
    _id: string;
    question: string;
    description: string;
    owner: any; //cambiado de string a any por Agus ya que se resolvió el tema de las Refs
    ownerData: Array<string>;
    createdAt: string;
    open: boolean;
    answers: Array<string>;
    type: number;
    tags: Array<string>;
  }
 

  export interface propsPost{
    post:Array<Posts>
  }

  export interface height{
    height:number;
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
