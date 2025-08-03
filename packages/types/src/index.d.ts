// fluid
declare const metricFluidUnits: readonly ['l', 'ml'];
declare const imperialFluidUnits: readonly ['fl oz', 'tsp', 'tbsp', 'cup'];

export type MetricFluidUnit = typeof metricFluidUnits[number];
export type ImperialFluidUnit = typeof imperialFluidUnits[number];

export type FluidUnit = MetricFluidUnit | ImperialFluidUnit;

// weight
declare const metricWeightUnits: readonly ['kg', 'g'];
declare const imperialWeightUnits: readonly ['lb', 'oz', 'cup'];
declare const unitaryWeightUnits: readonly [
  'unit',
  'head',
  'leaf',
  'clove',
  'piece',
  'slice',
  'ounce',
  'pinch'
];

export type MetricWeightUnit = typeof metricWeightUnits[number];
export type ImperialWeightUnit = typeof imperialWeightUnits[number];
export type UnitaryWeightUnit = typeof unitaryWeightUnits[number];

export type WeightUnit = MetricWeightUnit | ImperialWeightUnit | UnitaryWeightUnit;

// temperature
export type MetricTemperatureUnit = 'C';
export type ImperialTemperatureUnit = 'F';
export type TemperatureUnit = MetricTemperatureUnit | ImperialTemperatureUnit;

// energy
declare const caloriesUnits: readonly ['kcal', 'kJ'];
export type CaloriesUnit = typeof caloriesUnits[number];

// unit systems
export type UnitSystem = 'metric' | 'imperial';
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
  unit: T
  quantity: number
};

// information
export type BaseInfo = {
  unit: CaloriesUnit
  quantity: number
};

export type CaloriesInfo = BaseInfo<CaloriesUnit>;

export type FatInfo = BaseInfo<WeightUnit> & {
  saturated?: number
};

export type CarbsInfo = BaseInfo<WeightUnit> & {
  sugars?: number
  fiber?: number
};

export type ProteinInfo = BaseInfo<WeightUnit>;

/** Represents an ingredient. */
export type Ingredient = {
  name: string
  measure: Measure<MeasureUnit>
  serving?: Measure<MeasureUnit>
  nutritionFacts?: NutritionFacts
};

/** Represents the nutrition facts of an ingredient. */
export type NutritionFacts = {
  serving?: Measure<WeightUnit>
  measure: Measure<WeightUnit>
  calories: CaloriesInfo
  fat: FatInfo
  carbs: CarbsInfo
  protein: ProteinInfo
  salt: Measure<WeightUnit>
};

type NutritionFactsKey = keyof Omit<NutritionFacts, 'measure'>;
