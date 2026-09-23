"use client";

import { IngredientObject, MeasureObject, SystemWeightUnit, unitSystems } from "@garlic/types";

import { Tabs } from "@garlic/ui";
import { TabsStyles } from "../Tabs/Tabs";
import Table from "./Table";

type Serving = MeasureObject<SystemWeightUnit> | number;

interface Styles {
  table?: string
  thead?: string
  tbody?: string
  tr?: string
  th?: string
  td?: string
  tabs?: TabsStyles
}

interface Props {
  ingredients: IngredientObject[]
  styles?: Styles
  options?: {
    servings?: Serving
    unitConversion?: boolean
  }
}

export function Client({ ingredients, styles, options }: Props) {
  const onTabChange = (index: number) => {
    console.log(index);
  };

  return (
    <>
      {options?.unitConversion && <Tabs tabs={unitSystems} styles={styles?.tabs} onChange={onTabChange} />}
      <Table ingredients={ingredients} styles={styles} options={options} />
    </>
  );
}
