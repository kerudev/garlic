import {
  caloriesUnits,
  imperialFluidUnits,
  imperialUnits,
  imperialWeightUnits,
  metricFluidUnits,
  metricUnits,
  metricWeightUnits,
  unitSystems,
  unitaryWeightUnits,
} from "./constants";

//////////////////////////////
// Fluid
//////////////////////////////

export type MetricFluidUnit = typeof metricFluidUnits[number];
export type ImperialFluidUnit = typeof imperialFluidUnits[number];

export type FluidUnit = MetricFluidUnit | ImperialFluidUnit;

//////////////////////////////
// Weight
//////////////////////////////

export type MetricWeightUnit = typeof metricWeightUnits[number];
export type ImperialWeightUnit = typeof imperialWeightUnits[number];
export type UnitaryWeightUnit = typeof unitaryWeightUnits[number];

export type SystemWeightUnit = MetricWeightUnit | ImperialWeightUnit;
export type WeightUnit = SystemWeightUnit | UnitaryWeightUnit;

//////////////////////////////
// Temperature
//////////////////////////////

export type MetricTemperatureUnit = "C";
export type ImperialTemperatureUnit = "F";
export type TemperatureUnit = MetricTemperatureUnit | ImperialTemperatureUnit;

//////////////////////////////
// Energy
//////////////////////////////

export type CaloriesUnit = typeof caloriesUnits[number];

//////////////////////////////
// Unit systems
//////////////////////////////

export type UnitSystem = typeof unitSystems[number];

export type MeasureUnit = WeightUnit | FluidUnit | CaloriesUnit;

export type MetricUnit = typeof metricUnits[number];
export type ImperialUnit = typeof imperialUnits[number];
