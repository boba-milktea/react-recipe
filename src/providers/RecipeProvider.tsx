import { useState, type ReactNode } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import type { RecipeType } from '../types/recipeType';

const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [likedRecipes, setLikedRecipes] = useState<RecipeType[]>([]);

  return (
    <RecipeContext.Provider value={{likedRecipes, setLikedRecipes}}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
