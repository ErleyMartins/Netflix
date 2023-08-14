import { ReactElement } from "react";

import { ReactComponent as PlaySvg } from "assets/play.svg";

export function Play(): ReactElement {
  return (
    <button
      type="button"
      className="flex items-center py-2 px-4 bg-light text-foreground rounded hover:bg-light/40 transition-colors"
    >
      <PlaySvg />
      <span className="font-semibold">Play</span>
    </button>
  );
}
