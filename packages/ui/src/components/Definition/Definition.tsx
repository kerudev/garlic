"use client";

import { useHover } from "@uidotdev/usehooks";

import { Tooltip } from "@garlic/ui";

import { DefinitionProps } from "./types";

/**
 * Shows a tooltip when hovering over text. Definitions are meant to give extra
 * context when needed.
 * @see {@link DefinitionProps}
 */
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
