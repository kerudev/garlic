/**
 * Possible positions of a Tooltip:
 *
 *    top-left |   top  | top-right
 *        left |        | right
 * bottom-left | bottom | bottom-right
 */
export type TooltipPosition =
  | "top-left" | "top" | "top-right"
  | "left" | "right"
  | "bottom-left" | "bottom" | "bottom-right";

export interface TooltipProps {
  position?: TooltipPosition
  show?: boolean
  className?: string
  children?: string
}
