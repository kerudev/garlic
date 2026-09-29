import { Measure, MeasureObject } from "./Measure";
import { NutritionFacts, NutritionFactsObject } from "./NutritionFacts";

import { MeasureUnit } from "../types";

/** Represents an ingredient. */
export type Ingredient = {
  name: string
  measure: Measure<MeasureUnit>
  serving?: Measure<MeasureUnit>
  nutritionFacts?: NutritionFacts
};

export type IngredientObject = {
  name: string
  measure: MeasureObject<MeasureUnit>
  serving?: MeasureObject<MeasureUnit>
  nutritionFacts?: NutritionFactsObject
};
