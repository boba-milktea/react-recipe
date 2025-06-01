import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import { fetchRecipes } from '../apis/fetchData';
import type { RecipeType } from '../types/recipeType';

export const recipesLoader: LoaderFunction = async ({
  request
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') ?? '';

  const data = await fetchRecipes<{ meals: RecipeType[] }>(query);
  return data?.meals ?? [];
};
