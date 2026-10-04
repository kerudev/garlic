import { Measure, MeasureObject } from "./Measure";
import { CaloriesUnit, WeightUnit } from "../types";

export class NutritionFacts {
  constructor(
    /** Amount the nutrition facts refer to. */
    public measure: Measure<WeightUnit>,
    /** Energy content. */
    public calories: Measure<CaloriesUnit>,
    /** Fat content. */
    public fat: Measure<WeightUnit>,
    /** Carbohydrate content. */
    public carbs: Measure<WeightUnit>,
    /** Protein content. */
    public protein: Measure<WeightUnit>,
    /** Salt content. */
    public salt: Measure<WeightUnit>,
    /** Amount per serving. */
    public serving?: Measure<WeightUnit>,
  ) { }

  static fromObject(raw: NutritionFactsObject): NutritionFacts {
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

  static fromRecord(obj: Record<string, string>): NutritionFacts {
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
