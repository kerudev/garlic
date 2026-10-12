// From https://nextjs.org/docs/app/api-reference/config/typescript#statically-typed-links

import type { Route } from "next";

type NavItem<T extends string = string> = {
  href: T
  label: string
};

export const navItems: NavItem<Route>[] = [
  { href: "/definition", label: "Definition" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/nutrition-table", label: "NutritionTable" },
  { href: "/recipe-info", label: "RecipeInfo" },
  { href: "/steps", label: "Steps" },
];
