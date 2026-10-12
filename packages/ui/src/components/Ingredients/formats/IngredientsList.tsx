import { IngredientsFormatProps } from "./types";

export function IngredientsList({ ingredients, className }: IngredientsFormatProps) {
  return (
    <div className={className}>
      <p className="text-2xl font-bold mb-2">Ingredients</p>
      <ul className="list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={`ingredient-${index}`}>
            {`${ingredient.name} (${ingredient.measure.quantity} ${ingredient.measure.unit})`}
          </li>
        ))}
      </ul>
    </div>
  );
};
