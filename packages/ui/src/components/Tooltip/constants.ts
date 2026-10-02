import { TooltipPosition } from "./types";

/** Tailwind classes that indicate the position of the tooltip. */
export const positionMapping: Record<TooltipPosition, string> = {
  "top-left": "bottom-full right-0 mb-2",
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  "top-right": "bottom-full mb-2 left-0",

  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",

  "bottom-left": "top-full right-0 mt-2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  "bottom-right": "top-full left-0 mt-2",
};

/**
 * Tailwind classes that indicate the position of the arrow that connects the
 * tooltip with the definition.
 *
 * Note that these arrows mirror the position of the tooltip. For example, if
 * the box is on the left, the arrow will be on the right side of the box.
 */
export const arrowMapping: Record<TooltipPosition, string> = {
  "top-left": "after:top-full after:right-4 after:border-x-8 after:border-t-8 after:border-x-transparent",
  top: "after:top-full after:left-1/2 after:-translate-x-1/2 after:border-x-8 after:border-t-8 after:border-x-transparent",
  "top-right": "after:top-full after:left-4 after:border-x-8 after:border-t-8 after:border-x-transparent",

  left: "after:left-full after:top-1/2 after:-translate-y-1/2 after:border-y-8 after:border-l-8 after:border-y-transparent",
  right: "after:right-full after:top-1/2 after:-translate-y-1/2 after:border-y-8 after:border-r-8 after:border-y-transparent",

  "bottom-left": "after:bottom-full after:right-4 after:border-x-8 after:border-b-8 after:border-x-transparent",
  bottom: "after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-x-8 after:border-b-8 after:border-x-transparent",
  "bottom-right": "after:bottom-full after:left-4 after:border-x-8 after:border-b-8 after:border-x-transparent",
};
