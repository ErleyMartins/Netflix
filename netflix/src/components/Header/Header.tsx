import { ChangeEventHandler, ReactElement, useState } from "react";

import { ReactComponent as NetflixLogo } from "assets/netflix-logo.svg";
import { ReactComponent as Search } from "assets/search.svg";
import { ReactComponent as Close } from "assets/Close.svg";
import { ReactComponent as Bell } from "assets/bell.svg";

import { Link } from "./components/Link";
import { Props } from "./types";

export function Header({ search, onSearchChange }: Props): ReactElement {
  const [showSearch, setShowSearch] = useState(false);

  const handleOnSearchClick = (): void => {
    onSearchChange("");
    setShowSearch(!showSearch);
  };
  const handleOnSearchChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => onSearchChange(event.target.value);

  return (
    <div className="fixed w-full h-20 bg-gradient-to-b from-foreground z-10">
      <div className="flex h-full items-center px-10">
        <div className="mr-8">
          <NetflixLogo height={26} width={111} />
        </div>
        <div className="flex gap-6">
          <Link isSelected>Start</Link>
          <Link>Shows</Link>
          <Link>Movies</Link>
          <Link>New</Link>
          <Link>My List</Link>
        </div>
        <div className="flex items-center ml-auto gap-6">
          {showSearch ? (
            <input
              type="search"
              className="bg-foreground/50 rounded-md px-3 py-2 focus:outline-none"
              value={search}
              onChange={handleOnSearchChange}
            />
          ) : null}

          <button type="button" onClick={handleOnSearchClick}>
            {showSearch ? (
              <Close fill="white" height={32} width={32} />
            ) : (
              <Search />
            )}
          </button>
          <button type="button">
            <Bell />
          </button>
        </div>
      </div>
    </div>
  );
}
