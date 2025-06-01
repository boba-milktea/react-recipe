import type { RecipeType } from "../types/recipeType";

export const pairUpIngredientMeasure = (recipe : RecipeType) => {
  const arr = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe['strIngredient' + i];
    const measure = recipe['strMeasure' + i];
    if (ingredient && ingredient.trim() !== '') {
      arr.push({ ingredient, measure });
    }
  }
  return arr;
};
