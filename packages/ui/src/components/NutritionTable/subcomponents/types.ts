import { IngredientObject, Serving, UnitSystem } from "@garlic/types";

import { NutritionTableStyles } from "../types";

export interface NutritionTableClientProps {
  ingredients: IngredientObject[]
  styles?: NutritionTableStyles
  options?: {
    servings?: Serving
    unitConversion?: boolean
    unitSystem?: UnitSystem
  }
}
