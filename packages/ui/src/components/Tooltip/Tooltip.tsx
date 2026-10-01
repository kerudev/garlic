import { arrowMapping, positionMapping } from "./constants";
import { TooltipProps } from "./types";

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
