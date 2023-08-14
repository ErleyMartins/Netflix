import { ReactElement, useState } from "react";

import { Info, Play } from "components/Button";
import { Header } from "components/Header";
import { ListMovies, MovieProps } from "components/ListMovies";
import { Providers } from "components/Providers";

import { IMAGES } from "utils/constants";

const MOVIES = [...new Array(30).keys()].map<MovieProps>(() => ({
  image: IMAGES.thumb[Math.floor(Math.random() * 12)],
  name: "Queen's Gambit",
}));

export default function App(): ReactElement {
  const [search, setSearch] = useState("");

  return (
    <Providers>
      <Header search={search} onSearchChange={setSearch} />
      <div className="relative z-0">
        <img src={IMAGES.background} className="bg-gradient-to-b" />
        <div className="absolute bottom-0 left-0 pl-24 pb-36">
          <div className="grid gap-2">
            <div className="flex gap-4 items-center">
              <img src={IMAGES.netflix} />
              <b className="text-xl">S H O W</b>
            </div>
            <b className="text-9xl">MAID</b>
            <div className="flex gap-4">
              <Play />
              <Info />
            </div>
          </div>
        </div>
      </div>
      <ListMovies movies={MOVIES} />
    </Providers>
  );
}
