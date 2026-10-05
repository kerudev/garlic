//////////////////////////////
// Fluid
//////////////////////////////

export const metricFluidUnits = ["l", "ml"] as const;
export const imperialFluidUnits = ["fl oz", "tsp", "tbsp", "cup"] as const;

//////////////////////////////
// Weight
//////////////////////////////

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

//////////////////////////////
// Energy
//////////////////////////////

export const caloriesUnits = ["kcal", "kJ"] as const;

//////////////////////////////
// Unit systems
//////////////////////////////

export const unitSystems = ["metric", "imperial"] as const;

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

//////////////////////////////
// Unit conversion
//////////////////////////////

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

export const unitTable = {
  ...metricToImperial,
  ...imperialToMetric,
};
