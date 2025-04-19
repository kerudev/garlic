import { Ingredient } from "@garlic/types";

interface NutritionFactsProps {
  ingredients: Ingredient[],
  className?: string
}

export default function NutritionFacts({ ingredients, className }: NutritionFactsProps) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
