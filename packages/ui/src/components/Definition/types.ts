import { TooltipProps } from "../Tooltip/types";

export interface DefinitionProps {
  /** Text displayed on the tooltip. */
  definition: string

  /** Tailwind/CSS class(es) of the component. */
  className?: string

  /**
   * Props passed down to Tooltip.
   * @see {@link TooltipProps}
   */
  tooltip: TooltipProps

  /** The text you hover to reveal the tooltip. */
  children: string
}
