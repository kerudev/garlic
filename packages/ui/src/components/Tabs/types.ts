export interface TabsStyles {
  on?: string
  off?: string
}

export interface TabsProps {
  tabs: readonly string[]
  active?: number
  onChange?: (active: number) => void
  styles?: TabsStyles
}
