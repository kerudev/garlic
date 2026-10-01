"use client";

import { useState } from "react";

import { unitSystems } from "@garlic/types";
import { Tabs, getConversionRatio } from "@garlic/ui";

import Table from "./Table";
import { NutritionTableClientProps } from "./types";

export default function NutritionTableClient({ ingredients, styles, options }: NutritionTableClientProps) {
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
