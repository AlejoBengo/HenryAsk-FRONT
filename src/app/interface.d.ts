export interface User {
  posts: Array<string>;
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
  role: number;
  user_name: string;
  profile_picture: string;
  biography: string;
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
  profile: User;
}

export interface isAlumnOrInstructor {
  user: Array;
  height: number;
}

export interface Post {
  owner: User;
  question: string;
  type: string;
  tags: Array<string>;
  description: string;
  open: boolean;
}

export interface Error {
  errorTag: string;
  errorSubmit: string;
}
