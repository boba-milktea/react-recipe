import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import type { RecipeContextType } from '../types/recipeType';

export const useRecipeContext = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipeContext should be within a RecipeProvider');
  }
  return context;
};
