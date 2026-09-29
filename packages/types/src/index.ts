// fluid
export const metricFluidUnits = ["l", "ml"] as const;
export const imperialFluidUnits = ["fl oz", "tsp", "tbsp", "cup"] as const;

export type MetricFluidUnit = typeof metricFluidUnits[number];
export type ImperialFluidUnit = typeof imperialFluidUnits[number];

export type FluidUnit = MetricFluidUnit | ImperialFluidUnit;

// weight
export const metricWeightUnits = ["kg", "g"] as const;
export const imperialWeightUnits = ["lb", "oz", "cup"] as const;
export const unitaryWeightUnits = [
  "unit",
  "head",
  "leaf",
  "clove",
  "piece",
  "slice",
  "ounce",
  "pinch"
] as const;

export type MetricWeightUnit = typeof metricWeightUnits[number];
export type ImperialWeightUnit = typeof imperialWeightUnits[number];
export type UnitaryWeightUnit = typeof unitaryWeightUnits[number];

export type SystemWeightUnit =
  | MetricWeightUnit
  | ImperialWeightUnit;

export type WeightUnit =
  | SystemWeightUnit
  | UnitaryWeightUnit;

export type MetricTemperatureUnit = "C";
export type ImperialTemperatureUnit = "F";
export type TemperatureUnit = MetricTemperatureUnit | ImperialTemperatureUnit;

// energy
export const caloriesUnits = ["kcal", "kJ"] as const;
export type CaloriesUnit = typeof caloriesUnits[number];

// unit systems
export const unitSystems = ["metric", "imperial"] as const;
export type UnitSystem = typeof unitSystems[number];

export type MeasureUnit = WeightUnit | FluidUnit | CaloriesUnit;

export const metricUnits = [
  ...metricWeightUnits,
  ...metricFluidUnits,
  "C",
] as const;

export const metricUnitsSet = new Set(metricUnits);

export const imperialUnits = [
  ...imperialWeightUnits,
  ...imperialFluidUnits,
  "T",
] as const;

export const imperialUnitsSet = new Set(imperialUnits);

export const units = [
  ...metricUnits,
  ...imperialUnits,
  ...unitaryWeightUnits,
  ...caloriesUnits,
] as const;

export const unitsSet = new Set(units);

export type MetricUnit = typeof metricUnits[number];
export type ImperialUnit = typeof imperialUnits[number];

// data structures

export type MeasureObject<T extends MeasureUnit> = { quantity: number, unit: T };
export type MeasureString<T extends MeasureUnit> = `${number} ${T}`;

export class Measure<T extends MeasureUnit> {
  quantity: number;
  unit: T;

  constructor(quantity: number, unit: T) {
    if (quantity == -0) quantity = 0;

    if (Number.isNaN(quantity))
      throw new Error(`Invalid quantity. Value is parsed to NaN: ${quantity}`);

    if (!Number.isFinite(quantity))
      throw new Error("Invalid quantity. Can't be infinite");

    if (quantity < 0)
      throw new Error(`Invalid quantity. Can't be less than 0: ${quantity}`);

    this.quantity = quantity;
    this.unit = unit;
  }

  static fromObject<T extends MeasureUnit>(obj: MeasureObject<T>): Measure<T> {
    return new Measure(obj.quantity, obj.unit);
  }

  toObject(): MeasureObject<T> {
    return { quantity: this.quantity, unit: this.unit };
  }

  static fromString<T extends MeasureUnit>(measure: string): Measure<T> {
    const parts = measure.split(" ", 2);

    const quantity = Number(parts[0]);
    const unit = parts[1] as T;

    if (!unitsSet.has(unit))
      throw new Error(`Invalid unit on "${measure}". Got ${unit}, but must be one of the following: ${units.join(", ")}`);

    return new Measure(quantity, unit);
  }

  toString(): MeasureString<T> {
    return `${this.quantity} ${this.unit}`;
  }
};

// information
// export type FatInfo = Measure<WeightUnit> & {
//   saturated?: number
// };

// export type CarbsInfo = Measure<WeightUnit> & {
//   sugars?: number
//   fiber?: number
// };

/** Represents the nutrition facts of an ingredient. */
export class NutritionFacts {
  constructor(
    public measure: Measure<WeightUnit>,
    public calories: Measure<CaloriesUnit>,
    public fat: Measure<WeightUnit>,
    public carbs: Measure<WeightUnit>,
    public protein: Measure<WeightUnit>,
    public salt: Measure<WeightUnit>,
    public serving?: Measure<WeightUnit>,
  ) { }

  static fromRaw(raw: NutritionFactsObject): NutritionFacts {
    return new NutritionFacts(
      Measure.fromObject(raw.measure),
      Measure.fromObject(raw.calories),
      Measure.fromObject(raw.fat),
      Measure.fromObject(raw.carbs),
      Measure.fromObject(raw.protein),
      Measure.fromObject(raw.salt),
      raw.serving
        ? Measure.fromObject(raw.serving)
        : undefined,
    );
  }

  static fromObject(obj: Record<string, string>): NutritionFacts {
    const values = Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, Measure.fromString(value)])
    );

    return Object.assign(
      Object.create(NutritionFacts.prototype),
      values
    );
  }

  toObject(): NutritionFactsObject {
    return {
      measure: this.measure.toObject(),
      calories: this.calories.toObject(),
      fat: this.fat.toObject(),
      carbs: this.carbs.toObject(),
      protein: this.protein.toObject(),
      salt: this.salt.toObject(),
      serving: this.serving?.toObject(),
    };
  }
};

export type NutritionFactsObject = {
  calories: MeasureObject<CaloriesUnit>
  measure: MeasureObject<WeightUnit>
  fat: MeasureObject<WeightUnit>
  carbs: MeasureObject<WeightUnit>
  protein: MeasureObject<WeightUnit>
  salt: MeasureObject<WeightUnit>
  serving?: MeasureObject<WeightUnit>
};

export type NutritionFactsKey = keyof Omit<NutritionFactsObject, "measure" | "serving">;

/** Represents an ingredient. */
export type Ingredient = {
  name: string
  measure: Measure<MeasureUnit>
  serving?: Measure<MeasureUnit>
  nutritionFacts?: NutritionFacts
};

export type IngredientObject = {
  name: string
  measure: MeasureObject<MeasureUnit>
  serving?: MeasureObject<MeasureUnit>
  nutritionFacts?: NutritionFactsObject
};
