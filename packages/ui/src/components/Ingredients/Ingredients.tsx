"use client";

import { useState } from "react";

import { IngredientObject } from "@garlic/types";

import { IngredientsProps } from "./types";

const IngredientsList = (ingredients: IngredientObject[], className?: string) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
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

const Checkbox = (ingredient: IngredientObject) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input className="mr-1" type="checkbox" onClick={() => setIsChecked(!isChecked)} />
      <span className={isChecked ? "text-gray-500 line-through" : ""}>{`${ingredient.name} (${ingredient.measure.quantity} ${ingredient.measure.unit})`}</span>
    </label>
  );
};

const IngredientsCheckboxes = (ingredients: IngredientObject[], className?: string) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <div className="flex flex-col">
        {ingredients.map((ingredient, index) => <Checkbox key={`ingredient-${index}`} {...ingredient} />)}
      </div>
    </div>
  );
};

/**
 * An unordered list of ingredients.
 * @see {@link IngredientsProps}
 */
export default function Ingredients({ ingredients, className, options }: IngredientsProps) {
  switch (options?.format ?? "list") {
    case "list": return IngredientsList(ingredients, className);
    case "checkboxes": return IngredientsCheckboxes(ingredients, className);
  }
};
