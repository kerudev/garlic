import type { Ingredient, NutritionFactsKeys, NutritionFacts } from "@garlic/types";

interface NutritionFactsProps {
  ingredients: Ingredient[],
  className?: string
  options?: {
    servingColumn?: boolean
  }
}

const useNutritionInfo = (ingredients: Ingredient[]): NutritionFacts => {
  let info: NutritionFacts = {
    measure: { quantity: 100, unit: "g" },
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
    salt: 0,
  };

  ingredients.forEach((ingredient: Ingredient) => {
    const facts = ingredient.nutritionFacts;
    if (!facts) return;

    info.calories += facts.calories || 0;
    info.fat += facts.fat || 0;
    info.carbs += facts.carbs || 0;
    info.protein += facts.protein || 0;
    info.salt += facts.salt || 0;
  });

  return info;
};

export default function NutritionFacts({ ingredients, className, options }: NutritionFactsProps) {
  const info = useNutritionInfo(ingredients);
  const rows: NutritionFactsKeys[] = [
    "calories",
    "fat",
    "carbs",
    "protein",
    "salt",
  ];

  return (
    <table className={`${className} w-[200]`}>
      <thead className="h-[42] w-[120]">
        <tr className="[&>*]:px-[8px] [&>*]:py-[8px]">
          <th className="text-left">Values</th>
          <th className="text-right">{info.measure.quantity} {info.measure.unit}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row} className="[&>*]:px-[8px] [&>*]:py-[8px]">
            <td className="text-left">{row}</td>
            <td className="text-right">{Math.round(info[row] * 100) / 100}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
