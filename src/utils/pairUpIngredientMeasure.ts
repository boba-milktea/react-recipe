import type { RecipeType } from '../types/recipeType';

/**
 * Creates an array of matched-up ingredients and measures.
 * @param {RecipeType} recipe - the recipe object with ingredient and measure fields.
 * @returns {{ ingredient: string, measure: string | undefined }[]} an array of objects with ingredients and the corresponding measures
 */

export const pairUpIngredientMeasure = (recipe: RecipeType) => {
  const arr = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe['strIngredient' + i];
    const measure = recipe['strMeasure' + i];
    if (
      ingredient &&
      typeof ingredient === 'string' &&
      ingredient.trim() !== ''
    ) {
      arr.push({ ingredient, measure });
    }
  }
  return arr;
};
