import NutritionTableClient from "./subcomponents/NutritionTableClient";
import { NutritionFactsProps } from "./types";

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
