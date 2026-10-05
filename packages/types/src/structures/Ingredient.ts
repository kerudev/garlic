import { Measure, MeasureObject } from "./Measure";
import { NutritionFacts, NutritionFactsObject } from "./NutritionFacts";
import { MeasureUnit } from "../types";

/** Check out the full server-side class at {@link Ingredient} */
export type IngredientObject = {
  name: string
  measure: MeasureObject<MeasureUnit>
  serving?: MeasureObject<MeasureUnit>
  nutritionFacts?: NutritionFactsObject
};

/** For an object representation, see {@link IngredientObject} */
export type Ingredient = {
  /** Name of the item. */
  name: string
  /** How much is used in total. */
  measure: Measure<MeasureUnit>
  /** How much is used per serving. */
  serving?: Measure<MeasureUnit>
  /** Calories, fat, carbs, etc of the item. */
  nutritionFacts?: NutritionFacts
};
