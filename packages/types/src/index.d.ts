declare const metricFluidUnits: readonly ["l", "ml"];
declare const imperialFluidUnits: readonly ["fl oz", "tsp", "tbsp", "cup"];

export type MetricFluidUnit = typeof metricFluidUnits[number];
export type ImperialFluidUnit = typeof imperialFluidUnits[number];

export type FluidUnit = MetricFluidUnit | ImperialFluidUnit;


declare const metricWeightUnits: readonly ["kg", "g"];
declare const imperialWeightUnits: readonly ["lb", "oz", "cup"];
declare const unitaryWeightUnits: readonly [
  "unit",
  "head",
  "leaf",
  "clove",
  "piece",
  "slice",
  "ounce",
  "pinch"
];

export type MetricWeightUnit = typeof metricWeightUnits[number];
export type ImperialWeightUnit = typeof imperialWeightUnits[number];
export type UnitaryWeightUnit = typeof unitaryWeightUnits[number];

export type WeightUnit = MetricWeightUnit | ImperialWeightUnit | UnitaryWeightUnit;


export type MetricTemperatureUnit = "C";
export type ImperialTemperatureUnit = "F";
export type TemperatureUnit = MetricTemperatureUnit | ImperialTemperatureUnit;


declare const caloriesUnits: readonly ["kcal", "kJ"];
export type CaloriesUnit = typeof caloriesUnits[number];

export type UnitSystem = "metric" | "imperial";
export type MeasureUnit = WeightUnit | FluidUnit;

export type MetricUnit =
| MetricTemperatureUnit
| MetricFluidUnit
| MetricWeightUnit;

export type ImperialUnit =
| ImperialTemperatureUnit 
| ImperialFluidUnit 
| ImperialWeightUnit;

export type Measure<T extends MeasureUnit | WeightUnit | FluidUnit> = {
  unit: T,
  quantity: number,
};

/**
 * Represents an ingredient.
 */
export type Ingredient = {
  name: string,
  measure: Measure<MeasureUnit>,
  serving?: Measure<MeasureUnit>,
  nutritionFacts?: NutritionFacts,
};

export type CaloriesInfo = {
  unit?: CaloriesUnit,
  total: number,
};

export type FatInfo = {
  unit?: WeightUnit,
  total: number,
  saturated?: number,
};

export type CarbsInfo = {
  unit?: WeightUnit,
  total: number,
  sugars?: number,
  fiber?: number,
};

export type ProteinInfo = {
  unit?: WeightUnit,
  total: number,
};

/**
 * Represents the nutrition facts of an ingredient.
 */
// export type NutritionFacts = {
//   measure: Measure<WeightUnit>,
//   calories: CaloriesInfo,
//   fat: FatInfo,
//   carbs: CarbsInfo,
//   protein: ProteinInfo,
//   salt: number,
// };

export type NutritionFacts = {
  measure: Measure<WeightUnit>,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  salt: number,
};

type NutritionFactsKeys = keyof Omit<NutritionFacts, "measure">;
