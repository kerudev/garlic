import { StepsCircles, StepsList } from "./format";
import { StepsProps } from "./types";

/**
 * A list of ordered steps to follow. Allowed formats:
 * - "list": regular list format.
 * - "circle": each number is inside a circle.
 *
 * @see {@link StepsProps}
 */
export default function Steps({ steps, className, options }: StepsProps) {
  switch (options?.format ?? "list") {
    case "list": return <StepsList steps={steps} className={className} />;
    case "circles": return <StepsCircles steps={steps} className={className} />;
  }
}
