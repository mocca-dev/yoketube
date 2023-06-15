export type Video = {
  name: string;
  author: string;
  duration: string;
  thumbnailUrl: string;
};

export type List = {
  title: string;
  list: Video[] | string[];
  email?: string | null;
  _id?: string;
};
