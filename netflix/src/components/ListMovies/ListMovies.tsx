import { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ReactComponent as ChevronRight } from "assets/chevron-right.svg";

import {
  flatInfiniteResult,
  useApiInfiniteQuery,
} from "hooks/useQuery/useApiInfiniteQuery";

import { IMAGES } from "utils/constants";

import { Movie, MovieProps } from "./components/Movie";
import { Props, QueryMovie } from "./types";

export function ListMovies({ terms }: Props): ReactElement {
  const { ref, inView } = useInView();

  const query = useApiInfiniteQuery<QueryMovie>({
    endpoint: "Movies",
    queryString: { terms },
  });

  const data = flatInfiniteResult<QueryMovie>(query).map<MovieProps>(
    (item) => ({
      image: IMAGES.thumb[Math.floor(Math.random() * 12)],
      name: item.title,
    })
  );

  useEffect(() => {
    if (inView && query.hasNextPage) {
      query.fetchNextPage();
    }
  }, [inView, query]);

  return (
    <div className="px-24 mt-5 md:px-20">
      <div className="flex items-end pb-6">
        <h2 className="text-2xl font-semibold">Trending now</h2>
        <ChevronRight />
      </div>
      <div className="flex flex-wrap gap-6 md:justify-center">
        {data.map(({ image, name }, index) =>
          data.length >= 6 && data.length - 6 === index ? (
            <Movie key={index} image={image} name={name} ref={ref} />
          ) : (
            <Movie key={index} image={image} name={name} />
          )
        )}
      </div>

      {query.isFetchingNextPage && query.hasNextPage ? (
        <div className="flex justify-center items-center">
          <span className="text-xl font-bold my-5">Loading ...</span>
        </div>
      ) : null}

      {data.length < 1 ? (
        <div className="flex justify-center items-center">
          <span className="text-xl font-bold my-5">Movie not found.</span>
        </div>
      ) : null}
    </div>
  );
}
