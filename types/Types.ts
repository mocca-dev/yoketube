type Author = {
  name: string;
  url: string;
};

export interface Video {
  title: string;
  author: Author;
  duration: string;
  thumbnail: string;
}

export interface EnhancedVideo extends Video {
  url: string;
  played: boolean;
}

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
