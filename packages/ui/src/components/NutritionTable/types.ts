import { IngredientObject, MeasureObject, SystemWeightUnit } from "@garlic/types";

import { TabsStyles } from "../Tabs/types";

/**
 * The library behaves differently depending on the type of Serving:
 * - {@link MeasureObject}: used to calculate a number of servings, then
 *   used to divide an amount to get the amount per serving.
 * - number: used to divide an amount to get the amount per serving.
 */
export type Serving = MeasureObject<SystemWeightUnit> | number;

export interface NutritionFactsStyles {
  /** Tailwind/CSS class(es) of the component. */
  table?: string

  /** Tailwind/CSS class(es) of the component. */
  thead?: string

  /** Tailwind/CSS class(es) of the component. */
  tbody?: string

  /** Tailwind/CSS class(es) of the component. */
  tr?: string

  /** Tailwind/CSS class(es) of the component. */
  th?: string

  /** Tailwind/CSS class(es) of the component. */
  td?: string

  /** Tailwind/CSS class(es) of the tabs. */
  tabs?: TabsStyles
}

export interface NutritionFactsProps {
  /** List of {@link IngredientObject} used to generate the nutrition facts. */
  ingredients: IngredientObject[]

  /**
   * Styles of the component.
   * @see {@link NutritionFactsStyles}
   */
  styles?: NutritionFactsStyles

  options?: {
    /**
     * If passed, adds an additional column to the table. This column contains
     * the nutrition facts of a singular serving.
     * @see {@link Serving}
     */
    servings?: Serving

    /**
     * If true, adds a Tabs component that allows you to switch between Metric
     * and Imperial unit systems.
     *
     * NOTE: this feature is heavily WIP.
     */
    unitConversion?: boolean
  }
}
