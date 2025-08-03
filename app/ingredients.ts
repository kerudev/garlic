import { Ingredient } from '@garlic/types';

export const vegetables: Ingredient[] = [
  { name: 'onion', measure: { quantity: 1, unit: 'unit' } },
  { name: 'garlic', measure: { quantity: 3, unit: 'head' } },
];

export const cheesecake: Ingredient[] = [
  {
    name: 'cream cheese',
    measure: { quantity: 500, unit: 'g' },
    nutritionFacts: {
      measure: { quantity: 100, unit: 'g' },
      calories: { quantity: 244, unit: 'kcal' },
      fat: { quantity: 24, unit: 'g' },
      carbs: { quantity: 2.8, unit: 'g' },
      protein: { quantity: 4.1, unit: 'g' },
      salt: { quantity: 0.87, unit: 'g' },
    }
  },
  {
    name: 'cream',
    measure: { quantity: 250, unit: 'g' },
    nutritionFacts: {
      measure: { quantity: 100, unit: 'g' },
      calories: { quantity: 335, unit: 'kcal' },
      fat: { quantity: 35, unit: 'g' },
      carbs: { quantity: 3.1, unit: 'g' },
      protein: { quantity: 2, unit: 'g' },
      salt: { quantity: 0.1, unit: 'g' },
    }
  },
  {
    name: 'egg',
    measure: { quantity: 5, unit: 'unit' },
    nutritionFacts: {
      measure: { quantity: 100, unit: 'g' },
      calories: { quantity: 150, unit: 'kcal' },
      fat: { quantity: 11.1, unit: 'g' },
      carbs: { quantity: 0.5, unit: 'g' },
      protein: { quantity: 12.5, unit: 'g' },
      salt: { quantity: 0.36, unit: 'g' },
    }
  },
  {
    name: 'sugar',
    measure: { quantity: 200, unit: 'g' },
    nutritionFacts: {
      measure: { quantity: 100, unit: 'g' },
      calories: { quantity: 400, unit: 'kcal' },
      fat: { quantity: 0, unit: 'g' },
      carbs: { quantity: 100, unit: 'g' },
      protein: { quantity: 0, unit: 'g' },
      salt: { quantity: 0, unit: 'g' },
    }
  },
  {
    name: 'white chocolate',
    measure: { quantity: 250, unit: 'g' },
    nutritionFacts: {
      measure: { quantity: 100, unit: 'g' },
      calories: { quantity: 549, unit: 'kcal' },
      fat: { quantity: 33, unit: 'g' },
      carbs: { quantity: 55, unit: 'g' },
      protein: { quantity: 7.9, unit: 'g' },
      salt: { quantity: 0.3, unit: 'g' },
    }
  },
  {
    name: 'vanilla extract',
    measure: { quantity: 1, unit: 'tbsp' },
  },
  {
    name: 'flour',
    measure: { quantity: 10, unit: 'g' },
    nutritionFacts: {
      measure: { quantity: 100, unit: 'g' },
      calories: { quantity: 344, unit: 'kcal' },
      fat: { quantity: 1.4, unit: 'g' },
      carbs: { quantity: 72, unit: 'g' },
      protein: { quantity: 10, unit: 'g' },
      salt: { quantity: 0, unit: 'g' },
    }
  },
];
