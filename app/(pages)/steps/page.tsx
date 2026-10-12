import { Steps } from "@garlic/ui";

import { steps } from "../../constants/ingredients";

export default function Page() {
  return (
    <>
      <p className="text-3xl text-black font-bold mb-4">Steps</p>

      <p className="text-xl text-black font-bold mb-4">Format: list</p>
      <Steps
        className="bg-amber-500 text-white p-4 rounded-lg"
        steps={steps}
        options={{ format: "list" }}
      />

      <p className="text-xl text-black font-bold mb-4">Format: circles</p>
      <Steps
        className="bg-amber-500 text-white p-4 rounded-lg"
        steps={steps}
        options={{ format: "circles" }}
      />
    </>
  );
}
