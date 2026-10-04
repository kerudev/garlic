import NutritionTableClient from "./subcomponents/NutritionTableClient";
import { NutritionTableProps } from "./types";

/**
 * Takes a list of ingredients and formats them into a column that displays the
 * total of each nutrition fact.
 *
 * @see {@link NutritionTableProps}
 */
export default function NutritionTable({ ingredients, styles, options }: NutritionTableProps) {
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
