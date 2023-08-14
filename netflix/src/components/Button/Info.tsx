import { ReactElement } from "react";

import { ReactComponent as InfoSvg } from "assets/info.svg";

export function Info(): ReactElement {
  return (
    <button
      type="button"
      className="flex items-center py-2 px-4 bg-light/60  rounded hover:bg-light/40 transition-colors"
    >
      <InfoSvg color="white" />
      <span className="font-semibold">More Info</span>
    </button>
  );
}
