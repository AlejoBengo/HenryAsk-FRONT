export interface User {
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
  posts: Array<string>;
  answers: Array<string>;
  comments: Array<string>;
  own_henry_coin: number;
  give_henry_coin: number;
  theorics: Array<string>;
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
export interface Post {
  _id: string;
  question: string;
  description: string;
  owner: string;
  createdAt: string;
  answers: Array<string>;
  type: string;
  tags: Array<string>;
  open: boolean;
}
