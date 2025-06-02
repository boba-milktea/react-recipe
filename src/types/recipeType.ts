export interface RecipeType {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  // dynamic keys for recipe['strIngredient' + i] and recipe['strMeasure' + i]
  [key: string]: string | undefined;
}

export type RecipeAPIResponse = {
  meals: RecipeType[];
};
