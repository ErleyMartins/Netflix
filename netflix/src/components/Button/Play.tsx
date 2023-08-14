import { ReactElement } from "react";

import { ReactComponent as ChevronRight } from "assets/chevron-right.svg";

export function Play(): ReactElement {
  return (
    <button
      type="button"
      className="flex items-center py-2 px-4 bg-light text-foreground rounded hover:bg-light/40 transition-colors"
    >
      <ChevronRight />
      <span className="font-semibold">Play</span>
    </button>
  );
}
