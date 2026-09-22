"use client";

export interface TabsStyles {
  on?: string
  off?: string
}

interface TabsProps {
  tabs: readonly string[]
  active?: number
  onChange?: (active: number) => void
  styles?: TabsStyles
}

export default function Tabs({ tabs, active, onChange, styles }: TabsProps) {
  active ??= 0;
  if (active >= tabs.length) {
    throw new Error(`active (${active}) can't be higher or equal than tabs length (${tabs.length})`);
  }

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
            onClick={() => onChange?.(idx)}
            className={active == idx ? styles?.on : styles?.off}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
