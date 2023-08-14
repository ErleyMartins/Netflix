import { ReactElement, Ref, forwardRef } from "react";

import { Props } from "./types";

const Movie = forwardRef(
  ({ image, name }: Props, ref: Ref<HTMLButtonElement>): ReactElement => {
    return (
      <button
        type="button"
        className="relative w-80 h-36 mb-10 hover:scale-110 transition-transform group"
        ref={ref}
      >
        <img src={image} className="rounded-md" />
        <div className="absolute -bottom-10 hidden group-hover:block">
          <div className="flex items-center pl-2 w-80 h-10 bg-foreground/50">
            <span className="text-lg font-semibold">{name}</span>
          </div>
        </div>
      </button>
    );
  }
);

export { Movie };
