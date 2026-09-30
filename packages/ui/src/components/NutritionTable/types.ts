import { IngredientObject, MeasureObject, SystemWeightUnit } from "@garlic/types";

import { TabsStyles } from "../Tabs/types";

export type Serving = MeasureObject<SystemWeightUnit> | number;

export interface NutritionFactsStyles {
  table?: string
  thead?: string
  tbody?: string
  tr?: string
  th?: string
  td?: string
  tabs?: TabsStyles
}

export interface NutritionFactsProps {
  ingredients: IngredientObject[]
  styles?: NutritionFactsStyles
  options?: {
    servings?: Serving
    unitConversion?: boolean
  }
}
