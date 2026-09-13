import { Ingredient, NutritionFactsKey, Measure, SystemWeightUnit, NutritionFacts as NutritionFactsType } from "@garlic/types";

type Serving = Measure<SystemWeightUnit> | number;

interface NutritionFactsProps {
  ingredients: Ingredient[]
  className?: string
  options?: {
    servings?: Serving
  }
}

const rows: NutritionFactsKey[] = [
  "calories",
  "fat",
  "carbs",
  "protein",
  "salt",
] as const;

const getNutritionInfo = (ingredients: Ingredient[], servings?: Serving): [NutritionFactsType, NutritionFactsType | null] => {
  const total: NutritionFactsType = NutritionFactsType.fromRaw({
    measure: { quantity: 0, unit: "g" },
    calories: { quantity: 0, unit: "kcal" },
    fat: { quantity: 0, unit: "g" },
    carbs: { quantity: 0, unit: "g" },
    protein: { quantity: 0, unit: "g" },
    salt: { quantity: 0, unit: "g" },
  });

  ingredients.forEach((ingredient: Ingredient) => {
    const facts = ingredient.nutritionFacts;
    if (!facts) return;

    rows.forEach((row) => {
      total[row].quantity += facts[row].quantity ?? 0;
      total.measure.quantity += facts.measure.quantity;
    });
  });

  if (typeof servings === "undefined") return [total, null];

  const ratio = (typeof servings === "number")
    ? 1 / servings
    : servings.quantity / total.measure.quantity;

  const perServing: NutritionFactsType = structuredClone(total);
  rows.forEach(row => perServing[row].quantity *= ratio);

  perServing.measure = (typeof servings === "number")
    ? Measure.fromObject({ quantity: total.measure.quantity / servings, unit: total.measure.unit })
    : servings;

  total.calories.quantity = Math.round(total.calories.quantity);
  perServing.calories.quantity = Math.round(perServing.calories.quantity);

  return [total, perServing];
};

export default function NutritionFacts({ ingredients, className, options }: NutritionFactsProps) {
  const [total, perServing] = getNutritionInfo(ingredients, options?.servings);

  return (
    <table className={className}>
      <thead className="h-[42] w-[120]">
        <tr className="[&>*]:px-[8px] [&>*]:py-[8px]">
          <th></th>
          <th className="text-right !pr-4 w-50">Total</th>
          {perServing && <th className="text-right !pl-0.5 w-50">Serving</th>}
        </tr>
        <tr className="[&>*]:px-[8px] [&>*]:py-[8px]">
          <th className="text-left">Values</th>
          <th className="text-right !pr-4 w-50">{total.measure.quantity} {total.measure.unit}</th>
          {perServing && <th className="text-right !pl-0.5 w-50">{perServing.measure.quantity} {perServing.measure.unit}</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={`fact-${row}-${idx}`} className="[&>*]:px-[8px] [&>*]:py-[8px]">
            <td className="text-left">{row}</td>
            <td className="text-right !pr-4">{parseFloat(total[row].quantity.toFixed(2))} {total[row].unit}</td>
            {perServing && <td className="text-right !pl-0.5">{parseFloat(perServing[row].quantity.toFixed(2))} {perServing[row].unit}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
