import { cheesecake, cheesecakeServing, steps, vegetables } from "./ingredients";
import { Ingredients, NutritionFacts, Steps } from "@garlic/ui";

export default function Page() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)] flex gap-4">
      <main className="flex flex-col row-start-2 sm:items-start">
        <h1 className="text-2xl text-black font-bold mb-4">Component showcase</h1>

        <h2 className="text-xl text-black font-bold mb-4">Ingredients</h2>

        <Ingredients
          className="bg-blue-500 text-white p-4 rounded-lg"
          ingredients={vegetables}
        />

        <h2 className="text-xl text-black font-bold mb-4">NutritionFacts</h2>

        <h3 className="text-l text-black font-bold mb-4">Servings as an object</h3>
        <NutritionFacts
          className="bg-green-500 text-white p-4 rounded-lg w-auto"
          ingredients={cheesecake}
          options={{ servings: cheesecakeServing }}
        />
        <h3 className="text-l text-black font-bold mb-4">Servings as a number</h3>
        <NutritionFacts
          className="bg-green-500 text-white p-4 rounded-lg w-auto"
          ingredients={cheesecake}
          options={{ servings: 12 }}
        />

        <h2 className="text-xl text-black font-bold mb-4">NutritionFacts</h2>

        <h3 className="text-l text-black font-bold mb-4">Steps kind: list</h3>
        <Steps
          className="bg-amber-500 text-white p-4 rounded-lg"
          steps={steps}
          options={{ kind: "list" }}
        />
        <h3 className="text-l text-black font-bold mb-4">Steps kind: circles</h3>
        <Steps
          className="bg-amber-500 text-white p-4 rounded-lg"
          steps={steps}
          options={{ kind: "circles" }}
        />
      </main>
    </div>
  );
}
