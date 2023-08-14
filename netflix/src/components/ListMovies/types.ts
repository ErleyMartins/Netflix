export interface Props {
  terms: string;
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
