import NutritionTableClient from "./subcomponents/NutritionTableClient";
import { NutritionFactsProps } from "./types";

/**
 * Takes a list of ingredients and formats them into a column that displays the
 * total of each nutrition fact.
 *
 * @see {@link NutritionFactsProps}
 */
export default function NutritionFacts({ ingredients, styles, options }: NutritionFactsProps) {
  return (
    <div className="nutrition-facts-wrapper">
      <NutritionTableClient
        ingredients={ingredients}
        styles={styles}
        options={options}
      />
    </div>
  );
}
