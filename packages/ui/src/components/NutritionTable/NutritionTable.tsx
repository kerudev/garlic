import { NutritionFactsProps } from "./types";

import NutritionTableClient from "./subcomponents/NutritionTableClient";

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
