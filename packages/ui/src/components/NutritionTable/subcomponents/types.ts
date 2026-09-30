import { IngredientObject, Serving, UnitSystem } from "@garlic/types";
import { NutritionFactsStyles } from "../types";

export interface NutritionTableClientProps {
  ingredients: IngredientObject[]
  styles?: NutritionFactsStyles
  options?: {
    servings?: Serving
    unitConversion?: boolean
    unitSystem?: UnitSystem
  }
}
