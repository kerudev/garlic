"use client";

import { IngredientObject, MeasureObject, SystemWeightUnit, UnitSystem, unitSystems } from "@garlic/types";

import { getConversionRatio, Tabs } from "@garlic/ui";
import Table from "./Table";
import { useState } from "react";
import { NutritionFactsStyles } from "./types";

type Serving = MeasureObject<SystemWeightUnit> | number;

interface Props {
  ingredients: IngredientObject[]
  styles?: NutritionFactsStyles
  options?: {
    servings?: Serving
    unitConversion?: boolean
    unitSystem?: UnitSystem
  }
}

export function Client({ ingredients, styles, options }: Props) {
  const [_ingredients, setIngredients] = useState(ingredients);

  const [current, setCurrent] = useState(options?.unitSystem
    ? unitSystems.indexOf(options.unitSystem)
    : 0
  );

  const onTabChange = (index: number) => {
    if (index == current) return;
    setCurrent(index);

    const system = unitSystems[current];

    const oldUnit = (system == "metric") ? "g" : "oz";
    const newUnit = (system == "metric") ? "oz" : "g";

    const ratio = getConversionRatio(oldUnit, newUnit);

    _ingredients.forEach((ing) => {
      ing.measure.quantity *= ratio;
      ing.measure.unit = newUnit;

      if (typeof ing.nutritionFacts === "undefined") return;
      Object.entries(ing.nutritionFacts).map(([k, v]) => {
        if (k == "calories") return;

        v.quantity *= ratio;
        v.unit = newUnit;
      });
    });

    setIngredients(_ingredients);
  };

  return (
    <>
      {options?.unitConversion && <Tabs tabs={unitSystems} active={current} styles={styles?.tabs} onChange={onTabChange} />}
      <Table ingredients={_ingredients} styles={styles} options={options} />
    </>
  );
}
