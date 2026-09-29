import { MeasureUnit } from "@garlic/types";

const metricToImperial: Record<string, Record<string, number>> = {
  g: {
    lb: 2.2046 / 1000,
    oz: 35.2739 / 1000,
  },
};

const imperialToMetric: Record<string, Record<string, number>> = {};
for (const [metric, units] of Object.entries(metricToImperial)) {
  for (const [imperial, ratio] of Object.entries(units)) {
    if (typeof imperialToMetric[imperial] === "undefined") imperialToMetric[imperial] = {};
    imperialToMetric[imperial][metric] = 1 / ratio;
  }
}

const unitTable = {
  ...metricToImperial,
  ...imperialToMetric,
};

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
