"use client";

import { useHover } from "@uidotdev/usehooks";

import { DefinitionProps } from "./types";
import Tooltip from "../Tooltip/Tooltip";

export default function Definition({ definition, className, tooltip, children }: DefinitionProps) {
  const [ref, hovering] = useHover();

  return (
    <div className={`${className} relative inline-block`}>
      <button>
        <span ref={ref} className="underline decoration-dotted cursor-context-menu">{children}</span>
      </button>
      <Tooltip {...tooltip} show={(tooltip?.show ?? hovering)}>{definition}</Tooltip>
    </div>
  );
}
