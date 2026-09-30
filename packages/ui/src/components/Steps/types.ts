export type StepsKind = "list" | "circles";

export interface StepsProps {
  steps: string[]
  className?: string
  options?: {
    kind?: StepsKind
  }
}
