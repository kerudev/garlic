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

const positionMapping: Record<TooltipPosition, string> = {
  "top-left": "bottom-full right-0 mb-2",
  "top": "bottom-full left-1/2 mb-2 -translate-x-1/2",
  "top-right": "bottom-full mb-2 left-0",

  "left": "right-full top-1/2 mr-2 -translate-y-1/2",
  "right": "left-full top-1/2 ml-2 -translate-y-1/2",

  "bottom-left": "top-full right-0 mt-2",
  "bottom": "top-full left-1/2 mt-2 -translate-x-1/2",
  "bottom-right": "top-full left-0 mt-2",
};

const arrowMapping: Record<TooltipPosition, string> = {
  "top-left": "after:top-full after:right-4 after:border-x-8 after:border-t-8 after:border-x-transparent",
  "top": "after:top-full after:left-1/2 after:-translate-x-1/2 after:border-x-8 after:border-t-8 after:border-x-transparent",
  "top-right": "after:top-full after:left-4 after:border-x-8 after:border-t-8 after:border-x-transparent",

  "left": "after:left-full after:top-1/2 after:-translate-y-1/2 after:border-y-8 after:border-l-8 after:border-y-transparent",
  "right": "after:right-full after:top-1/2 after:-translate-y-1/2 after:border-y-8 after:border-r-8 after:border-y-transparent",

  "bottom-left": "after:bottom-full after:right-4 after:border-x-8 after:border-b-8 after:border-x-transparent",
  "bottom": "after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-x-8 after:border-b-8 after:border-x-transparent",
  "bottom-right": "after:bottom-full after:left-4 after:border-x-8 after:border-b-8 after:border-x-transparent",
};

export default function Tooltip({ position, show, className, children }: TooltipProps) {
  if (!position) position = "top";
  if (!show) return null;

  const tooltipPos = positionMapping[position];
  const arrowPos = arrowMapping[position];

  return (
    <div
      className={`
      absolute
      min-w-3xs
      text-center
      ${className}
      ${tooltipPos}
      ${arrowPos}
      z-50
      after:absolute
      after:block
      after:w-0
      after:h-0
      after:text-fuchsia-200
      after:border-solid
      after:content-['']
    `}
    >
      {children}
    </div>
  );
}
