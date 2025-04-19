import { CaloriesUnit, Ingredient, UnitSystem } from "@garlic/types";

interface UnitConversionProps {
    ingredients: Ingredient[],
    options?: {
        to?: UnitSystem,
        weight?: UnitSystem,
        fluid?: UnitSystem,
        calories?: CaloriesUnit,
    }
}

export function useUnitConversion({ingredients, options}: UnitConversionProps) {
    // if (options?.to == "metric") {}
}
