export interface RecipeType {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
}

export type RecipeAPIResponse = {
  meals: RecipeType[];
};
