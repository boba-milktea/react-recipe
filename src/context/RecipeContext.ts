import { createContext } from 'react';
import type { RecipeContextType } from '../types/recipeType';

export const RecipeContext = createContext<RecipeContextType | null>(null);
