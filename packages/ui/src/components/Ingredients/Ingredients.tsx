import { IngredientsCheckboxes, IngredientsList } from "./formats";
import { IngredientsProps } from "./types";

/**
 * An unordered list of ingredients. Allowed formats:
 * - "list": regular list format.
 * - "checkboxes": each number is inside a circle.
 *
 * @see {@link IngredientsProps}
 */
export default function Ingredients({ ingredients, className, options }: IngredientsProps) {
  switch (options?.format ?? "list") {
    case "list": return IngredientsList(ingredients, className);
    case "checkboxes": return IngredientsCheckboxes(ingredients, className);
  }
};
