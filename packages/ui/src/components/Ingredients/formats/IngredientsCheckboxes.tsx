"use client";

import { useState } from "react";

import { IngredientObject } from "@garlic/types";

import { IngredientsFormatProps } from "./types";

function Checkbox(ingredient: IngredientObject) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input className="mr-1" type="checkbox" onClick={() => setIsChecked(!isChecked)} />
      <span className={isChecked ? "text-gray-500 line-through" : ""}>
        {`${ingredient.name} (${ingredient.measure.quantity} ${ingredient.measure.unit})`}
      </span>
    </label>
  );
};

export function IngredientsCheckboxes({ ingredients, className }: IngredientsFormatProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <div className="flex flex-col">
        {ingredients.map((ingredient, index) => <Checkbox key={`ingredient-${index}`} {...ingredient} />)}
      </div>
    </div>
  );
};
