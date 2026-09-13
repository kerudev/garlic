import { Ingredient, Measure, NutritionFacts, SystemWeightUnit } from "@garlic/types";

export const vegetablesString = [
  { name: "onion", measure: "1 unit" },
  { name: "garlic", measure: "3 head" },
];

export const vegetables: Ingredient[] = vegetablesString.map(obj => ({ name: obj.name, measure: Measure.fromString(obj.measure) }));

export const cheesecakeIngredients = [
  {
    name: "cream cheese",
    measure: "500 g",
    nutritionFacts: {
      measure: "100 g",
      calories: "244 kcal",
      fat: "24 g",
      carbs: "2.8 g",
      protein: "4.1 g",
      salt: "0.87 g",
    }
  },
  {
    name: "cream",
    measure: "250 g",
    nutritionFacts: {
      measure: "100 g",
      calories: "335 kcal",
      fat: "35 g",
      carbs: "3.1 g",
      protein: "2 g",
      salt: "0.1 g",
    }
  },
  {
    name: "egg",
    measure: "5 unit",
    nutritionFacts: {
      measure: "100 g",
      calories: "150 kcal",
      fat: "11.1 g",
      carbs: "0.5 g",
      protein: "12.5 g",
      salt: "0.36 g",
    }
  },
  {
    name: "sugar",
    measure: "200 g",
    nutritionFacts: {
      measure: "100 g",
      calories: "400 kcal",
      fat: "0 g",
      carbs: "100 g",
      protein: "0 g",
      salt: "0 g",
    }
  },
  {
    name: "white chocolate",
    measure: "250 g",
    nutritionFacts: {
      measure: "100 g",
      calories: "549 kcal",
      fat: "33 g",
      carbs: "55 g",
      protein: "7.9 g",
      salt: "0.3 g",
    }
  },
  {
    name: "vanilla extract",
    measure: "1 tbsp",
  },
  {
    name: "flour",
    measure: "10 g",
    nutritionFacts: {
      measure: "100 g",
      calories: "344 kcal",
      fat: "1.4 g",
      carbs: "72 g",
      protein: "10 g",
      salt: "0 g",
    }
  },
];

export const cheesecake = cheesecakeIngredients.map((obj) => {
  const ingredient: Ingredient = { name: obj.name, measure: Measure.fromString(obj.measure) };

  if (obj.nutritionFacts !== undefined) {
    if (obj.nutritionFacts !== undefined) {
      ingredient.nutritionFacts = NutritionFacts.fromObject(obj.nutritionFacts);
    }
  }

  return ingredient;
});

export const cheesecakeServing = Measure.fromString<SystemWeightUnit>("300 g");

export const steps = [
  "Mix the liquids",
  "Add in the solids",
  "Let rest for 10 minutes",
  "Bake at 150C for 20 minutes",
];
