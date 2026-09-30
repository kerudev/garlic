import { NutritionFactsKey, Measure, NutritionFactsObject, SystemWeightUnit, IngredientObject, MeasureObject, WeightUnit } from "@garlic/types";

type Serving = MeasureObject<SystemWeightUnit> | number;

interface Styles {
  table?: string
  thead?: string
  tbody?: string
  tr?: string
  th?: string
  td?: string
}

interface Props {
  ingredients: IngredientObject[]
  styles?: Styles
  options?: {
    servings?: Serving
    unitConversion?: boolean
  }
}

const rows: NutritionFactsKey[] = [
  "calories",
  "fat",
  "carbs",
  "protein",
  "salt",
] as const;

const getNutritionInfo = (ingredients: IngredientObject[], servings?: Serving): [NutritionFactsObject, NutritionFactsObject | null] => {
  // TODO do this automatically
  const unit = ingredients[0].measure.unit as WeightUnit;

  const total: NutritionFactsObject = {
    measure: { quantity: 0, unit: unit },
    calories: { quantity: 0, unit: "kcal" },
    fat: { quantity: 0, unit: unit },
    carbs: { quantity: 0, unit: unit },
    protein: { quantity: 0, unit: unit },
    salt: { quantity: 0, unit: unit },
  };

  ingredients.forEach((ingredient: IngredientObject) => {
    const facts = ingredient.nutritionFacts;
    if (typeof facts === "undefined") return;

    total.measure.quantity += ingredient.measure.quantity;

    const ratio = ingredient.measure.quantity / facts.measure.quantity;

    rows.forEach((row) => {
      if (facts[row].quantity === 0) return;

      total[row].quantity += facts[row].quantity * ratio;
    });
  });

  if (typeof servings === "undefined" || servings === 0) return [total, null];

  const ratio = (typeof servings === "number")
    ? 1 / servings
    : servings.quantity / total.measure.quantity;

  const perServing = structuredClone(total);
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

export default function Table({ ingredients, styles, options }: Props) {
  const [total, perServing] = getNutritionInfo(ingredients, options?.servings);

  const [nServings, isRounded] = getServings(total.measure.quantity, options?.servings);
  const servingsText = nServings
    ? isRounded
      ? `${nServings} servings`
      : `${nServings} aprox. servings`
    : "";

  return (
    <table className={`${styles?.table ?? ""} rounded-lg overflow-hidden`}>
      <thead className={styles?.thead}>
        <tr className={`${styles?.tr ?? ""} align-top`}>
          <th></th>
          <th className="text-right !pr-4 w-50">Total{servingsText && <><br />{servingsText}</>}</th>
          {perServing && <th className="text-right !pl-0.5 w-50">Per serving</th>}
        </tr>
        <tr className={styles?.tr}>
          <th className="text-left">Values</th>
          <th className="text-right !pr-4 w-50">{total.measure.quantity.toFixed(2)} {total.measure.unit}</th>
          {perServing && <th className="text-right !pl-0.5 w-50">{perServing.measure.quantity.toFixed(2)} {perServing.measure.unit}</th>}
        </tr>
      </thead>
      <tbody className={styles?.tbody}>
        {rows.map((row, idx) => (
          <tr key={`fact-${row}-${idx}`} className={styles?.tr}>
            <td className="text-left rounded-bl-lg">{row}</td>
            <td className="text-right !pr-4">{parseFloat(total[row].quantity.toFixed(2))} {total[row].unit}</td>
            {perServing && <td className="text-right !pl-0.5">{parseFloat(perServing[row].quantity.toFixed(2))} {perServing[row].unit}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
