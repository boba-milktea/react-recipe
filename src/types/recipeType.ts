export interface RecipeType {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  isLiked?: boolean | undefined;
  // dynamic keys for recipe['strIngredient' + i] and recipe['strMeasure' + i]
  [key: string]: string | boolean | undefined;
}

export type RecipeAPIResponse = {
  meals: RecipeType[];
};

export interface RecipeContextType {
  likedRecipes: RecipeType[];
  setLikedRecipes: React.Dispatch<React.SetStateAction<RecipeType[]>>;
}
