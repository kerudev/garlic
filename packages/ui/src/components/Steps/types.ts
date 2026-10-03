/** Available formats for the Steps component. */
export type StepsKind = "list" | "circles";

export interface StepsProps {
  /** List of steps to follow. */
  steps: string[]
  /** Tailwind/CSS class(es) of the list. */
  className?: string
  options?: {
    /** Format of the list. */
    kind?: StepsKind
  }
}
