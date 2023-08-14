import { ReactElement } from "react";
import { useInView } from "react-intersection-observer";

import { ReactComponent as ChevronRight } from "assets/chevron-right.svg";

import {
  flatInfiniteResult,
  useApiInfiniteQuery,
} from "hooks/useQuery/useApiInfiniteQuery";

import { IMAGES } from "utils/constants";

import { Movie, MovieProps } from "./components/Movie";
import { Props, QueryMovie } from "./types";

export function ListMovies({ movies }: Props): ReactElement {
  const { ref, inView } = useInView();

  const query = useApiInfiniteQuery<QueryMovie>({
    endpoint: "Movies",
  });

  const data = flatInfiniteResult<QueryMovie>(query).map<MovieProps>(
    (item) => ({
      image: IMAGES.thumb[Math.floor(Math.random() * 12)],
      name: item.title,
    })
  );

  return (
    <div className="px-24 mt-5 md:px-20">
      <div className="flex items-end pb-6">
        <h2 className="text-2xl font-semibold">Trending now</h2>
        <ChevronRight />
      </div>
      <div className="flex flex-wrap gap-6">
        {data.map(({ image, name }, index) => (
          <Movie key={index} image={image} name={name} ref={ref} />
        ))}
      </div>
    </div>
  );
}
