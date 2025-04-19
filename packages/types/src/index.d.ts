export type CaloriesUnit = "kcal" | "kJ";

export type UnitaryWeightUnit = "unit" | "head" | "clove" | "piece" | "slice" | "leaf" | "pinch";

export type MetricFluidUnit = "l" | "ml";
export type ImperialFluidUnit = "fl oz" | "tsp" | "tbsp" | "cup";

export type MetricWeightUnit = "kg" | "g";
export type ImperialWeightUnit = "lb" | "oz" | "cup";

export type FluidUnit = MetricFluidUnit | ImperialFluidUnit;
export type WeightUnit = MetricWeightUnit | ImperialWeightUnit | UnitaryWeightUnit;

export type MeasureUnit = WeightUnit | FluidUnit;

export type Measure = {
    unit: MeasureUnit,
    quantity: number,
};

/**
 * Represents an ingredient.
 */
export type Ingredient = {
    name: string,
    measure: Measure,
    serving?: Measure,
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
export type NutritionFacts = {
    unit: WeightUnit,
    calories: CaloriesInfo,
    fat: FatInfo,
    carbs: CarbsInfo,
    protein: ProteinInfo,
    salt: number,
};