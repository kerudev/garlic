import type { Ingredient, NutritionFactsKey, NutritionFacts, Measure, SystemWeightUnit } from '@garlic/types';

interface NutritionFactsProps {
  ingredients: Ingredient[]
  className?: string
  options?: {
    serving?: Measure<SystemWeightUnit>
  }
}

const rows: NutritionFactsKey[] = [
  'calories',
  'fat',
  'carbs',
  'protein',
  'salt',
] as const;

const useNutritionInfo = (ingredients: Ingredient[], serving: Measure<SystemWeightUnit> | undefined = undefined): [NutritionFacts, NutritionFacts | null] => {
  const total: NutritionFacts = {
    measure: { quantity: 0, unit: 'g' },
    calories: { quantity: 0, unit: 'kcal' },
    fat: { quantity: 0, unit: 'g' },
    carbs: { quantity: 0, unit: 'g' },
    protein: { quantity: 0, unit: 'g' },
    salt: { quantity: 0, unit: 'g' },
  };

  ingredients.forEach((ingredient: Ingredient) => {
    const facts = ingredient.nutritionFacts;
    if (!facts) return;

    rows.forEach((row) => {
      total[row].quantity += facts[row].quantity ?? 0;
      total.measure.quantity += facts.measure.quantity;
    });
  });

  if (typeof serving === 'undefined') return [total, null];

  const perServing: NutritionFacts = { ...structuredClone(total), measure: serving };

  const ratio = perServing.measure.quantity / total.measure.quantity;
  rows.forEach(row => perServing[row].quantity *= ratio);

  total.calories.quantity = Math.round(total.calories.quantity);
  perServing.calories.quantity = Math.round(perServing.calories.quantity);

  return [total, perServing];
};

export default function NutritionFacts({ ingredients, className, options }: NutritionFactsProps) {
  const [total, serving] = useNutritionInfo(ingredients, options?.serving);

  return (
    <table className={className}>
      <thead className="h-[42] w-[120]">
        <tr className="[&>*]:px-[8px] [&>*]:py-[8px]">
          <th className="text-left">Values</th>
          <th className="text-right !pr-4 w-50">{total.measure.quantity} {total.measure.unit}</th>
          {serving && <th className="text-right !pl-0.5 w-50">{serving.measure.quantity} {serving.measure.unit} (serving)</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row} className="[&>*]:px-[8px] [&>*]:py-[8px]">
            <td className="text-left">{row}</td>
            <td className="text-right !pr-4">{parseFloat(total[row].quantity.toFixed(2))} {total[row].unit}</td>
            {serving && <td className="text-right !pl-0.5">{parseFloat(serving[row].quantity.toFixed(2))} {serving[row].unit}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
