import type { Ingredient, NutritionFactsKey, NutritionFacts } from '@garlic/types';

interface NutritionFactsProps {
  ingredients: Ingredient[]
  className?: string
  options?: {
    servingColumn?: boolean
  }
}

const rows: NutritionFactsKey[] = [
  'calories',
  'fat',
  'carbs',
  'protein',
  'salt',
] as const;

const useNutritionInfo = (ingredients: Ingredient[]): NutritionFacts => {
  let ratio = 0;

  const info: NutritionFacts = {
    measure: { quantity: 100, unit: 'g' },
    calories: { quantity: 0, unit: 'kcal' },
    fat: { quantity: 0, unit: 'g' },
    carbs: { quantity: 0, unit: 'g' },
    protein: { quantity: 0, unit: 'g' },
    salt: { quantity: 0, unit: 'g' },
  };

  ingredients.forEach((ingredient: Ingredient) => {
    const facts = ingredient.nutritionFacts;

    if (!facts) return;

    ratio++;
    rows.forEach(row => info[row].quantity += facts[row].quantity ?? 0);
  });

  rows.forEach(row => info[row].quantity /= ratio);

  return info;
};

export default function NutritionFacts({ ingredients, className }: NutritionFactsProps) {
  const info = useNutritionInfo(ingredients);

  return (
    <table className={`${className} w-[200]`}>
      <thead className="h-[42] w-[120]">
        <tr className="[&>*]:px-[8px] [&>*]:py-[8px]">
          <th className="text-left">Values</th>
          <th className="text-right !pr-0.5">{info.measure.quantity}</th>
          <th className="text-left !pl-0.5">{info.measure.unit}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row} className="[&>*]:px-[8px] [&>*]:py-[8px]">
            <td className="text-left">{row}</td>
            <td className="text-right !pr-0.5">{parseFloat(info[row].quantity.toFixed(2))}</td>
            <td className="text-left !pl-0.5">{info[row].unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
