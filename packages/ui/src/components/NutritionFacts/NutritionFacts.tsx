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

    total.measure.quantity += ingredient.measure.quantity;

    const ratio = ingredient.measure.quantity / facts.measure.quantity;

    rows.forEach((row) => {
      if (facts[row].quantity === 0) return;

      total[row].quantity += facts[row].quantity * ratio;
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

  // Round some values for convenience
  total.calories.quantity = Math.round(total.calories.quantity);
  perServing.measure.quantity = Math.round(perServing.measure.quantity);
  perServing.calories.quantity = Math.round(perServing.calories.quantity);

  return [total, perServing];
};

const getServings = (total: number, serving?: Serving): [number, boolean] => {
  if (typeof serving === "undefined") return [0, false];
  if (typeof serving === "number") return [serving, false];

  const s = total / serving?.quantity;
  if (Number.isInteger(s)) return [s, false];

  return [Math.round(s), true];
};

export default function NutritionFacts({ ingredients, className, options }: NutritionFactsProps) {
  const [total, perServing] = getNutritionInfo(ingredients, options?.servings);

  const [nServings, isRounded] = getServings(total.measure.quantity, options?.servings);
  const servingsText = nServings && isRounded ? `${nServings} servings` : `${nServings} aprox. servings`;

  return (
    <table className={className}>
      <thead className="h-[42] w-[120]">
        {/* Iterate over each row */}
        <tr className="[&>*]:px-[8px] [&>*]:py-[8px] align-top">
          <th></th>
          <th className="rounded-tl-lg text-right !pr-4 w-50">Total<br />({servingsText})</th>
          {perServing && <th className="text-right !pl-0.5 w-50">Per serving</th>}
        </tr>
        <tr className="[&>*]:px-[8px] [&>*]:py-[8px]">
          <th className="text-left">Values</th>
          <th className="text-right !pr-4 w-50">{total.measure.quantity} {total.measure.unit}</th>
          {perServing && <th className="text-right !pl-0.5 w-50">{perServing.measure.quantity} {perServing.measure.unit}</th>}
        </tr>
      </thead>
      <tbody>
        {/* Iterate over each row */}
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
