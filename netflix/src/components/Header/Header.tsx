import { ReactElement } from "react";

import { ReactComponent as NetflixLogo } from "assets/NetflixLogo.svg";
import { ReactComponent as Bell } from "assets/search.svg";
import { ReactComponent as Search } from "assets/bell.svg";

import { Link } from "./components/Link";

export function Header(): ReactElement {
  return (
    <div className="fixed w-full bg-gradient-to-b from-foreground z-10">
      <div className="flex py-5 px-10">
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
        <div className="flex ml-auto gap-6">
          <a href="#">
            <Bell />
          </a>
          <a href="#">
            <Search />
          </a>
        </div>
      </div>
    </div>
  );
}
