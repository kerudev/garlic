import { cheesecake, cheesecakeServing, vegetables } from "./ingredients";
import { Ingredients, NutritionFacts, Steps } from "@garlic/ui";

export default function Page() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 sm:items-start">
        <Ingredients
          className="bg-blue-500 text-white p-4 rounded-lg"
          ingredients={vegetables}
        />
        <NutritionFacts
          className="bg-green-500 text-white p-4 rounded-lg w-auto"
          ingredients={cheesecake}
          options={{
            // servings: cheesecakeServing
            servings: 12
          }}
        />
        <Steps
          className="bg-amber-500 text-white p-4 rounded-lg"
          steps={[
            "Mix the liquids",
            "Add in the solids",
            "Let rest for 10 minutes",
            "Bake at 150C for 20 minutes",
          ]}
        />
      </main>
    </div>
  );
}
