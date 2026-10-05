import { unitsSet } from "../constants";
import { MeasureUnit } from "../types";

/** Check out the full server-side class at {@link Measure} */
export type MeasureString<T extends MeasureUnit> = `${number} ${T}`;

/** Check out the full server-side class at {@link Measure} */
export type MeasureObject<T extends MeasureUnit> = { quantity: number, unit: T };

/**
 * For a string representation, see {@link MeasureString}.
 * For an object representation, see {@link MeasureObject}.
 */
export class Measure<T extends MeasureUnit> {
  /** Amount of the measurement. */
  quantity: number;
  /** Unit in which the measurement is expressed. */
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
      throw new Error(`Invalid unit on "${measure}". Got ${unit}, but must be one of the following: ${[...unitsSet].join(", ")}`);

    return new Measure(quantity, unit);
  }

  toString(): MeasureString<T> {
    return `${this.quantity} ${this.unit}`;
  }
};
