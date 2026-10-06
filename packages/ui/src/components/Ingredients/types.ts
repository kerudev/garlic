import type { IngredientObject } from "@garlic/types";

export type IngredientsFormat = "list" | "checkboxes";

export interface IngredientsProps {
  /** List of {@link IngredientObject} used to obtain the total ingredients. */
  ingredients: IngredientObject[]
  /** Tailwind/CSS class(es) of the component. */
  className?: string

  options?: {
    /** Format of the list. */
    format?: IngredientsFormat
  }
}
