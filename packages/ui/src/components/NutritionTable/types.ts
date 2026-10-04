import { IngredientObject, Serving } from "@garlic/types";

import { TabsStyles } from "../Tabs/types";

export interface NutritionTableStyles {
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

export interface NutritionTableProps {
  /** List of {@link IngredientObject} used to generate the nutrition facts. */
  ingredients: IngredientObject[]

  /**
   * Styles of the component.
   * @see {@link NutritionTableStyles}
   */
  styles?: NutritionTableStyles

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
