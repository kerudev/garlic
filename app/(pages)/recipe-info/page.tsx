import { RecipeInfo } from "@garlic/ui";

export default function Page() {
  return (
    <>
      <p className="text-3xl text-black font-bold mb-4">RecipeInfo</p>

      <p className="text-xl text-black font-bold mb-4">Align: right</p>
      <RecipeInfo
        className="bg-indigo-400 text-white p-4 rounded-lg"
        difficulty="mid"
        time={{
          prep: "1h 30min",
          cook: "1h 30min"
        }}
        options={{
          align: "right",
        }}
      />

      <p className="text-xl text-black font-bold mb-4">Align: center</p>
      <RecipeInfo
        className="bg-indigo-400 text-white p-4 rounded-lg"
        difficulty="mid"
        time={{
          prep: "1h 30min",
          cook: "1h 30min"
        }}
        options={{
          align: "center",
        }}
      />

      <p className="text-xl text-black font-bold mb-4">Align: right</p>
      <RecipeInfo
        className="bg-indigo-400 text-white p-4 rounded-lg"
        difficulty="mid"
        time={{
          prep: "1h 30min",
          cook: "1h 30min"
        }}
        options={{
          align: "right",
        }}
      />

      <p className="text-xl text-black font-bold mb-4">Align: space-between</p>
      <RecipeInfo
        className="bg-indigo-400 text-white p-4 rounded-lg"
        difficulty="mid"
        time={{
          prep: "1h 30min",
          cook: "1h 30min"
        }}
        options={{
          align: "space-between",
        }}
      />
    </>
  );
}
