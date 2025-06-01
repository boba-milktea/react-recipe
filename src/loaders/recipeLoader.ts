import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import { fetchRecipe } from '../apis/fetchData';
import type { RecipeAPIResponse } from '../types/recipeType';

export const recipeLoader: LoaderFunction = async ({
  params
}: LoaderFunctionArgs) => {
  const { recipeId } = params;
  const data = (await fetchRecipe(recipeId)) as RecipeAPIResponse;
  return data?.meals[0];
};
