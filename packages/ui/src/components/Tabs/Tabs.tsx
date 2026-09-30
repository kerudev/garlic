"use client";

import { useState } from "react";

import { TabsProps } from "./types";

export default function Tabs({ tabs, active = 0, onChange, styles }: TabsProps) {
  if (active >= tabs.length) {
    throw new Error(`active (${active}) can't be higher or equal than tabs length (${tabs.length})`);
  }

  const [current, setCurrent] = useState(active);

  const handleTabChange = (idx: number) => {
    setCurrent(idx);
    onChange?.(idx);
  };

  return (
    <div className="flex flex-row-reverse">
      <div className={`
      ${styles?.off}
      inline-grid
      grid-flow-col
      mb-4
      text-white
      rounded-lg
      [&>*]:w-full
      [&>*]:h-full
      [&>*]:p-2
      [&>*]:box-border
    `}
      >
        {tabs.map((tab, idx) => (
          <button
            key={`tab-${idx}`}
            onClick={() => handleTabChange(idx)}
            className={current == idx ? styles?.on : styles?.off}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
