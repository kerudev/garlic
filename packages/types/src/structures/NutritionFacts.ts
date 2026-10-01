import { Measure, MeasureObject } from "./Measure";
import { CaloriesUnit, WeightUnit } from "../types";

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
