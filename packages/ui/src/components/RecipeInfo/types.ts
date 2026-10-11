export type RecipeInfoDifficulty = "easy" | "mid" | "hard";
export type RecipeInfoAlign = "left" | "center" | "right" | "space-between";

export interface RecipeInfoProps {
  /** How hard the recipe is to make. */
  difficulty: RecipeInfoDifficulty

  /** Time segments of the recipe. */
  time: {
    cook: string
    prep?: string
    cooling?: string
  }

  className?: string

  options?: {
    /** Where the text of the component will be aligned. */
    align?: RecipeInfoAlign
  }
}
