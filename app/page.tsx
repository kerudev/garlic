import { Ingredient } from "@garlic/types";
import { Ingredients, NutritionFacts } from "@garlic/ui";

export default function Page() {
  const className = "bg-blue-500 text-white p-4 rounded-lg";

  const ingredients: Ingredient[] = [
    {'name': 'onion', measure: {quantity: 1, unit: "unit"} },
    {'name': 'garlic',  measure: {quantity: 3, unit: "head"} },
  ];

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 sm:items-start">
        <Ingredients ingredients={ingredients} className={className} />
        <NutritionFacts ingredients={ingredients} className={className} />
      </main>
    </div>
  );
}
