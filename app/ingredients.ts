import { Ingredient } from "@garlic/types";

export const vegetables: Ingredient[] = [
  {name: 'onion', measure: {quantity: 1, unit: "unit"} },
  {name: 'garlic',  measure: {quantity: 3, unit: "head"} },
];

export const cheesecake: Ingredient[] = [
  {
    name: 'cream cheese',
    measure: {quantity: 500, unit: "g"},
    nutritionFacts: {
      measure: {quantity: 100, unit: "g"},
      calories: 244,
      fat: 24,
      carbs: 2.8,
      protein: 4.1,
      salt: 0.87,
    }
  },
  {
    name: 'cream',
    measure: {quantity: 250, unit: "g"},
    nutritionFacts: {
      measure: {quantity: 100, unit: "g"},
      calories: 335,
      fat: 35,
      carbs: 3.1,
      protein: 2,
      salt: 0.1,
    }
  },
  {
    name: 'egg',
    measure: {quantity: 5, unit: "unit"},
    nutritionFacts: {
      measure: {quantity: 100, unit: "g"},
      calories: 150,
      fat: 11.1,
      carbs: 0.5,
      protein: 12.5,
      salt: 0.36,
    }
  },
  {
    name: 'sugar',
    measure: {quantity: 200, unit: "g"},
    nutritionFacts: {
      measure: {quantity: 100, unit: "g"},
      calories: 400,
      fat: 0,
      carbs: 100,
      protein: 0,
      salt: 0,
    }
  },
  {
    name: 'white chocolate',
    measure: {quantity: 250, unit: "g"},
    nutritionFacts: {
      measure: {quantity: 100, unit: "g"},
      calories: 549,
      fat: 33,
      carbs: 55,
      protein: 7.9,
      salt: 0.3,
    }
  },
  {
    name: 'vanilla extract',
    measure: {quantity: 1, unit: "tbsp"},
  },
  {
    name: 'flour',
    measure: {quantity: 10, unit: "g"},
    nutritionFacts: {
      measure: {quantity: 100, unit: "g"},
      calories: 344,
      fat: 1.4,
      carbs: 72,
      protein: 10,
      salt: 0,
    }
  },
];