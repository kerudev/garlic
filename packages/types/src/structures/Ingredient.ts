import { Measure, MeasureObject } from "./Measure";
import { NutritionFacts, NutritionFactsObject } from "./NutritionFacts";
import { MeasureUnit } from "../types";

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

export type IngredientObject = {
  /** Name of the item. */
  name: string
  /** How much is used in total. */
  measure: MeasureObject<MeasureUnit>
  /** How much is used per serving. */
  serving?: MeasureObject<MeasureUnit>
  /** Calories, fat, carbs, etc of the item. */
  nutritionFacts?: NutritionFactsObject
};
