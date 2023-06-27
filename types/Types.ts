type Author = {
  name: string;
  url: string;
};

export type Video = {
  title: string;
  author: Author;
  duration: string;
  thumbnail: string;
};

export type List = {
  title: string;
  list: Video[] | string[];
  email?: string | null;
  _id?: string;
};

export type Day = {
  name: string;
  number: number;
  listId: string;
  date: string;
  title: string;
  list?: string[];
};

export type TWeek = {
  name: string;
  number: Number;
  listId: string;
};
