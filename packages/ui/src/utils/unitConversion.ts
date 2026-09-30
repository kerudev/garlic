import { MeasureUnit, unitTable } from "@garlic/types";

export function getConversionRatio<T extends MeasureUnit>(from: T, to: T): number {
  return unitTable[from][to] ?? 1;
}

// export function ensureUnitSystem<T extends MeasureUnit>(measure: MeasureObject<T>, system: UnitSystem): MeasureObject<T> {
//   const unit = measure.unit;

//   if (system == "metric") {
//     if (metricUnitsSet.has(unit as MetricUnit)) {
//       getConversionRatio(unit, "kg" as MeasureUnit);
//     }
//   } else {
//     if (imperialUnitsSet.has(unit as ImperialUnit)) {

//     }
//   }
// }

// export function changeUnitSystem(ingredients: IngredientObject[], to: UnitSystem): IngredientObject[] {
//   // if (options?.to == "metric") {}
//   return ingredients.map((ing) => {
//     const unit = ing.measure.unit;

//     getConversionRatio(unit, to)
//     return ing;
//   });
// }
