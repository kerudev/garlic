import { IngredientObject, MeasureObject, SystemWeightUnit } from "@garlic/types";

import { TabsStyles } from "../Tabs/Tabs";
import { Client } from "./Client";

type Serving = MeasureObject<SystemWeightUnit> | number;

interface NutritionFactsStyles {
  table?: string
  thead?: string
  tbody?: string
  tr?: string
  th?: string
  td?: string
  tabs?: TabsStyles
}

interface NutritionFactsProps {
  ingredients: IngredientObject[]
  styles?: NutritionFactsStyles
  options?: {
    servings?: Serving
    unitConversion?: boolean
  }
}

export default function NutritionFacts({ ingredients, styles, options }: NutritionFactsProps) {
  return (
    <div className="nutrition-facts-wrapper">
      <Client
        ingredients={ingredients}
        styles={styles}
        options={options}
      />
    </div>
  );
}
