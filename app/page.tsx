import { cheesecake, cheesecakeServing, steps, vegetables } from "./ingredients";
import { Definition, Ingredients, NutritionFacts, Steps } from "@garlic/ui";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="p-8 font-[family-name:var(--font-geist-sans)] gap-4 text-black flex flex-col">
        <h1 className="text-2xl text-black font-bold mb-4">Component showcase</h1>

        <h2 className="text-xl text-black font-bold mb-4">Definition</h2>

        <h3 className="text-l text-black font-bold mb-4">All definition positions</h3>
        <div className="flex flex-col gap-32">
          {/* bottom */}
          <div className="grid grid-cols-3 gap-32 justify-items-center">
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg"
              tooltip={{
                position: "bottom-left",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              bottom-left
            </Definition>
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg"
              tooltip={{
                position: "bottom",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              bottom
            </Definition>
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg"
              tooltip={{
                position: "bottom-right",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              bottom-right
            </Definition>
          </div>

          {/* left - right */}
          <div className="grid grid-cols-3 gap-32">
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg justify-self-start"
              tooltip={{
                position: "left",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              left
            </Definition>
            <div></div>
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg justify-self-end"
              tooltip={{
                position: "right",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              right
            </Definition>
          </div>

          {/* top */}
          <div className="grid grid-cols-3 gap-32 justify-items-center">
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg"
              tooltip={{
                position: "top-left",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              top-left
            </Definition>
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg"
              tooltip={{
                position: "top",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              top
            </Definition>
            <Definition
              definition="Prevents garlic from burning"
              className="bg-amber-500 text-white p-4 rounded-lg"
              tooltip={{
                position: "top-right",
                className: "bg-fuchsia-200 text-black p-4 rounded-lg",
                show: true,
              }}
            >
              top-right
            </Definition>
          </div>
        </div>

        <h3 className="text-l text-black font-bold mb-4">Inline definition</h3>
        <span className="relative items-center">
          Cook the garlic with its{" "}
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg"
            tooltip={{
              position: "top",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
            }}
          >
            skin on
          </Definition>
          {" "}for 1 minute.
        </span>

        <h2 className="text-xl text-black font-bold mb-4">Ingredients</h2>

        <Ingredients
          className="bg-blue-500 text-white p-4 rounded-lg"
          ingredients={vegetables}
        />

        <h2 className="text-xl text-black font-bold mb-4">NutritionFacts</h2>

        <h3 className="text-l text-black font-bold mb-4">Without servings</h3>
        <NutritionFacts
          className="bg-green-500 text-white p-4 rounded-lg w-auto"
          ingredients={cheesecake}
        />
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
          options={{ servings: 16 }}
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
