import { NutritionTable } from "@garlic/ui";

import { cheesecake, cheesecakeServing } from "../../constants/ingredients";

export default function Page() {
  return (
    <>
      <p className="text-3xl text-black font-bold mb-4">NutritionTable</p>

      <p className="text-xl text-black font-bold mb-4">Without servings</p>
      <NutritionTable
        styles={{
          table: "text-white p-4 w-full",
          thead: "h-[42] w-[120]",
          tr: "[&>*]:px-[8px] [&>*]:py-[8px] odd:bg-green-500 even:bg-green-400"
        }}
        ingredients={cheesecake}
      />

      <p className="text-xl text-black font-bold mb-4">Servings as an object</p>
      <NutritionTable
        styles={{
          table: "text-white p-4 w-full",
          thead: "h-[42] w-[120]",
          tr: "[&>*]:px-[8px] [&>*]:py-[8px] odd:bg-green-500 even:bg-green-400"
        }}
        ingredients={cheesecake}
        options={{ servings: cheesecakeServing }}
      />

      <p className="text-xl text-black font-bold mb-4">Servings as a number</p>
      <NutritionTable
        styles={{
          table: "text-white p-4 w-full",
          thead: "h-[42] w-[120]",
          tr: "[&>*]:px-[8px] [&>*]:py-[8px] odd:bg-green-500 even:bg-green-400",
          tabs: {
            on: "rounded-lg bg-green-400 hover:cursor-pointer",
            off: "rounded-lg bg-green-500 hover:cursor-pointer",
          }
        }}
        ingredients={cheesecake}
        options={{
          servings: 16,
          unitConversion: true,
        }}
      />
    </>
  );
}
