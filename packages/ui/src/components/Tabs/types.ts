export interface TabsStyles {
  /** Tailwind/CSS class(es) of the active tab. */
  on?: string
  /** Tailwind/CSS class(es) of the inactive tab. */
  off?: string
}

export interface TabsProps {
  /** List of strings that will be parsed into tabs. */
  tabs: readonly string[]

  /** Index of the active tab. */
  active?: number

  /**
   * What the component does when you click on another tab.
   * Useful to pass state upwards.
   *
   * @param {number} active - Index of the last clicked tab.
   */
  onChange?: (active: number) => void

  /**
   * Styles of the component.
   * @see {@link TabsStyles}
   */
  styles?: TabsStyles
}
