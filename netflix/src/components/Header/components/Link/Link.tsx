import { ReactElement } from "react";

import { Props } from "./types";

export function Link({ children, isSelected }: Props): ReactElement {
  const style = isSelected
    ? "font-bold"
    : "hover:text-light/40 transition-colors";

  return (
    <a href="#" className={style}>
      {children}
    </a>
  );
}
