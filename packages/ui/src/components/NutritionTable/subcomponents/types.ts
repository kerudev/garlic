import { IngredientObject, Serving, UnitSystem } from "@garlic/types";

import { NutritionTableStyles } from "../types";

//////////////////////////////
// NutritionTableClient
//////////////////////////////

export interface NutritionTableClientProps {
  ingredients: IngredientObject[]
  styles?: NutritionTableStyles
  options?: {
    servings?: Serving
    unitConversion?: boolean
    unitSystem?: UnitSystem
  }
}

//////////////////////////////
// NutritionTableInner
//////////////////////////////

export interface NutritionTableInnerStyles {
  table?: string
  thead?: string
  tbody?: string
  tr?: string
  th?: string
  td?: string
}

export interface NutritionTableInnerProps {
  ingredients: IngredientObject[]
  styles?: NutritionTableInnerStyles
  options?: {
    servings?: Serving
    unitConversion?: boolean
  }
}
