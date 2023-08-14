import { ReactElement } from "react";

import { ReactComponent as ChevronRight } from "assets/chevron-right.svg";

import { Movie } from "./components/Movie";
import { Props } from "./types";

export function ListMovies({ movies }: Props): ReactElement {
  return (
    <div className="px-24 mt-5 md:px-20">
      <div className="flex items-end pb-6">
        <h2 className="text-2xl font-semibold">Trending now</h2>
        <ChevronRight />
      </div>
      <div className="flex flex-wrap gap-6">
        {movies.map(({ image, name }, index) => (
          <Movie key={index} image={image} name={name} />
        ))}
      </div>
    </div>
  );
}
