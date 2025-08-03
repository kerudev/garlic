import { cheesecake, vegetables } from './ingredients';
import { Ingredients, NutritionFacts } from '@garlic/ui';

export default function Page() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 sm:items-start">
        <Ingredients ingredients={vegetables} className="bg-blue-500 text-white p-4 rounded-lg" />
        <NutritionFacts ingredients={cheesecake} className="bg-green-500 text-white p-4 rounded-lg" />
      </main>
    </div>
  );
}
