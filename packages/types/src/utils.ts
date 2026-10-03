import { MeasureObject } from "./structures";
import { SystemWeightUnit } from "./types";

/**
 * The library behaves differently depending on the type of Serving:
 * - {@link MeasureObject}: used to calculate a number of servings, then
 *   used to divide an amount to get the amount per serving.
 * - number: used to divide an amount to get the amount per serving.
 */
export type Serving = MeasureObject<SystemWeightUnit> | number;
