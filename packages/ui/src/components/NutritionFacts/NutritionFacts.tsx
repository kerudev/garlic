import { NutritionFactsProps } from "./types";

import { Client } from "./Client";

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
