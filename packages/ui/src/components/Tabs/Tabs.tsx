"use client";

import { useState } from "react";

export interface TabsStyles {
  on?: string
  off?: string
}

interface TabsProps {
  tabs: string[]
  styles?: TabsStyles
}

export default function Tabs({ tabs, styles }: TabsProps) {
  const [current, setCurrent] = useState(0);

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
            onClick={() => setCurrent(idx)}
            className={current == idx ? styles?.on : styles?.off}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
