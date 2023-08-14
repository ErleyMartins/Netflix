import { MovieProps } from "./components/Movie";

export interface Props {
  movies: MovieProps[];
}

export interface QueryMovie {
  id: string;
  type: string;
  title: string;
  director: string;
  cast: string;
  country: string;
  dateAdded: string;
  releaseYear: number;
  rating: string;
  duration: string;
  listedIn: string;
  description: string;
}
