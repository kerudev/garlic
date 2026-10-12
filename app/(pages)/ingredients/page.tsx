import { Ingredients } from "@garlic/ui";

import { vegetables } from "../../constants/ingredients";

export default function Page() {
  return (
    <>
      <p className="text-3xl text-black font-bold mb-4">Ingredients</p>

      <p className="text-xl text-black font-bold mb-4">Format: list</p>
      <Ingredients
        className="bg-blue-500 text-white p-4 rounded-lg"
        ingredients={vegetables}
        options={{
          format: "list",
        }}
      />

      <p className="text-xl text-black font-bold mb-4">Format: checkboxes</p>
      <Ingredients
        className="bg-blue-500 text-white p-4 rounded-lg"
        ingredients={vegetables}
        options={{
          format: "checkboxes",
        }}
      />
    </>
  );
}
